// models/book.js
const mongoose = require("mongoose");

// Use mongoose.Schema to reference the Schema class
const bookingSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  date: { type: Date },
  time: { type: String },
  people: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;