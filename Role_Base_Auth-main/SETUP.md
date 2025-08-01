# 🚀 Role-Based Authentication System - Setup Guide

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Git** (optional, for cloning)

## Quick Start

### 1. Install Dependencies

From the root directory, run:

```bash
npm run install-all
```

This will install dependencies for the root, backend, and frontend.

### 2. Database Setup

**Option A: Local MongoDB**
- Make sure MongoDB is running on your local machine
- The app will connect to `mongodb://localhost:27017/rolebaseauth`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a new cluster and get your connection string
- Update the `MONGODB_URL` in `backend/.env`

### 3. Environment Configuration

The backend `.env` file is already configured with default values:

```env
MONGODB_URL=mongodb://localhost:27017/rolebaseauth
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
PORT=3000
NODE_ENV=development
```

**⚠️ Important**: Change the `JWT_SECRET` in production!

### 4. Run the Application

**Development Mode (Both servers)**:
```bash
npm run dev
```

This starts:
- Backend server on `http://localhost:3000`
- Frontend server on `http://localhost:5173`

**Individual Servers**:
```bash
# Backend only
npm run backend

# Frontend only  
npm run frontend
```

## 📁 Project Structure

```
Role_Base_Auth-main/
├── backend/          # Node.js/Express API
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Auth & role middleware
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── utils/        # Database connection
│   ├── .env          # Environment variables
│   └── server.js     # Main server file
├── client/           # React frontend
│   ├── src/          # React source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
└── package.json      # Root scripts
```

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `sudo systemctl start mongod` (Linux) or start MongoDB service
- Check if port 27017 is available
- Verify the connection string in `.env`

### Port Already in Use
- Backend (3000): Change `PORT` in `backend/.env`
- Frontend (5173): Vite will automatically try the next available port

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm run install-all
```

## 🎯 Default Users & Roles

The application supports role-based authentication with different user types:
- **Admin**: Full access to all features
- **Editor**: Can edit content
- **User**: Basic user access

Check the backend routes and controllers for specific role permissions.

## 🔐 API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `GET /api/admin/*` - Admin-only routes

## 🌐 Frontend Routes

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - User dashboard (protected)
- `/admin` - Admin panel (admin only)

---

**Ready to go!** 🎉 Your role-based authentication system should now be fully functional.