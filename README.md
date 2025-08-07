# Todo Application

A modern todo application built with React frontend and Node.js backend, featuring a microservices architecture with MongoDB and Redis.

## 🚀 Tech Stack

### Frontend
- React 18.2.0
- Vite
- Testing Library
- ESLint for code quality

### Backend
- Node.js with Express
- MongoDB for data persistence
- Redis for caching

## 🏗️ Architecture

The application consists of several services:

- **Frontend**: React-based SPA served through Nginx
- **Backend**: Node.js/Express API server
- **MongoDB**: Main database
- **Redis**: Caching layer
- **Nginx**: Reverse proxy and static file server

## Quick Start

1. Clone the repository:
2. Start all services with Docker Compose:
```docker compose up -d```
3. Access the application:
    - Frontend: http://localhost
    - Backend API: http://localhost/api






