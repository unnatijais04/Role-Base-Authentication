🔐 Role-Based Authentication System
A full-stack web application demonstrating role-based authentication using Node.js, Express.js, and MongoDB on the backend with a client built using React.js. This project allows users to log in based on roles (e.g., Admin, Editor, User) and provides access control based on permissions.

🚀 Features
🔑 JWT-based Authentication
Secure login system using JSON Web Tokens.

👥 Role Management
Supports multiple user roles with different permissions.

🔒 Protected Routes
Backend APIs and frontend pages are secured using role-based access control.

📁 MERN Stack
Combines MongoDB, Express.js, React, and Node.js.

🧰 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express.js
Database	MongoDB
Auth & Roles	JWT, Bcrypt, Custom Middleware
State Mgmt	React Context or Redux

## 🏃‍♂️ Getting Started (Local Development)

Follow the steps below to spin-up both the backend API and the React client locally.

### Prerequisites

1. **Node.js** (v18 or later recommended)
2. **npm** (comes with Node) or **yarn**
3. **MongoDB** running locally or the connection string of a remote Atlas cluster

### 1. Clone and install dependencies

```bash
# clone the repo (skip if you are already inside the workspace)
$ git clone <repo-url>
$ cd Role_Base_Auth-main

# install backend packages
$ cd backend && npm install

# install client packages (in a second terminal)
$ cd ../client && npm install
```

### 2. Configure environment variables

Copy the provided sample file and fill in your own values:

```bash
# inside the backend folder
$ cp .env.example .env
```

Update `.env` with a valid `MONGODB_URL` and a strong `JWT_SECRETE` value.

### 3. Start the development servers

Open two terminal tabs:

```bash
# terminal 1 → backend (port 3000)
$ cd Role_Base_Auth-main/backend
$ npm run dev

# terminal 2 → client (port 5173)
$ cd Role_Base_Auth-main/client
$ npm run dev
```

Navigate to <http://localhost:5173> and you should see the application running and making requests to the API at <http://localhost:3000>.

---

If you encounter any issues, double-check that MongoDB is running and that the connection string in `.env` is correct.
