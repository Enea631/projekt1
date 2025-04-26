import React from 'react';
import './Hmenu.scss';

const Hmenu = () => {
  return (
    <section className="menu-highlights">
      <h2>Popular Dishes</h2>
      <div className="highlight-cards">
        <div className="highlight-card">
          <img src="./images/margarita.jpg" alt="Margherita Pizza" />
          <h3>Margherita Pizza</h3>
          <p>Fresh mozzarella, basil, and a touch of olive oil.</p>
        </div>
        <div className="highlight-card">
          <img src="./images/carbonara.jpg" alt="Spaghetti Carbonara" />
          <h3>Spaghetti Carbonara</h3>
          <p>Pasta with pancetta, eggs, Pecorino Romano, and black pepper.</p>
        </div>
      </div>
    </section>
  );
};

export default Hmenu;
