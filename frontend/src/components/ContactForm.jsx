import React from 'react'


const ContactForm = () => (
        <form className="contact-form">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      );
      
      export default ContactForm;
      
