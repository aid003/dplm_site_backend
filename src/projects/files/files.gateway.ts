import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LoggerService } from '../../logger/logger.service';
import { DatabaseService } from '../../database/database.service';

interface AuthenticatedSocket extends Socket {
  userId?: number;
  projectId?: number;
}

interface FileChangeEvent {
  type: 'file_opened' | 'file_closed' | 'file_saved' | 'file_created' | 'file_deleted' | 'file_moved' | 'file_copied' | 'file_restored' | 'directory_created';
  filePath: string;
  userId: number;
  timestamp: string;
  oldPath?: string;
  sourcePath?: string;
  versionId?: string;
}

interface CursorPosition {
  line: number;
  column: number;
  selectionStart?: number;
  selectionEnd?: number;
}

interface UserActivity {
  userId: number;
  userName: string;
  userEmail: string;
  filePath: string;
  cursor?: CursorPosition;
  lastSeen: Date;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/projects',
})
export class FilesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private projectUsers = new Map<number, Map<number, UserActivity>>(); // projectId -> userId -> activity
  private userSockets = new Map<number, Set<string>>(); // userId -> socketIds

  constructor(
    private readonly logger: LoggerService,
    private readonly db: DatabaseService,
  ) {}

  async handleConnection(client: AuthenticatedSocket) {
    try {
      // Получаем токен из query параметров
      const token = client.handshake.query.token as string;
      const projectId = client.handshake.query.projectId as string;

      if (!token || !projectId) {
        this.logger.warn('WebSocket connection rejected: missing token or projectId');
        client.disconnect();
        return;
      }

      // Проверяем токен и получаем пользователя
      const session = await this.db.session.findUnique({
        where: { token },
        include: { user: true },
      });

      if (!session || !session.user) {
        this.logger.warn('WebSocket connection rejected: invalid token');
        client.disconnect();
        return;
      }

      // Проверяем доступ к проекту
      const numericProjectId = parseInt(projectId);
      const project = await this.db.project.findFirst({
        where: {
          id: numericProjectId,
          OR: [
            { ownerId: session.user.id },
            {
              members: {
                some: {
                  userId: session.user.id,
                },
              },
            },
          ],
        },
      });

      if (!project) {
        this.logger.warn(`WebSocket connection rejected: no access to project ${projectId}`);
        client.disconnect();
        return;
      }

      // Сохраняем информацию о пользователе в сокете
      client.userId = session.user.id;
      client.projectId = numericProjectId;

      // Подключаем к комнате проекта
      client.join(`project:${numericProjectId}`);

      // Добавляем пользователя в список активных пользователей
      this.addUserToProject(numericProjectId, session.user);

      // Уведомляем других пользователей о подключении
      client.to(`project:${numericProjectId}`).emit('user_joined', {
        userId: session.user.id,
        userName: session.user.name || session.user.email,
        userEmail: session.user.email,
        timestamp: new Date().toISOString(),
      });

      // Отправляем список активных пользователей новому пользователю
      const activeUsers = this.getActiveUsers(numericProjectId);
      client.emit('active_users', activeUsers);

      this.logger.log(`User ${session.user.email} connected to project ${projectId}`);
    } catch (error) {
      this.logger.error('WebSocket connection error:', error);
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket) {
    if (client.userId && client.projectId) {
      // Удаляем пользователя из списка активных
      this.removeUserFromProject(client.projectId, client.userId);

      // Уведомляем других пользователей об отключении
      client.to(`project:${client.projectId}`).emit('user_left', {
        userId: client.userId,
        timestamp: new Date().toISOString(),
      });

      this.logger.log(`User ${client.userId} disconnected from project ${client.projectId}`);
    }
  }

  @SubscribeMessage('file_opened')
  async handleFileOpened(
    @MessageBody() data: { filePath: string },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.userId || !client.projectId) return;

    const user = await this.getUserById(client.userId);
    if (!user) return;

    this.updateUserActivity(client.projectId, client.userId, {
      userId: client.userId,
      userName: user.name || user.email,
      userEmail: user.email,
      filePath: data.filePath,
      lastSeen: new Date(),
    });

    // Уведомляем других пользователей
    client.to(`project:${client.projectId}`).emit('file_opened', {
      userId: client.userId,
      userName: user.name || user.email,
      filePath: data.filePath,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('file_closed')
  async handleFileClosed(
    @MessageBody() data: { filePath: string },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.userId || !client.projectId) return;

    const user = await this.getUserById(client.userId);
    if (!user) return;

    // Удаляем активность для этого файла
    this.removeUserFileActivity(client.projectId, client.userId, data.filePath);

    // Уведомляем других пользователей
    client.to(`project:${client.projectId}`).emit('file_closed', {
      userId: client.userId,
      userName: user.name || user.email,
      filePath: data.filePath,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('cursor_moved')
  async handleCursorMoved(
    @MessageBody() data: { filePath: string; cursor: CursorPosition },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.userId || !client.projectId) return;

    const user = await this.getUserById(client.userId);
    if (!user) return;

    this.updateUserActivity(client.projectId, client.userId, {
      userId: client.userId,
      userName: user.name || user.email,
      userEmail: user.email,
      filePath: data.filePath,
      cursor: data.cursor,
      lastSeen: new Date(),
    });

    // Уведомляем других пользователей о движении курсора
    client.to(`project:${client.projectId}`).emit('cursor_moved', {
      userId: client.userId,
      userName: user.name || user.email,
      filePath: data.filePath,
      cursor: data.cursor,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('content_changed')
  async handleContentChanged(
    @MessageBody() data: { filePath: string; content: string },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.userId || !client.projectId) return;

    const user = await this.getUserById(client.userId);
    if (!user) return;

    // Уведомляем других пользователей об изменении содержимого
    client.to(`project:${client.projectId}`).emit('content_changed', {
      userId: client.userId,
      userName: user.name || user.email,
      filePath: data.filePath,
      content: data.content,
      timestamp: new Date().toISOString(),
    });
  }

  // Публичный метод для уведомления о изменениях файлов
  notifyFileChanged(projectId: number, event: FileChangeEvent) {
    this.server.to(`project:${projectId}`).emit('file_modified', event);
  }

  private addUserToProject(projectId: number, user: { id: number; name: string | null; email: string }) {
    if (!this.projectUsers.has(projectId)) {
      this.projectUsers.set(projectId, new Map());
    }

    const projectUserMap = this.projectUsers.get(projectId)!;
    projectUserMap.set(user.id, {
      userId: user.id,
      userName: user.name || user.email,
      userEmail: user.email,
      filePath: '',
      lastSeen: new Date(),
    });
  }

  private removeUserFromProject(projectId: number, userId: number) {
    const projectUserMap = this.projectUsers.get(projectId);
    if (projectUserMap) {
      projectUserMap.delete(userId);
      if (projectUserMap.size === 0) {
        this.projectUsers.delete(projectId);
      }
    }
  }

  private updateUserActivity(projectId: number, userId: number, activity: UserActivity) {
    const projectUserMap = this.projectUsers.get(projectId);
    if (projectUserMap) {
      projectUserMap.set(userId, activity);
    }
  }

  private removeUserFileActivity(projectId: number, userId: number, filePath: string) {
    const projectUserMap = this.projectUsers.get(projectId);
    if (projectUserMap) {
      const userActivity = projectUserMap.get(userId);
      if (userActivity && userActivity.filePath === filePath) {
        projectUserMap.set(userId, {
          ...userActivity,
          filePath: '',
          cursor: undefined,
        });
      }
    }
  }

  private getActiveUsers(projectId: number): UserActivity[] {
    const projectUserMap = this.projectUsers.get(projectId);
    if (!projectUserMap) return [];

    return Array.from(projectUserMap.values()).filter(
      activity => activity.filePath !== '' && 
      (Date.now() - activity.lastSeen.getTime()) < 5 * 60 * 1000 // Активен в последние 5 минут
    );
  }

  private async getUserById(userId: number) {
    return this.db.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });
  }
}
