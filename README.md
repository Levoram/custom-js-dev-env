# Modern JavaScript Development Environment 🚀

A modernized JavaScript development environment featuring **Vite**, **TypeScript**, **Vitest**, and modern tooling for blazing-fast development.

[![CI/CD Pipeline](https://github.com/Levoram/custom-js-dev-env/actions/workflows/ci.yml/badge.svg)](https://github.com/Levoram/custom-js-dev-env/actions/workflows/ci.yml)
[![Build Status](https://ci.appveyor.com/api/projects/status/1q8x0si4054u15cj/branch/master?svg=true)](https://ci.appveyor.com/project/Levoram/custom-js-dev-env)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- ⚡ **Vite** - Lightning-fast development server and builds
- 🔷 **TypeScript** - Type safety and enhanced developer experience
- 🧪 **Vitest** - Fast testing with coverage and UI
- 🎨 **ESLint 9** + **Prettier** - Modern code quality tools
- 🔥 **Hot Module Replacement** - Instant updates during development
- 🛡️ **Security-focused** - Up-to-date dependencies with vulnerability checks
- 🎯 **Mock API** - JSON Server for rapid prototyping

## 🚀 Quick Start

1. **Prerequisites**: Install [Node.js](https://nodejs.org) (v18+ recommended)
2. **Clone**: `git clone https://github.com/Levoram/custom-js-dev-env.git`
3. **Navigate**: `cd custom-js-dev-env`
4. **Install**: `npm install`
5. **Develop**: `npm run dev`
6. **Open**: Browser opens automatically at `http://localhost:3000`

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server with mock API
- `npm run dev:vite` - Start Vite dev server only
- `npm run start-mockapi` - Start mock API server only

### Building

- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build locally
- `npm run clean` - Clean build directory

### Testing

- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:coverage` - Run tests with coverage report

### Code Quality

- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix auto-fixable ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Check TypeScript types

### Utilities

- `npm run generate-mock-data` - Generate fresh mock data
- `npm run security-check` - Run npm audit for vulnerabilities

## 🏗️ Project Structure

```
├── .github/                # GitHub-specific files
│   └── workflows/          # GitHub Actions workflows
│       └── ci.yml          # CI/CD pipeline
├── src/                    # Source files
│   ├── index.html          # Main HTML template
│   ├── index.js            # Application entry point
│   ├── index.css           # Styles
│   ├── api/                # API layer
│   │   ├── userApi.js      # User API functions
│   │   ├── baseUrl.js      # Environment-aware base URL
│   │   └── db.json         # Mock data
│   └── public/             # Static assets
├── buildScripts/           # Build utilities
│   ├── generateMockData.js # Mock data generator
│   └── mockDataSchema.js   # Data schema definition
├── dist/                   # Production build output
├── appveyor.yml            # AppVeyor CI configuration
├── vite.config.js          # Vite configuration
├── vitest.config.js        # Vitest configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
└── .prettierrc             # Prettier configuration
```

## 🔧 Technology Stack

| Category       | Technology              | Purpose                            |
| -------------- | ----------------------- | ---------------------------------- |
| **Build Tool** | Vite                    | Fast development server & building |
| **Language**   | JavaScript + TypeScript | Type-safe development              |
| **Testing**    | Vitest + jsdom          | Unit testing & DOM testing         |
| **Linting**    | ESLint 9                | Code quality & consistency         |
| **Formatting** | Prettier                | Code formatting                    |
| **Mock API**   | json-server             | Development API simulation         |

## 🎯 Development Workflow

1. **Start Development**: `npm run dev` launches both Vite dev server and mock API
2. **Write Code**: Edit files in `src/` with hot reloading
3. **Run Tests**: `npm run test` for continuous testing
4. **Check Quality**: `npm run lint` and `npm run format`
5. **Build**: `npm run build` for production-ready code

## 🌐 API Development

The development environment includes a mock API server:

- **Mock API**: `http://localhost:3005`
- **Users endpoint**: `http://localhost:3005/users`
- **Auto-generated data**: Fresh mock data on each restart
- **CRUD operations**: Full REST API simulation

## 🚀 Migration from Legacy Setup

This environment has been modernized from Webpack to Vite, providing:

- **10-100x faster** development server startup
- **Instant hot module replacement**
- **Simplified configuration**
- **Better TypeScript integration**
- **Modern testing with Vitest**

See `MODERNIZATION_NOTES.md` for detailed migration information.

## 🔄 Continuous Integration

This project includes comprehensive CI/CD pipelines that run on multiple platforms and Node.js versions:

### GitHub Actions (Primary CI/CD)

- **Cross-platform testing**: Ubuntu, Windows, macOS
- **Multi-version support**: Node.js 18, 20, 22
- **Complete workflow**: Type checking, linting, formatting, testing, building
- **Security audits**: Automated vulnerability scanning
- **Coverage reporting**: Integration with Codecov

### Legacy CI Support

- **AppVeyor**: Windows builds with Node.js 18, 20, 22

### CI Pipeline Steps

1. **Install dependencies** with npm ci
2. **Generate mock data** for testing
3. **Type checking** with TypeScript
4. **Code linting** with ESLint
5. **Format checking** with Prettier
6. **Unit testing** with coverage reporting
7. **Production build** verification
8. **Security audit** for vulnerabilities

All CI configurations are located in:

- `.github/workflows/ci.yml` - GitHub Actions
- `appveyor.yml` - AppVeyor CI

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
