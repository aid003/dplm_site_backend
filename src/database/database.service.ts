import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DatabaseService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    ['SIGINT', 'SIGTERM'].forEach((signal) => {
      process.on(signal, () => {
        app.close().catch(() => undefined);
      });
    });
  }
}
