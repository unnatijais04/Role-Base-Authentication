@echo off
echo 🚀 Setting up Role-Based Authentication System...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install root dependencies
echo 📦 Installing root dependencies...
npm install

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo 🔧 Creating .env file...
    (
        echo MONGODB_URL=mongodb://localhost:27017/rolebase_auth
        echo JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
        echo PORT=3000
    ) > .env
    echo ✅ .env file created. Please update the JWT_SECRET for production use.
) else (
    echo ✅ .env file already exists
)

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd ..\client
npm install

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Make sure MongoDB is running on your system
echo 2. Update the JWT_SECRET in backend/.env for production
echo 3. Run the application:
echo    - From root directory: npm run dev
echo    - Or separately:
echo      Backend: cd backend ^&^& npm run dev
echo      Frontend: cd client ^&^& npm run dev
echo.
echo 🌐 The application will be available at:
echo    Frontend: http://localhost:5173
echo    Backend: http://localhost:3000
echo.
pause