import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { hash, compare } from 'bcryptjs';
import type { User } from 'generated/prisma';
import { DatabaseService } from '../database/database.service';
import { LoggerService } from '../logger/logger.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

const COOKIE_NAME = 'dplm_session';
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
  ) {
    this.logger.log('AuthService initialized', 'AuthService');
  }

  get cookieName(): string {
    return COOKIE_NAME;
  }

  get sessionTtlMs(): number {
    return SESSION_TTL_MS;
  }

  async register(dto: RegisterDto) {
    this.logger.log(`Attempting to register user: ${dto.email}`, 'AuthService');

    const existingUser = await this.db.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existingUser) {
      this.logger.warn(
        `Registration failed - user already exists: ${dto.email}`,
        'AuthService',
      );
      throw new HttpException(
        { message: 'User already exists' },
        HttpStatus.CONFLICT,
      );
    }

    const passwordHash = await hash(dto.password, 12);

    const user = await this.db.user.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
        name: dto.name?.trim() || null,
      },
    });

    this.logger.log(
      `User registered successfully: ${user.email} (ID: ${user.id})`,
      'AuthService',
    );

    const session = await this.createSession(user.id);

    return {
      user: this.mapUser(user),
      ...session,
    };
  }

  async login(dto: LoginDto) {
    this.logger.log(`Login attempt for user: ${dto.email}`, 'AuthService');

    const user = await this.db.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      this.logger.warn(
        `Login failed - user not found: ${dto.email}`,
        'AuthService',
      );
      throw new HttpException(
        { message: 'Invalid credentials' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isValid = await compare(dto.password, user.passwordHash);

    if (!isValid) {
      this.logger.warn(
        `Login failed - invalid password for user: ${dto.email}`,
        'AuthService',
      );
      throw new HttpException(
        { message: 'Invalid credentials' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    this.logger.log(
      `User logged in successfully: ${user.email} (ID: ${user.id})`,
      'AuthService',
    );

    const session = await this.createSession(user.id);

    return {
      user: this.mapUser(user),
      ...session,
    };
  }

  async getSession(token: string | undefined) {
    if (!token) {
      throw new HttpException(
        { message: 'Not authenticated' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const session = await this.db.session.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!session) {
      throw new HttpException(
        { message: 'Not authenticated' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (session.expiresAt && session.expiresAt.getTime() <= Date.now()) {
      try {
        await this.db.session.delete({ where: { token } });
      } catch {
        // ignore cleanup failure
      }
      throw new HttpException(
        { message: 'Not authenticated' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    return {
      user: this.mapUser(session.user),
    };
  }

  async logout(token: string | undefined) {
    if (!token) {
      return;
    }

    try {
      await this.db.session.delete({ where: { token } });
    } catch {
      // ignore cleanup failure
    }
  }

  private async createSession(userId: number) {
    const token = randomUUID();
    const expiresAt = new Date(Date.now() + this.sessionTtlMs);

    await this.db.session.create({
      data: {
        token,
        userId,
        expiresAt,
      },
    });

    return { token, expiresAt };
  }

  private mapUser(user: Pick<User, 'id' | 'email' | 'name'>) {
    return {
      id: user.id,
      email: user.email,
      name: user.name ?? undefined,
    };
  }
}
