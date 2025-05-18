import React from "react";
import "./footer.scss"; 

const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Enea. All rights reserved.</p>
      <p>1234 Kavaja St, Tirana | +355 067 345 6789</p>
      <p>Open: Mon–Sun, 12:00 PM – 11:00 PM</p>
    </div>
  </footer>
);

export default Footer;
