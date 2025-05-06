import React, { useState } from 'react';
import './Contact.scss';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contacts", formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };


  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out through any of the methods below or drop us a message.</p>
      </div>

      <div className="contact-details">
        <div className="detail">
          <h3>📧 Email</h3>
          <p>info@gmail.com</p>
          <p>reservation@gmail.com</p>
        </div>
        <div className="detail">
          <h3>📞 Phone</h3>
          <p>+355 68 12 34 567</p>
          <p>+355 67 54 72 546</p>
        </div>
        <div className="detail">
          <h3>📍 Visit Us</h3>
          <p>Albania, Tirane, Kavaja St</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Write us a message</h3>
        <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta-button">Send a message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
