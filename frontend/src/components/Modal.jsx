import React, { useState } from 'react';
import axios from 'axios';
import './Modal.scss'; 

const Modal = ({ isOpen, onClose }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
      onClose(); 
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">Book a Table</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
  Time:
  <select
    name="time"
    value={formData.time}
    onChange={handleChange}
    required
  >
    <option value="" disabled>Select a time</option>
    <option value="09:00">09:00 AM</option>
    <option value="10:00">10:00 AM</option>
    <option value="11:00">11:00 AM</option>
    <option value="12:00">12:00 PM</option>
    <option value="13:00">01:00 PM</option>
    <option value="14:00">02:00 PM</option>
    <option value="15:00">03:00 PM</option>
    <option value="16:00">04:00 PM</option>
    <option value="17:00">05:00 PM</option>
    <option value="18:00">06:00 PM</option>
    <option value="19:00">07:00 PM</option>
    <option value="20:00">08:00 PM</option>
    <option value="21:00">09:00 PM</option>
    <option value="22:00">10:00 PM</option>
  </select>
</label>
          <label>
            Number of People:
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="bm">Reserve Now</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;