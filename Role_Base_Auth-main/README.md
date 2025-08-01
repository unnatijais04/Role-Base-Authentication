# 🔐 Role-Based Authentication System

A full-stack web application demonstrating role-based authentication using Node.js, Express.js, and MongoDB on the backend with a client built using React.js. This project allows users to log in based on roles (e.g., Admin, Editor, User) and provides access control based on permissions.

## 🚀 Features

- 🔑 **JWT-based Authentication** - Secure login system using JSON Web Tokens
- 👥 **Role Management** - Supports multiple user roles with different permissions
- 🔒 **Protected Routes** - Backend APIs and frontend pages are secured using role-based access control
- 📁 **MERN Stack** - Combines MongoDB, Express.js, React, and Node.js

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth & Roles | JWT, Bcrypt, Custom Middleware |
| State Mgmt | Redux Toolkit |

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (running locally or MongoDB Atlas connection)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd Role_Base_Auth-main
```

### 2. Install dependencies
```bash
# Install root dependencies (concurrently)
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```

**Note:** Replace `your_jwt_secret_key_here` with a strong secret key for JWT token signing.

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On Linux/Mac
sudo systemctl start mongod

# On Windows
net start MongoDB
```

Or use MongoDB Atlas (cloud service) and update the `MONGODB_URL` in your `.env` file.

## 🚀 Running the Application

### Option 1: Run both frontend and backend together
```bash
# From the root directory
npm run dev
```

### Option 2: Run services separately

**Backend (API Server):**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:3000`

**Frontend (React App):**
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Role_Base_Auth-main/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware (auth, role verification)
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── utlis/           # Utility functions (database connection)
│   ├── server.js        # Main server file
│   └── package.json
├── client/
│   ├── src/
│   │   ├── Layouts/     # Layout components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # Redux store and slices
│   │   ├── services/    # API service functions
│   │   └── App.jsx      # Main app component
│   └── package.json
└── package.json         # Root package.json for concurrent running
```

## 🔑 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /CheckUser` - Check current user (protected)

### Admin Routes (`/api/admin`)
- Protected routes for admin users

## 👥 User Roles

The system supports different user roles with varying permissions:
- **Admin** - Full access to all features
- **Editor** - Limited administrative access
- **User** - Basic user access

## 🔧 Development

### Available Scripts

**Root Directory:**
- `npm run dev` - Run both frontend and backend in development mode
- `npm run install-all` - Install all dependencies
- `npm run build` - Build the frontend for production

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build

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

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Happy Coding! 🎉**