import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Enea. All rights reserved.</p>
      <p>Via Roma 123, Milano, Italy | +39 012 345 6789</p>
      <p>Open: Mon–Sun, 12:00 PM – 11:00 PM</p>
    </div>
  </footer>
);

export default Footer;
