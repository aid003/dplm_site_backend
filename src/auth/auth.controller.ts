import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
    @Query('next') next?: string,
  ) {
    const { token, expiresAt, user } = await this.authService.register(dto);
    this.setSessionCookie(res, token, expiresAt);

    const redirectTo = this.sanitizeRedirect(next);

    return redirectTo ? { user, redirectTo } : { user };
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
    @Query('next') next?: string,
  ) {
    const { token, expiresAt, user } = await this.authService.login(dto);
    this.setSessionCookie(res, token, expiresAt);

    const redirectTo = this.sanitizeRedirect(next);

    return redirectTo ? { user, redirectTo } : { user };
  }

  @Get('session')
  async session(@Req() req: Request) {
    const token = this.extractSessionToken(req);
    return this.authService.getSession(token);
  }

  @Post('logout')
  @HttpCode(204)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const token = this.extractSessionToken(req);
    await this.authService.logout(token);
    this.clearSessionCookie(res);
  }

  private setSessionCookie(res: Response, token: string, expiresAt: Date) {
    res.cookie(this.authService.cookieName, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: this.authService.sessionTtlMs,
      expires: expiresAt,
    });
  }

  private clearSessionCookie(res: Response) {
    res.cookie(this.authService.cookieName, '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 0,
      expires: new Date(0),
    });
  }

  private extractSessionToken(req: Request): string | undefined {
    const header = req.headers.cookie;
    if (!header) {
      return undefined;
    }

    const target = `${this.authService.cookieName}=`;
    const cookie = header
      .split(';')
      .map((part) => part.trim())
      .find((part) => part.startsWith(target));

    if (!cookie) {
      return undefined;
    }

    return decodeURIComponent(cookie.slice(target.length));
  }

  private sanitizeRedirect(next?: string) {
    if (!next || typeof next !== 'string') {
      return undefined;
    }

    if (!next.startsWith('/') || next.startsWith('//')) {
      return undefined;
    }

    return next;
  }
}
