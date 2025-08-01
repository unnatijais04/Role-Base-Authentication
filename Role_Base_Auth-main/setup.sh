#!/bin/bash

echo "🚀 Setting up Role-Based Authentication System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Check if .env file exists, if not create it
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cat > .env << EOF
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=3000
EOF
    echo "⚠️  Please update the JWT_SECRET in the .env file for production use"
fi

cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd client
npm install

cd ..

echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "1. Make sure MongoDB is running"
echo "2. Start the backend: cd backend && npm run dev"
echo "3. Start the frontend: cd client && npm run dev"
echo "4. Open http://localhost:5173 in your browser"
echo ""
echo "📚 For more information, check the README.md file"