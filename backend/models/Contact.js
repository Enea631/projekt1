const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;