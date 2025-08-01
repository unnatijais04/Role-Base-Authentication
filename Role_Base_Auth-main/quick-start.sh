#!/bin/bash

echo "🚀 Setting up Role-Based Authentication System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cat > .env << EOF
MONGODB_URL=mongodb://localhost:27017/rolebase_auth
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=3000
EOF
    echo "✅ .env file created. Please update the JWT_SECRET for production use."
else
    echo "✅ .env file already exists"
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../client
npm install

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Make sure MongoDB is running on your system"
echo "2. Update the JWT_SECRET in backend/.env for production"
echo "3. Run the application:"
echo "   - From root directory: npm run dev"
echo "   - Or separately:"
echo "     Backend: cd backend && npm run dev"
echo "     Frontend: cd client && npm run dev"
echo ""
echo "🌐 The application will be available at:"
echo "   Frontend: http://localhost:5173"
echo "   Backend: http://localhost:3000"
echo ""