# 🚀 Проект: Платформа независимых театров

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Redux](https://img.shields.io/badge/Redux-5.0-purple?logo=redux)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)


## 📦 Установка

```bash
git clone https://gitverse.ru/studentlabs/theater_platform_client
cd theater_platform_client
pnpm install
```

## 🛠 Команды

| Команда         | Описание                          |
|-----------------|-----------------------------------|
| `pnpm dev`      | Запуск dev-сервера                |
| `pnpm build`    | Сборка production-версии          |
| `pnpm start`    | Запуск production-сборки          |
| `pnpm lint`     | Проверка кода (ESLint + Stylelint)|
| `pnpm format`   | Форматирование кода (Prettier)    |

## 🏗 Технологии

### Основной стек
- **Next.js 14** (App Router)
- **React 19** (с хуками)
- **TypeScript 5.8**
- **Redux Toolkit** + **React-Redux**

### Стилизация
- **Tailwind** 
- **SCSS Modules**
- **shadcn/ui** компоненты

### Дополнительно
- **Axios** для HTTP-запросов
- **Swiper** для слайдеров

## 🗄 Структура проекта

```
src/
├── app/                    
│   ├── components/         # Страничные компоненты
│   │   ├── EventCard/      # Карточка события
│   │   ├── EventsSlider/   # Слайдер событий
│   │   └── HomePage/       # Главная страница
│   ├── layout.tsx          # Корневой layout
│   └── page.tsx            # Главная страница
├── core/                 
│   ├── api/                # API конфигурация
│   ├── providers/          # Провайдеры (Redux)
│   └── store/              # Redux store
├── shared/                
│   ├── components/         # UI компоненты
│   ├── lib/                # Утилиты
│   ├── styles/             # Глобальные стили
│   │   ├── settings/       # SCSS переменные
│   │   │   ├── _colors.scss
│   │   │   └── _borders.scss
│   │   └── globals.scss    # Глобальные стили
│   └── types/              # Глобальные типы
```

## 🔧 Конфигурации

### ESLint + Prettier
- Строгий линтинг TypeScript
- Правила для React/Next.js

### Husky
- Пре-коммит хуки для:
    - Линтинга
    - Форматирования
    - Проверки типов

