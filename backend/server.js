// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');  // points to db.js

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/menu', require('./routes/menu'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/admin', require('./routes/admin'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 
});
