import { useState } from 'react';
import React from 'react';
import Modal from '../components/Modal'; 
import './About.scss'; 

const About = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="about">
      <div className="about-content">
        <h2>About Enea</h2>
        <p>
          Founded in 2023, Enea blends traditional Italian flavors with modern culinary techniques.
          Our chefs are passionate about creating unforgettable dining experiences using fresh,
          locally-sourced ingredients.
        </p>
        <p>
          Whether you're enjoying a romantic dinner or a casual lunch with friends, Enea welcomes
          you with warmth and elegance. Every dish is a masterpiece, thoughtfully crafted to make
          every moment special.
        </p>

        <div className="about-btn-container">
          <button className="cta-button" onClick={openModal}>Reserve a Table</button>
          
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      <div className="location">
        <h3>Find Us at Enea</h3>
        <p>
          We're located in the heart of the city, perfect for a casual lunch or a romantic dinner.
          Visit us today and experience authentic Italian dining at its finest.
        </p>

        <p><strong>Address:</strong> 1234 Kavaja St, Tirana</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>

        <div className="location-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23969.34117521317!2d19.804738250878913!3d41.326967737964274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1745315331449!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        
        <div className="location-btn-container">
          <button
            className="location-button"
            onClick={() => window.open("https://maps.app.goo.gl/FJzJnodAvVySBYhaA", "_blank")}
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
