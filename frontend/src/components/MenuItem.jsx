import React from "react";

const MenuItem = [
  {
    category: 'Pasta',
    items: [
      {
        name: 'Spaghetti Carbonara',
        description: 'Pasta with pancetta, eggs, Pecorino Romano, and black pepper.',
        price: '€12',
        image: './images/carbonara.jpg',
      },
      {
        name: 'Lasagna Bolognese',
        description: 'Layers of pasta with rich Bolognese sauce, béchamel, and Parmesan.',
        price: '€14',
        image: './images/lasagna.jpg',
      },
      {
        name: 'Gnocchi al Pesto',
        description: 'Soft potato dumplings with a basil pesto sauce.',
        price: '€13',
        image: './images/gnocchi.jpg',
      },
    ],
  },
  {
    category: 'Pizza',
    items: [
      {
        name: 'Margherita Pizza',
        description: 'Tomato, mozzarella, fresh basil, and a drizzle of extra virgin olive oil.',
        price: '€10',
        image: './images/margarita.jpg',
      },
      {
        name: 'Pizza Quattro Formaggi',
        description: 'A delicious blend of mozzarella, gorgonzola, Parmesan, and fontina.',
        price: '€13',
        image: './images/kater.jpg',
      },
      {
        name: 'Diavola Pizza',
        description: 'Spicy salami, mozzarella, and tomato sauce.',
        price: '€11',
        image: './images/pizza-diavola.jpg',
      },
    ],
  },
  {
    category: 'Salads',
    items: [
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.',
        price: '€8',
        image: './images/Caprese-salad-6.jpg',
      },
      {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan.',
        price: '€9',
        image: './images/Caesar-salad_-4.jpg',
      },
      {
        name: 'Arugula & Parmesan Salad',
        description: 'Fresh arugula with shaved parmesan and lemon vinaigrette.',
        price: '€7',
        image: './images/arugula.jpg',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        description: 'Coffee-soaked ladyfingers layered with mascarpone cream and cocoa.',
        price: '€6',
        image: './images/tiramisu.jpg',
      },
      {
        name: 'Panna Cotta',
        description: 'Creamy vanilla dessert with a berry compote topping.',
        price: '€7',
        image: './images/panna-cotta.jpg',
      },
      {
        name: 'Cannoli',
        description: 'Crispy pastry filled with sweet ricotta and chocolate chips.',
        price: '€5',
        image: './images/cannoli.jpg',
      },
    ],
  },
];
export default MenuItem;