# 🔐 Role-Based Authentication System

A full-stack web application demonstrating role-based authentication using Node.js, Express.js, and MongoDB on the backend with a client built using React.js. This project allows users to log in based on roles (e.g., Admin, User) and provides access control based on permissions.

## 🚀 Features

- 🔑 JWT-based Authentication
- 👥 Role Management (Admin, User)
- 🔒 Protected Routes
- 📁 MERN Stack (MongoDB, Express.js, React, Node.js)
- 🍪 Cookie-based token storage
- 🔄 Redux state management with persistence

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth & Roles | JWT, Bcrypt, Custom Middleware |
| State Mgmt | Redux Toolkit, Redux Persist |
| Styling | CSS |

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **npm** or **yarn**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Role_Base_Auth-main
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```

**Note:** Replace `your_jwt_secret_key_here` with a strong secret key.

### 4. Frontend Setup

Navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

## 🚀 Running the Application

### Start MongoDB
Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod

# Or if using MongoDB Atlas, make sure your connection string is correct
```

### Start the Backend Server
```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:3000`

### Start the Frontend Development Server
```bash
cd client
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📁 Project Structure

```
Role_Base_Auth-main/
├── backend/
│   ├── controllers/
│   │   ├── Auth.js
│   │   └── Admin.js
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   ├── Auth.js
│   │   └── AdminRoutes.js
│   ├── utlis/
│   │   └── db.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── client/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Admin.jsx
    │   ├── redux/
    │   │   ├── AuthSlice.js
    │   │   └── Store.js
    │   ├── services/
    │   │   └── ApiEndpoint.js
    │   ├── Layouts/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /CheckUser` - Check current user (protected)

### Admin Routes (`/api/admin`)
- Admin-specific endpoints (protected by admin middleware)

## 👤 User Roles

- **User**: Basic access to the application
- **Admin**: Full access with administrative privileges

## 🔧 Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## 🐛 Troubleshooting

1. **MongoDB Connection Issues**: Make sure MongoDB is running and the connection string is correct
2. **Port Conflicts**: Ensure ports 3000 (backend) and 5173 (frontend) are available
3. **JWT Issues**: Check that the JWT_SECRET is properly set in the .env file
4. **CORS Issues**: The backend is configured to accept requests from `http://localhost:5173`

## 📝 License

This project is licensed under the ISC License.