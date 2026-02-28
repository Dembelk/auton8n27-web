# auton8n27-web

Простое Next.js приложение для деплоя на сервере auton8n27.ru через n8n.

## Структура проекта

```
auton8n27-web/
├── src/app/
│   ├── api/health/route.ts   # /api/health эндпоинт
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Главная страница
├── ecosystem.config.js       # PM2 конфиг
├── package.json
├── next.config.js
└── tsconfig.json
```

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка и запуск продакшн
npm run build
npm start
```

## Эндпоинты

- `GET /` — главная страница
- `GET /api/health` — health check (`{"status": "OK"}`)

## Деплой на сервер

1. Клонировать репозиторий на сервер:
   ```bash
   cd /var/www
   git clone <repo-url> auton8n27-web
   cd auton8n27-web
   npm install
   npm run build
   ```

2. Запустить через PM2:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   ```

3. Настроить nginx как reverse proxy на порт 3000
