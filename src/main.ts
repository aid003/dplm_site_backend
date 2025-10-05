import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rawCorsOrigins = process.env.CORS_ORIGIN || process.env.CLIENT_ORIGIN;

  if (!rawCorsOrigins) {
    throw new Error('CORS_ORIGIN env variable is required');
  }

  const corsOrigins = rawCorsOrigins
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.enableCors({
    origin: corsOrigins.length === 1 ? corsOrigins[0] : corsOrigins,
    credentials: true,
  });

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
bootstrap();
