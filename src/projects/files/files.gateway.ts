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
  projectId?: number;
}

interface FileChangeEvent {
  type: 'file_opened' | 'file_closed' | 'file_saved' | 'file_created' | 'file_deleted' | 'file_moved' | 'file_copied' | 'file_restored' | 'directory_created';
  filePath: string;
  userId: string;
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
  userId: string;
  userName: string;
  userEmail: string;
  filePath: string;
  cursor?: CursorPosition;
  lastSeen: Date;
}

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
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
      // Получаем projectId из query параметров (авторизация отключена)
      const projectId = client.handshake.query.projectId as string;

      if (!projectId) {
        this.logger.warn('WebSocket connection rejected: missing projectId');
        client.disconnect();
        return;
      }

      // Проверяем существование проекта
      const numericProjectId = parseInt(projectId);
      const project = await this.db.project.findFirst({
        where: {
          id: numericProjectId,
          status: 'ACTIVE',
        },
      });

      if (!project) {
        this.logger.warn(`WebSocket connection rejected: project ${projectId} not found or inactive`);
        client.disconnect();
        return;
      }

      // Сохраняем информацию о проекте в сокете
      client.projectId = numericProjectId;

      // Подключаем к комнате проекта
      client.join(`project:${numericProjectId}`);

      // Добавляем анонимного пользователя в список активных пользователей
      this.addAnonymousUserToProject(numericProjectId);

      // Уведомляем других пользователей о подключении
      client.to(`project:${numericProjectId}`).emit('user_joined', {
        userId: `anonymous_${client.id}`,
        userName: 'Anonymous User',
        userEmail: 'anonymous@example.com',
        timestamp: new Date().toISOString(),
      });

      // Отправляем список активных пользователей новому пользователю
      const activeUsers = this.getActiveUsers(numericProjectId);
      client.emit('active_users', { users: activeUsers });

      this.logger.log(`Anonymous user connected to project ${projectId}`);
    } catch (error) {
      this.logger.error('WebSocket connection error:', error);
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket) {
    if (client.projectId) {
      // Удаляем анонимного пользователя из списка активных
      this.removeAnonymousUserFromProject(client.projectId, client.id);

      // Уведомляем других пользователей об отключении
      client.to(`project:${client.projectId}`).emit('user_left', {
        userId: `anonymous_${client.id}`,
        timestamp: new Date().toISOString(),
      });

      this.logger.log(`Anonymous user disconnected from project ${client.projectId}`);
    }
  }

  @SubscribeMessage('file_opened')
  async handleFileOpened(
    @MessageBody() data: { filePath: string },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.projectId) return;

    this.updateAnonymousUserActivity(client.projectId, client.id, {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
      userEmail: 'anonymous@example.com',
      filePath: data.filePath,
      lastSeen: new Date(),
    });

    // Уведомляем других пользователей
    client.to(`project:${client.projectId}`).emit('file_opened', {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
      filePath: data.filePath,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('file_closed')
  async handleFileClosed(
    @MessageBody() data: { filePath: string },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.projectId) return;

    // Удаляем активность для этого файла
    this.removeAnonymousUserFileActivity(client.projectId, client.id, data.filePath);

    // Уведомляем других пользователей
    client.to(`project:${client.projectId}`).emit('file_closed', {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
      filePath: data.filePath,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('cursor_moved')
  async handleCursorMoved(
    @MessageBody() data: { filePath: string; cursor: CursorPosition },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (!client.projectId) return;

    this.updateAnonymousUserActivity(client.projectId, client.id, {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
      userEmail: 'anonymous@example.com',
      filePath: data.filePath,
      cursor: data.cursor,
      lastSeen: new Date(),
    });

    // Уведомляем других пользователей о движении курсора
    client.to(`project:${client.projectId}`).emit('cursor_moved', {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
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
    if (!client.projectId) return;

    // Уведомляем других пользователей об изменении содержимого
    client.to(`project:${client.projectId}`).emit('content_changed', {
      userId: `anonymous_${client.id}`,
      userName: 'Anonymous User',
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
      userId: String(user.id),
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

  // Методы для работы с анонимными пользователями
  private addAnonymousUserToProject(projectId: number) {
    if (!this.projectUsers.has(projectId)) {
      this.projectUsers.set(projectId, new Map());
    }
    
    const anonymousId = `anonymous_${Date.now()}`;
    this.projectUsers.get(projectId)!.set(anonymousId as any, {
      userId: anonymousId,
      userName: 'Anonymous User',
      userEmail: 'anonymous@example.com',
      filePath: '',
      lastSeen: new Date(),
    });
  }

  private removeAnonymousUserFromProject(projectId: number, socketId: string) {
    const projectUsers = this.projectUsers.get(projectId);
    if (projectUsers) {
      const anonymousId = `anonymous_${socketId}`;
      projectUsers.delete(anonymousId as any);
    }
  }

  private updateAnonymousUserActivity(projectId: number, socketId: string, activity: UserActivity) {
    const projectUsers = this.projectUsers.get(projectId);
    if (projectUsers) {
      const anonymousId = `anonymous_${socketId}`;
      projectUsers.set(anonymousId as any, activity);
    }
  }

  private removeAnonymousUserFileActivity(projectId: number, socketId: string, filePath: string) {
    const projectUsers = this.projectUsers.get(projectId);
    if (projectUsers) {
      const anonymousId = `anonymous_${socketId}`;
      const user = projectUsers.get(anonymousId as any);
      if (user) {
        user.lastSeen = new Date();
        // Можно добавить логику для удаления активности конкретного файла
      }
    }
  }
}
