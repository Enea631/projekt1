const express = require('express');
const router = express.Router();
const Booking = require("../models/book.js")


router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const { name, email, date, time, people } = req.body;
  const newBooking = new Booking({ name, email, date, time, people });
  try {
    const saved = await newBooking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;