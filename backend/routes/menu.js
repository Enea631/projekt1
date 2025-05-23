const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem.js');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/'); 
  },
  filename: function (req, file, cb) {

    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    console.error("Error fetching menu items:", err.message);
    res.status(500).json({ message: "Failed to fetch menu items." });
  }
});


router.post('/', upload.single('itemImage'), async (req, res) => {
  const { itemCategory, itemName, itemDescription, itemPrice } = req.body;
  let itemImage = '';

  if (req.file) {
   
    itemImage = `/images/${req.file.filename}`;
  }

  if (!itemName || !itemCategory || !itemPrice) {
    return res.status(400).json({ message: "Item name, category, and price are required." });
  }

  const newItem = new MenuItem({
    itemCategory,
    itemName,
    itemDescription: itemDescription || '',
    itemPrice,
    itemImage
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error creating menu item:", err.message);
    res.status(400).json({ message: "Failed to create menu item." });
  }
});


router.put('/:id', upload.single('itemImage'), async (req, res) => {
  const { itemCategory, itemName, itemDescription, itemPrice } = req.body;
  let itemImage = req.body.itemImage || '';

  if (req.file) {
    itemImage = `/images/${req.file.filename}`;
  }

  if (!itemName || !itemCategory || !itemPrice) {
    return res.status(400).json({ message: "Item name, category, and price are required." });
  }

  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        itemCategory,
        itemName,
        itemDescription,
        itemPrice,
        itemImage
      },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    res.json(updatedItem);
  } catch (err) {
    console.error("Error updating menu item:", err.message);
    res.status(400).json({ message: "Failed to update menu item." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    res.json({ message: "Menu item deleted successfully." });
  } catch (err) {
    console.error("Error deleting menu item:", err.message);
    res.status(500).json({ message: "Failed to delete menu item." });
  }
});

module.exports = router;
