const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();


const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '123', 
};


const JWT_SECRET = process.env.JWT_SECRET;    

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1]; 

  try {
    const decoded = jwt.verify(token, JWT_SECRET); 
    req.user = decoded; 
    next(); 
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome to the admin dashboard, ${req.user.username}!` });
});

module.exports = router;