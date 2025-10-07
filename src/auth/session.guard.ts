import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import { DatabaseService } from '../database/database.service';

const COOKIE_NAME = 'dplm_session';

export type CurrentUser = {
  id: number;
  email: string;
  name?: string;
};

export type RequestWithUser = Request & { user?: CurrentUser };

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly db: DatabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.extractSessionToken(req);
    if (!token) {
      throw new UnauthorizedException({ message: 'Not authenticated' });
    }

    const session = await this.db.session.findUnique({ where: { token }, include: { user: true } });
    if (!session) {
      throw new UnauthorizedException({ message: 'Not authenticated' });
    }
    if (session.expiresAt && session.expiresAt.getTime() <= Date.now()) {
      throw new UnauthorizedException({ message: 'Not authenticated' });
    }

    req.user = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name ?? undefined,
    };

    return true;
  }

  private extractSessionToken(req: Request): string | undefined {
    const header = req.headers.cookie;
    if (!header) {
      return undefined;
    }
    const target = `${COOKIE_NAME}=`;
    const cookie = header
      .split(';')
      .map((part) => part.trim())
      .find((part) => part.startsWith(target));
    if (!cookie) {
      return undefined;
    }
    return decodeURIComponent(cookie.slice(target.length));
  }
}


