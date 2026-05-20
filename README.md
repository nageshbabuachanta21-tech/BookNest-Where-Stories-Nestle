# 📚 BookNest — Where Stories Nestle

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Full%20Stack-green?style=for-the-badge&logo=mongodb" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/PRs-Welcome-orange?style=for-the-badge" alt="PRs Welcome" />
</p>

<p align="center">
  <b>A modern, full-stack platform for book lovers to discover, manage, share, and nestle into their favorite stories.</b>
</p>

---

## 🎯 Overview

**BookNest** is a comprehensive web application designed for bibliophiles. Whether you're looking to catalog your personal library, borrow books from a community, write reviews, or purchase your next great read — BookNest provides an intuitive, responsive, and secure environment where stories truly find their home.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Authentication** | JWT-based user registration & login with email verification |
| 📖 **Book Management** | Create, update, share, archive, and delete book listings |
| 🛒 **Shopping Cart** | Add books to cart, manage quantities, and checkout seamlessly |
| 🔄 **Book Borrowing** | Lend and borrow books with availability checks and return workflows |
| ⭐ **Reviews & Ratings** | Community-driven reviews and star ratings for every book |
| 📝 **Blog Platform** | Read and create literary blog posts, reviews, and discussions |
| 👤 **User Profiles** | Personalized dashboards showing activity, uploads, and history |
| 🛡️ **Admin Dashboard** | Role-based access for managing books, users, and content |
| 📱 **Responsive UI** | Fully mobile-friendly design with modern styling |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI library
- **React Router** — Client-side routing
- **Tailwind CSS** — Utility-first styling framework
- **Axios** — HTTP client for API communication

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Web application framework
- **JWT** — JSON Web Tokens for secure authentication
- **Multer** — File upload handling

### Database
- **MongoDB / PostgreSQL** — Flexible NoSQL or relational data storage

### DevOps & Tools
- **Git & GitHub** — Version control
- **Vercel / Heroku / Render** — Deployment platforms

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB / PostgreSQL instance

### 1. Clone the Repository
```bash
git clone https://github.com/nageshbabuachanta21-tech/BookNest-Where-Stories-Nestle.git
cd BookNest-Where-Stories-Nestle
2. Install Backend Dependencies
bash
Copy
cd backend
npm install
3. Install Frontend Dependencies
bash
Copy
cd ../frontend
npm install
4. Configure Environment Variables
Create a .env file in the backend directory:
env
Copy
# Database
DB_URI=your_mongodb_or_postgres_uri

# Authentication
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

# Server
PORT=5000
NODE_ENV=development

# Email (for verification)
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
5. Run the Application
Backend:
bash
Copy
cd backend
npm run dev
Frontend:
bash
Copy
cd frontend
npm start
The app will be available at:
🌐 Frontend: http://localhost:3000
⚙️ Backend API: http://localhost:5000
📡 API Endpoints
Authentication
Table
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user
GET	/api/auth/profile	Get user profile
POST	/api/auth/verify-email	Verify email address
Books
Table
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get single book
POST	/api/books	Add new book
PATCH	/api/books/:id	Update book details
DELETE	/api/books/:id	Remove book
Blog Posts
Table
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post
PATCH	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post
Cart
Table
Method	Endpoint	Description
GET	/api/cart	Get user's cart
POST	/api/cart	Add item to cart
DELETE	/api/cart/:id	Remove item from cart
