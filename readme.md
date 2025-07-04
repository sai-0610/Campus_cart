# Campus Cart 🛒

A full-featured eCommerce platform built with the **MERN stack** and **Redux Toolkit**. Shop, manage your profile, and place orders seamlessly.

## 📸 Screenshots

<p align="center">
  <img src="./frontend/public/images/ss1.png" alt="Screenshot 1" width="600"/>
</p>
<p align="center">
  <img src="./frontend/public/images/ss2.png" alt="Screenshot 2" width="600"/>
</p>
<p align="center">
  <img src="./frontend/public/images/ss3.png" alt="Screenshot 3" width="600"/>
</p>
<p align="center">
  <img src="./frontend/public/images/ss4.png" alt="Screenshot 4" width="600"/>
</p>

## ✨ Features

- Full-featured shopping cart with checkout flow
- User authentication & profile management
- Admin dashboard to manage products, orders, and users
- Product ratings & reviews
- Product search, pagination, and category filtering
- PayPal & credit/debit card payments
- Order management with delivery status
- Image upload for product images

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Campus_cart.git
cd Campus_cart
```

### 2. Install Dependencies

For root & frontend:

```bash
npm install
cd frontend
npm install

```

### 3. Env Variables

Create a `.env` in your root directory and add the following:

```bash
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAGINATION_LIMIT=8
```

- Replace `your_mongodb_connection_uri` with your actual MongoDB URI.
- Replace `your_jwt_secret` with a strong secret key for JWT signing.
- Replace `your_paypal_client_id` with your PayPal REST API client ID.
- Adjust `PAGINATION_LIMIT` as needed.
