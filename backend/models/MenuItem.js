const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: { 
    type: String, 
    required: true 
  },
  itemDescription: { 
    type: String 
  },
  itemPrice: { 
    type: Number, 
    required: true 
  },
  itemCategory: { 
    type: String, 
    required: true 
  },
  itemImage: { 
    type: String 
  }
});

const MenuItem = mongoose.model("MenuItem", itemSchema);
module.exports = MenuItem;