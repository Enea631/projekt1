const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   GET /api/contacts
// @desc    Get all contact messages
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/contacts
// @desc    Submit a contact message
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const newContact = new Contact({ firstName, lastName, email, phone, message });
  try {
    const saved = await newContact.save();
    res.status(201).json(saved);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /api/contacts/:id
// @desc    Update a contact message
router.put('/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/contacts/:id
// @desc    Delete a contact message
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact message deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;