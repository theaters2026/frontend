# 🎭 Platform of independent theatres

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Redux](https://img.shields.io/badge/Redux-5.0-purple?logo=redux)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)

## 🚀 Quick Start

Follow these steps to get the project running on your local machine:

### Option 1: Local Development

1. **Clone the repository**
```bash
   git clone https://gitverse.ru/studentlabs/theater_platform_client
   cd theater_platform_client
```

2. **Install dependencies**
```bash
   pnpm install
```

3. **Set up environment variables**
```bash
 cp .env.local.example .env.local
 #Edit .env.local with your configuration
```

4. **Start the development server**
```bash
   pnpm dev
```

5. **Open your browser**  
   Navigate to [http://localhost:3000](http://localhost:3000/) to see the application.

---

### Option 2: Docker Development

1. **Clone the repository**
```bash
   git clone https://gitverse.ru/studentlabs/theater_platform_client
   cd theater_platform_client
```

2. **Set up environment variables**
```bash
   cp .env.local.example .env.local
   #Edit .env.local with your configuration
```

3. **Build and start with Docker Compose**
```bash
   docker-compose up --build
```

4. **Open your browser**  
   Navigate to [http://localhost:3001](http://localhost:3001/) to see the application.

---

### Docker Commands

#### Development mode:
```bash
#Start development server
docker-compose up --build

#Run in background
docker-compose up -d --build

#Stop containers
docker-compose down
```
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
│       ├── event/          # Event pages
│       ├── register/       # Registration page
│       ├── layout.tsx      # Localized layout
│       └── page.tsx        # Home page
├── core/                   # Core application logic
│   ├── api/                # API configuration and methods
│   ├── providers/          # App providers (Redux)
│   ├── styles/             # Global styles
│   ├── ui/                 # Reusable UI components
│   ├── services/           # Business logic services (e.g., AuthService)
│   └── store/              # Redux store

├── shared/                 # Shared resources
│   ├── constants/          # Application constants
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization
│   ├── schemas/            # Schemas
│   ├── types/              # TypeScript type definitions
│   ├── ui/                 # Reusable UI components
│   └── utils/              # Utility functions
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
