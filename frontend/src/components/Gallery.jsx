import React from "react";

const images = [
    '/images/pizza.jpg',
    '/images/pasta.jpg',
    '/images/wine.jpg',
    '/images/restaurant.jpg',
  ];
  
  const Gallery = () => (
    <section className="gallery">
      <h2>Our Ambiance & Dishes</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`gallery-${index}`} />
        ))}
      </div>
    </section>
  );
  
  export default Gallery;
  