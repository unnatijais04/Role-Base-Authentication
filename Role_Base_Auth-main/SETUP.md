# 🚀 Quick Setup Guide - Role-Based Authentication System

## ✅ What's Been Fixed

The following issues have been resolved to make the code runnable:

1. **JWT Secret Variable** - Fixed typo from `JWT_SECRETE` to `JWT_SECRET` in:
   - `backend/controllers/Auth.js`
   - `backend/middleware/verifyToken.js`

2. **Missing Dependencies** - Added `nodemon` as dev dependency in `backend/package.json`

3. **Environment Configuration** - Created proper `.env` file structure

4. **Root Package Management** - Added root `package.json` with concurrent running scripts

## 🛠️ Setup Instructions

### Option 1: Automated Setup (Recommended)

**For Linux/Mac:**
```bash
cd Role_Base_Auth-main
./quick-start.sh
```

**For Windows:**
```cmd
cd Role_Base_Auth-main
quick-start.bat
```

### Option 2: Manual Setup

#### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../client
npm install
```

#### 2. Environment Setup
Create a `.env` file in the `backend` directory:
```env
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=3000
```

#### 3. Start MongoDB
Make sure MongoDB is running on your system:

**Linux/Mac:**
```bash
sudo systemctl start mongod
```

**Windows:**
```cmd
net start MongoDB
```

**Or use MongoDB Atlas (cloud service) and update the `MONGODB_URL` in your `.env` file.**

## 🚀 Running the Application

### Run Both Services Together
```bash
# From the root directory
npm run dev
```

### Run Services Separately

**Backend (API Server):**
```bash
cd backend
npm run dev
```
- Runs on: `http://localhost:3000`

**Frontend (React App):**
```bash
cd client
npm run dev
```
- Runs on: `http://localhost:5173`

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Run both frontend and backend in development mode
- `npm run install-all` - Install all dependencies
- `npm run build` - Build the frontend for production
- `npm run server` - Run only the backend
- `npm run client` - Run only the frontend

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Application URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Endpoints**:
  - Authentication: http://localhost:3000/api/auth
  - Admin: http://localhost:3000/api/admin

## 🔑 Default User Roles

The system supports these user roles:
- **Admin** - Full access to all features
- **User** - Basic user access (default role)

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check your connection string in `.env`
   - Verify network connectivity if using MongoDB Atlas

2. **Port Already in Use**
   - Change the PORT in `.env` file
   - Kill processes using the default ports

3. **JWT Token Issues**
   - Ensure JWT_SECRET is set in `.env`
   - Check token expiration settings

4. **CORS Errors**
   - Verify the frontend URL in backend CORS configuration
   - Check if both servers are running on correct ports

5. **Dependencies Issues**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

### Security Notes

⚠️ **Important**: Before deploying to production:
1. Change the `JWT_SECRET` to a strong, unique key
2. Use environment variables for sensitive data
3. Enable HTTPS in production
4. Configure proper CORS settings for your domain

## 📝 Testing the Application

1. **Register a new user** at http://localhost:5173/register
2. **Login** with your credentials
3. **Test role-based access** by trying to access admin features
4. **Create an admin user** by manually updating the database or adding admin creation logic

## 🎉 Success!

Your Role-Based Authentication System is now ready to run! The application provides:
- Secure user registration and login
- JWT-based authentication
- Role-based access control
- Protected API endpoints
- Modern React frontend with Redux state management

---

**Happy Coding! 🚀**