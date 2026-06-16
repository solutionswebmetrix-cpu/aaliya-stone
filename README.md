# Aaliya Stones - International B2B Luxury Natural Stone eCommerce Platform

## Project Overview
A complete enterprise-grade international B2B luxury natural stone eCommerce platform built with React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, and more.

## Technology Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary
- Stripe (ready)
- Nodemailer

## Project Structure
```
aaliya-stone/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Subcategory.js
│   │   ├── Blog.js
│   │   ├── Inquiry.js
│   │   └── Quote.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── inquiryRoutes.js
│   │   └── quoteRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
# Create .env file with your configuration (see .env in backend folder)
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create a `.env` file in the backend folder with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aaliya-stones
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

## Features
- Full-screen hero with luxury design
- Product categories and subcategories
- Product details with specifications
- Inquiry and quote management
- Admin dashboard with authentication
- Responsive design for mobile and desktop
- SEO-optimized structure
- Ready for international markets
