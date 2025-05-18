import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Navb.scss';
import Modal from './Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Search } from "lucide-react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    const query = searchQuery.trim();
  if (query) {
    navigate(`/search?query=${encodeURIComponent(query)}`);
    setMenuOpen(false); // optionally close the menu if on mobile
    setSearchQuery('');  // optionally clear the input
  
};
      
   
  };

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

        {/* 🔍 Search Form */}
        <Form className="nav-search-form d-md-block" onSubmit={handleSearch}>
          <div className="search-group">
            <FormControl
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <Button variant="icon" type="submit" className="search-btn">
              <Search size={15} />
            </Button>
          </div>
        </Form>



        {/* 📅 Book a Table Button */}
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
