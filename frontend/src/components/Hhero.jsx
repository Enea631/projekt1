import React, { useState } from 'react';
import './Hhero.scss';
import Modal from './Modal';  // Import the Modal component

const Hhero = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Hero section styling
  const heroStyle = {
    backgroundImage: `url("./image/background.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Welcome to Enea</h1>
        <p>Authentic Italian Dining Experience</p>
        {/* Book a Table button */}
        <button className="cta-button" onClick={openModal}>Book a Table</button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hhero;
