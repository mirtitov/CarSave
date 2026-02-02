# Инструкция по деплою CarSave

## Варианты деплоя

### 1. Vercel (Рекомендуется)

Vercel - это платформа, созданная командой Next.js, идеально подходит для деплоя Next.js приложений.

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите ваш GitHub репозиторий
3. Vercel автоматически определит Next.js и настроит сборку
4. Нажмите Deploy

### 2. Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Подключите GitHub репозиторий
3. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Нажмите Deploy

### 3. Собственный сервер

#### Требования
- Node.js 18+
- PM2 (опционально, для управления процессом)

#### Шаги

1. Клонируйте репозиторий на сервер
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Соберите проект:
   ```bash
   npm run build
   ```
4. Запустите production сервер:
   ```bash
   npm start
   ```

#### С PM2

```bash
npm install -g pm2
pm2 start npm --name "carsave" -- start
pm2 save
pm2 startup
```

### 4. Docker

Создайте `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Сборка и запуск:
```bash
docker build -t carsave .
docker run -p 3000:3000 carsave
```

## Переменные окружения

Создайте файл `.env.local` для production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+78005053432
NEXT_PUBLIC_TELEGRAM=https://t.me/carsave
```

## Оптимизация

- Убедитесь, что включен production режим
- Проверьте мета-теги для SEO
- Настройте CDN для статических файлов
- Включите сжатие gzip/brotli
