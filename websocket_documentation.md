# WebSocket API Documentation

## Обзор
WebSocket сервер доступен по адресу `ws://localhost:8000/projects` (или `wss://` для продакшена).

## Подключение
Для подключения к WebSocket серверу необходимо передать параметр `projectId` в query строке:

```javascript
const socket = new WebSocket('ws://localhost:8000/projects?projectId=123');
```

## События сервера → клиент

### `user_joined`
Уведомление о подключении нового пользователя к проекту.

**Payload:**
```json
{
  "userId": "anonymous_socket-id",
  "userName": "Anonymous User",
  "userEmail": "anonymous@example.com",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `user_left`
Уведомление об отключении пользователя от проекта.

**Payload:**
```json
{
  "userId": "anonymous_socket-id",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `active_users`
Список активных пользователей проекта.

**Payload:**
```json
{
  "users": [
    {
      "userId": "user-123",
      "userName": "John Doe",
      "userEmail": "john@example.com",
      "filePath": "src/app.ts",
      "cursor": {
        "line": 10,
        "column": 5
      },
      "lastSeen": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

### `file_opened`
Уведомление об открытии файла пользователем.

**Payload:**
```json
{
  "userId": "user-123",
  "userName": "John Doe",
  "filePath": "src/app.ts",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `file_closed`
Уведомление о закрытии файла пользователем.

**Payload:**
```json
{
  "userId": "user-123",
  "userName": "John Doe",
  "filePath": "src/app.ts",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `cursor_moved`
Уведомление о перемещении курсора в файле.

**Payload:**
```json
{
  "userId": "user-123",
  "userName": "John Doe",
  "filePath": "src/app.ts",
  "cursor": {
    "line": 15,
    "column": 8,
    "selectionStart": 100,
    "selectionEnd": 120
  },
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `content_changed`
Уведомление об изменении содержимого файла.

**Payload:**
```json
{
  "userId": "user-123",
  "userName": "John Doe",
  "filePath": "src/app.ts",
  "content": "console.log('Updated content');",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### `file_modified`
Уведомление об изменении файла (создание, удаление, перемещение и т.д.).

**Payload:**
```json
{
  "type": "file_created",
  "filePath": "src/newfile.ts",
  "userId": "user-123",
  "timestamp": "2025-01-01T00:00:00.000Z",
  "oldPath": "src/oldfile.ts", // только для перемещения
  "sourcePath": "src/source.ts", // только для копирования
  "versionId": "version-123" // только для восстановления версии
}
```

Возможные значения `type`:
- `file_opened`
- `file_closed`
- `file_saved`
- `file_created`
- `file_deleted`
- `file_moved`
- `file_copied`
- `file_restored`
- `directory_created`

## События клиент → сервер

### `file_opened`
Сообщить об открытии файла.

**Payload:**
```json
{
  "filePath": "src/app.ts"
}
```

### `file_closed`
Сообщить о закрытии файла.

**Payload:**
```json
{
  "filePath": "src/app.ts"
}
```

### `cursor_moved`
Сообщить о перемещении курсора.

**Payload:**
```json
{
  "filePath": "src/app.ts",
  "cursor": {
    "line": 15,
    "column": 8,
    "selectionStart": 100,
    "selectionEnd": 120
  }
}
```

### `content_changed`
Сообщить об изменении содержимого файла.

**Payload:**
```json
{
  "filePath": "src/app.ts",
  "content": "console.log('Updated content');"
}
```

## Аутентификация
WebSocket соединения в настоящее время работают только с анонимными пользователями. Авторизованные пользователи могут подключаться, но будут отображаться как анонимные в системе совместной работы.

## Автоматическое отключение
Соединение автоматически разрывается сервером в следующих случаях:
- Не указан `projectId` в query параметрах
- Проект не найден или не активен
- Произошла ошибка соединения

## Ограничения
- Активность пользователей очищается через 5 минут неактивности
- Максимальное количество одновременных соединений не ограничено
- Размер сообщений не должен превышать разумные пределы
