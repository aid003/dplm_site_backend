import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { LoggerService } from './logger.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: process.env.LOG_LEVEL || 'info',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.json(),
        format.printf(({ timestamp, level, message, context, trace }) => {
          return JSON.stringify({
            timestamp,
            level,
            message,
            context,
            trace,
          });
        }),
      ),
      defaultMeta: { service: 'dplm-backend' },
      transports: [
        // Логи в консоль для разработки
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.simple(),
            format.printf(({ timestamp, level, message, context }: any) => {
              const contextStr = typeof context === 'string' ? context : 'App';
              return `${timestamp} [${contextStr}] ${level}: ${message}`;
            }),
          ),
        }),
        // Логи в файл для продакшена
        ...(process.env.NODE_ENV === 'production'
          ? [
              new transports.File({
                filename: 'logs/error.log',
                level: 'error',
                format: format.combine(format.timestamp(), format.json()),
              }),
              new transports.File({
                filename: 'logs/combined.log',
                format: format.combine(format.timestamp(), format.json()),
              }),
            ]
          : []),
      ],
    }),
  ],
  providers: [LoggerService],
  exports: [WinstonModule, LoggerService],
})
export class LoggerModule {}
