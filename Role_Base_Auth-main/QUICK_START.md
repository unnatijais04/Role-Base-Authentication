# 🚀 Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## 🎯 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
# Option A: Use the setup script (recommended)
chmod +x setup.sh
./setup.sh

# Option B: Manual installation
cd backend && npm install
cd ../client && npm install
```

### Step 2: Configure Environment
The `.env` file in the backend directory should contain:
```env
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```

### Step 3: Start the Application
```bash
# Start both backend and frontend simultaneously
npm run dev

# Or start them separately:
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend  
cd client && npm run dev
```

## 🌐 Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🔐 Test the Application
1. Register a new user at http://localhost:5173/register
2. Login with your credentials at http://localhost:5173/login
3. Access admin panel (if you have admin role)

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
- Make sure MongoDB is running: `mongod`
- Check your connection string in `.env`

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: Vite will automatically use the next available port

### JWT Errors
- Ensure JWT_SECRET is set in `.env`
- Clear browser cookies if authentication issues persist

## 📚 More Information
See the main README.md for detailed documentation.