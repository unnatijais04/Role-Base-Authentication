🔐 Role-Based Authentication System
A full-stack web application demonstrating role-based authentication using Node.js, Express.js, and MongoDB on the backend with a client built using React.js. This project allows users to log in based on roles (e.g., Admin, Editor, User) and provides access control based on permissions.

## 🚀 Quick Start

**Option 1: One-click start**
```bash
./start.sh
```

**Option 2: Manual start**
```bash
npm run install-all  # Install all dependencies
npm run dev          # Start both servers
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

📖 **Detailed setup instructions**: See [SETUP.md](Role_Base_Auth-main/SETUP.md)

## ✨ Features
🔑 **JWT-based Authentication** - Secure login system using JSON Web Tokens

👥 **Role Management** - Supports multiple user roles with different permissions

🔒 **Protected Routes** - Backend APIs and frontend pages are secured using role-based access control

📁 **MERN Stack** - Combines MongoDB, Express.js, React, and Node.js

## 🧰 Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React.js, Vite, Redux Toolkit |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth & Roles | JWT, Bcrypt, Custom Middleware |
| State Mgmt | Redux Toolkit, Redux Persist |
