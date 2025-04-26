import React from 'react';
import './Menu.scss'; // Import SCSS file for styling
import menuCategories from '../components/MenuItem';

function Menu() {
  return (
    <section className="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p>Explore our finest Italian dishes, crafted with love and the freshest ingredients.</p>
      </div>

      <div className="menu-categories">
        {menuCategories.map((category, index) => (
          <div key={index} className="menu-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="menu-item">
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-item-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
