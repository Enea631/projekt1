import React, { useState } from 'react';
import './Hhero.scss';
import Modal from './Modal';  

const Hhero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <section  style={heroStyle}>
      <div className="hero-content">
        <h1>Welcome to Enea</h1>
        <p>Authentic Italian Dining Experience</p>
        <button className="cta-button" onClick={openModal}>Book a Table</button>
      </div>

     
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hhero;
