# Product Management System – Backend (MERN)

##  Live API Base URL
"https://project-management-system-backend-ixpc.onrender.com"

---

##  Overview

This is the backend service of the Product Management System built using Node.js, Express.js, and MongoDB.

It provides RESTful APIs to perform full CRUD operations on products.

The project follows MVC architecture, includes input validation, proper error handling, and environment variable configuration.

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

---

##  Folder Structure (MVC)

backend/
│
├── controllers/
├── models/
├── routes/
├── config/
├── server.js
└── .env

---

##  Product Schema

- name (String – required)
- price (Number – required)
- category (String – required)
- inStock (Boolean – default: true)
- createdAt (Date – default: Date.now)

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/products | Create Product |
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Single Product |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

---

##  Local Setup

### 1️⃣ Install Dependencies

npm install

### 2️⃣ Create .env file

MONGO_URI=your_mongodb_connection_string  
PORT=8000

### 3️⃣ Start Server

npm start

---

##  Deployment

Backend deployed on Render.  
MongoDB Atlas used as cloud database.  
Environment variables configured in Render dashboard.

---

##  Author

Faizan Khan

