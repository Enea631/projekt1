const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const router = express.Router();

// Dummy admin credentials (replace with a database check in production)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'password123', // Use hashed passwords in production
};

// Get secret key from .env
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded token data to the request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    // Generate JWT token
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route using middleware
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome to the admin dashboard, ${req.user.username}!` });
});

module.exports = router;