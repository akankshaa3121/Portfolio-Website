\# Inventory Management API



A REST API built using Node.js, Express.js, and MongoDB.



\## Features

\- User registration and login using JWT

\- Password hashing with bcrypt

\- Product and category CRUD

\- Admin role-based authorization

\- Search, filtering, and pagination

\- Image upload using Multer

\- Security using Helmet, CORS, and rate limiting



\## Technologies

Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Multer, Postman.



\## Setup

1\. Run `npm install`

2\. Create a `.env` file with `PORT`, `MONGODB\_URI`, and `JWT\_SECRET`.

3\. Run `node server.js`



API runs at `http://localhost:5000`.



\## Main Endpoints

\- `POST /api/auth/register`

\- `POST /api/auth/login`

\- `GET /api/products`

\- `POST /api/products`

\- `GET /api/categories`

\- `GET /api/health`



Admin access is required for product and category modifications.



\## Testing

Tested using Postman for authentication, CRUD, search, filtering, pagination, image access, and validation.



\## Author

Akanksha Ambade



