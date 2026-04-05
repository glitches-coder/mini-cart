# 🛒 MiniCart Frontend (React + Vite + Tailwind)

A lightweight **full-stack shopping cart frontend** built using **React (Vite)** and **Tailwind CSS**, integrated with a **Spring Boot backend** secured using JWT authentication.

---

## 🚀 Features

* 🔐 JWT-based authentication (login system)
* 🛍️ View products from backend API
* ➕ Add items to cart
* ❌ Remove items from cart
* 🧾 Checkout flow with address form
* ⚛️ Demonstrates both:

  * Controlled components (Login form)
  * Uncontrolled components (Checkout form)
* 🎨 Clean UI using Tailwind CSS

---

## 🧱 Tech Stack

* **React (Vite)**
* **Tailwind CSS v3.4.17**
* **Axios (API calls)**
* **Spring Boot Backend (JWT secured)**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
├── App.jsx
├── main.jsx
└── api.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd minicart-frontend
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup Tailwind CSS

Already configured for **v3.4.17**, but if needed:

```
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```

---

### 4️⃣ Start development server

```
npm run dev
```

👉 App runs on:

```
http://localhost:5173
```

---

## 🔗 Backend Requirements

Make sure your **Spring Boot backend** is running on:

```
http://localhost:8080
```

### Required APIs:

| Endpoint         | Method | Description       |
| ---------------- | ------ | ----------------- |
| `/auth/login`    | POST   | Login and get JWT |
| `/api/products`  | GET    | Fetch products    |
| `/api/cart/{id}` | POST   | Add to cart       |
| `/api/cart`      | GET    | Get cart          |
| `/api/cart/{id}` | DELETE | Remove item       |
| `/api/checkout`  | POST   | Checkout          |

---

## 🔐 Authentication Flow

1. User logs in via **Login component**
2. Backend returns JWT token
3. Token stored in React state
4. Token sent in headers:

```
Authorization: Bearer <token>
```

---

## 🧠 Key Concepts Demonstrated

### 🔹 Controlled Components

Used in login form:

* React state controls input values

### 🔹 Uncontrolled Components

Used in checkout:

* `useRef` to access DOM values

### 🔹 API Integration

* Axios used for REST communication
* Token-based authentication

---

## ⚡ Future Improvements

* Store JWT in HttpOnly cookies (better security)
* Add user-specific cart
* Improve UI/UX
* Add loading & error states
* Deploy using Docker + Kubernetes

---

## 🧪 Testing

Use Postman or frontend UI:

1. Login → get token
2. Add products to cart
3. Remove items
4. Checkout

---

## 🎯 Interview Talking Points

This project demonstrates:

* Full-stack integration (React + Spring Boot)
* JWT authentication flow
* State management in React
* REST API communication
* Clean component architecture

---

## 👨‍💻 Author

Aditya Mohapatra

---

## 📌 Notes

This project is built as part of **full-stack interview preparation** and focuses on **clarity, fundamentals, and real-world flow** rather than production-grade complexity.

---
