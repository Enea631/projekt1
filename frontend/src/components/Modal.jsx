import React from 'react';
import './Modal.scss'; // Updated styles

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">Book a Table</h2>
        <form className="modal-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Date:
            <input type="date" name="date" required />
          </label>
          <label>
            Time:
            <input type="time" name="time" required />
          </label>
          <label>
            Number of People:
            <input type="number" name="people" required />
          </label>
          <button type="submit" className="submit-btn">Reserve Now</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
