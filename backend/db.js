// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eneaburimi4:enea12@cluster0.2qyjstb.mongodb.net/projekt?retryWrites=true&w=majority&appName=Cluster0",
     
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
