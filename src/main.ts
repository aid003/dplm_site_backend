import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';
import { LoggerService } from './logger/logger.service';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const logger = new LoggerService('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  app.enableCors({
    origin: process.env.CORS_ORIGIN || true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  });

  // Настройка WebSocket для поддержки CORS
  const io = app.getHttpServer();
  io.on('connection', (socket) => {
    socket.on('error', (error) => {
      logger.error('WebSocket error:', error);
    });
  });

  // Увеличиваем лимиты body-parser, чтобы предотвратить PayloadTooLargeError при больших телах
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ limit: '100mb', extended: true }));

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.setGlobalPrefix('api');

  const databaseService = app.get(DatabaseService);
  databaseService.enableShutdownHooks(app);

  await app.listen(process.env.PORT ?? 8000);
}

void bootstrap().catch((error) => {
  // Логгер недоступен здесь, так как приложение не запустилось
  console.error('Application failed to start:', error);
  process.exit(1);
});
