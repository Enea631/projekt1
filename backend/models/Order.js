const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [{
    itemName: { type: String },
    price: { type: Number },
    quantity: { type: Number }
  }],
  customer: {
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    paymentMethod: { type: String }
  },
  total: { type: Number },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;