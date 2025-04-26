import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out through any of the methods below or drop us a message.</p>
      </div>

      <div className="contact-details">
        <div className="detail">
          <h3>📧 Email</h3>
          <p>info@tastyc.com</p>
          <p>reservation@tastyc.com</p>
        </div>
        <div className="detail">
          <h3>📞 Phone</h3>
          <p>+76 (094) 754 43 71</p>
          <p>+76 (093) 753 43 72</p>
        </div>
        <div className="detail">
          <h3>📍 Visit Us</h3>
          <p>Albania, Tirane, Kavaja St</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Write us a message</h3>
        <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="cta-button">Send a message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
