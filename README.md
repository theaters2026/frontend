# 🎭 Platform of independent theatres

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Redux](https://img.shields.io/badge/Redux-5.0-purple?logo=redux)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)

## 🚀 Quick Start

Follow these steps to get the project running on your local machine:

### 1. Clone the repository
```bash
 git clone https://gitverse.ru/studentlabs/theater_platform_client
 cd theater_platform_client
```
### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
``` bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```
### 4. Start the development server
``` bash
pnpm dev
```
### 5. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.
## 📋 Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Build production version |
| `pnpm start` | Start production build |
| `pnpm lint` | Run linters (ESLint + Stylelint) |
| `pnpm format` | Format code with Prettier |
## 🛠 Technology Stack
### Core Technologies
- **Next.js 15** (App Router)
- **React 19** (with hooks)
- **TypeScript 5.8**
- **Redux Toolkit** + **React-Redux**

### Styling & UI
- **Tailwind CSS** 3.4
- **SCSS** for custom styles
- **shadcn/ui** component library

### Additional Libraries
- **Axios** for HTTP requests
- **date-fns** for date manipulation 

## 📁 Project Structure
``` 
src/
├── app/                    # Next.js App Router
│   └── [locale]/           # Internationalization
│       ├── login/          # Login page
│       │   ├── components/ # Login page components
│       │   │   ├── LoginForm/
│       │   │   │   ├── LoginForm.tsx
│       │   │   │   └── LoginForm.schema.ts
│       │   │   └── LoginPage/
│       │   │       ├── LoginPage.tsx
│       │   │       └── LoginPage.module.scss
│       │   └── page.tsx
│       ├── register/       # Registration page
│       │   ├── components/ # Registration page components
│       │   │   ├── RegisterForm/
│       │   │   └── RegisterPage/
│       │   │       ├── RegisterPage.tsx
│       │   │       └── RegisterPage.module.scss
│       │   └── page.tsx
│       ├── layout.tsx      # Localized layout
│       └── page.tsx        # Home page
├── core/                   # Core application logic
│   ├── api/                # API configuration and methods
│   ├── providers/          # App providers (Redux)
│   ├── services/           # Business logic services (e.g., AuthService)
│   └── store/              # Redux store
│       ├── utils/          # Store utilities
│       │   └── storeUtils.ts
│       └── store.ts
├── shared/                 # Shared resources
│   ├── constants/          # Application constants
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── ticketManager.ts
│   │   ├── ui.ts
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── useNavigation.ts
│   │   ├── useTicketWidget.ts
│   │   └── index.ts
│   ├── i18n/               # Internationalization
│   │   ├── locales/        # Translation files
│   │   │   ├── en.json
│   │   │   └── ru.json
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── styles/             # Global styles
│   │   └── globals.scss
│   ├── types/              # TypeScript type definitions
│   │   ├── ticketManager.ts
│   │   └── index.ts
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Form.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── index.ts
│   └── utils/              # Utility functions
│       ├── date.ts
│       ├── number.ts
│       ├── price.ts
│       ├── styles.ts
│       ├── url.ts
│       └── index.ts
└── middleware.ts           # Next.js middleware

```
## 🔧 Development Tools
### Code Quality
- **ESLint** with TypeScript rules
- **Prettier** for code formatting
- **Stylelint** for CSS/SCSS linting
- **Husky** for Git hooks
- **Commitlint** for commit message standards

### Build & Deployment
- **PostCSS** with Autoprefixer
- **Sass** for enhanced CSS features
