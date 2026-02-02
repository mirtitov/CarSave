# CarSave - Веб-сайт компании по защите автомобилей

Современный веб-сайт для российской компании CarSave, специализирующейся на предоставлении гарантии и защиты автомобилей.

## 🚀 Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Framer Motion** - Анимации (опционально)

## 📋 Функциональность

- ✅ Главная страница с hero-секцией
- ✅ Информация о компании
- ✅ Тарифные программы
- ✅ Калькулятор стоимости гарантии (многошаговая форма)
- ✅ FAQ с аккордеоном
- ✅ Страница контактов
- ✅ Формы заявок
- ✅ Адаптивный дизайн
- ✅ SEO оптимизация

## 🛠 Установка и запуск

### Требования

- Node.js 18+ 
- npm или yarn

### Установка зависимостей

```bash
npm install
# или
yarn install
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для production

```bash
npm run build
npm start
# или
yarn build
yarn start
```

## 📁 Структура проекта

```
CarSave/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   ├── globals.css        # Глобальные стили
│   ├── tariffs/           # Страница тарифов
│   ├── faq/               # Страница FAQ
│   ├── contacts/          # Страница контактов
│   └── about/             # Страница о компании
├── components/             # React компоненты
│   ├── Header.tsx         # Шапка сайта
│   ├── Footer.tsx         # Подвал сайта
│   ├── RequestForm.tsx    # Форма заявки
│   ├── Calculator.tsx    # Калькулятор стоимости
│   └── sections/          # Секции главной страницы
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Steps.tsx
│       ├── Tariffs.tsx
│       ├── Partners.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
├── public/                 # Статические файлы
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Стилизация

Проект использует Tailwind CSS для стилизации. Основные цвета определены в `tailwind.config.ts`:

- Primary: синий (#0ea5e9)
- Кастомные классы в `globals.css`

## 📝 TODO

- [ ] Интеграция с backend API для отправки форм
- [ ] Добавление карты с офисами
- [ ] Интеграция с системой аналитики
- [ ] Оптимизация изображений
- [ ] Добавление мета-тегов для социальных сетей

## 📄 Лицензия

[Укажите лицензию]

## 🤝 Контакты

- Телефон: +7 (800) 505 34 32
- Telegram: [@carsave](https://t.me/carsave)
