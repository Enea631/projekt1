import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navb.scss';
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>Enea</Link>
      </div>

      <button className="navbar__toggle" onClick={handleToggle}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar__links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        {/* Book a Table Button */}
        <button className="cta-button nav-button" onClick={openModal}>
          Book a Table
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
