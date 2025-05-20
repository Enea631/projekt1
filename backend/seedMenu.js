const mongoose = require('mongoose');
const Menu = require('./models/MenuItem'); 

mongoose.connect(    "mongodb+srv://eneaburimi4:enea12@cluster0.2qyjstb.mongodb.net/projekt?retryWrites=true&w=majority&appName=Cluster0",
 );

 const seedItems = [
   
    {
      itemName: 'Spaghetti Carbonara',
      itemDescription: 'Pasta with pancetta, eggs, Pecorino Romano, and black pepper.',
      itemPrice: 12,
      itemImage: './images/carbonara.jpg',
      itemCategory: 'Pasta'
    },
    {
      itemName: 'Lasagna Bolognese',
      itemDescription: 'Layers of pasta with rich Bolognese sauce, béchamel, and Parmesan.',
      itemPrice: 14,
      itemImage: './images/lasagna.jpg',
      itemCategory: 'Pasta'
    },
    {
      itemName: 'Gnocchi al Pesto',
      itemDescription: 'Soft potato dumplings with a basil pesto sauce.',
      itemPrice: 13,
      itemImage: './images/gnocchi.jpg',
      itemCategory: 'Pasta'
    },
  
    // Pizza
    {
      itemName: 'Margherita Pizza',
      itemDescription: 'Tomato, mozzarella, fresh basil, and a drizzle of extra virgin olive oil.',
      itemPrice: 10,
      itemImage: './images/margarita.jpg',
      itemCategory: 'Pizza'
    },
    {
      itemName: 'Pizza Quattro Formaggi',
      itemDescription: 'A delicious blend of mozzarella, gorgonzola, Parmesan, and fontina.',
      itemPrice: 13,
      itemImage: './images/kater.jpg',
      itemCategory: 'Pizza'
    },
    {
      itemName: 'Diavola Pizza',
      itemDescription: 'Spicy salami, mozzarella, and tomato sauce.',
      itemPrice: 11,
      itemImage: './images/pizza-diavola.jpg',
      itemCategory: 'Pizza'
    },
  
    // Salads
    {
      itemName: 'Caprese Salad',
      itemDescription: 'Fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.',
      itemPrice: 8,
      itemImage: './images/Caprese-salad-6.jpg',
      itemCategory: 'Salads'
    },
    {
      itemName: 'Caesar Salad',
      itemDescription: 'Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan.',
      itemPrice: 9,
      itemImage: './images/Caesar-salad_-4.jpg',
      itemCategory: 'Salads'
    },
    {
      itemName: 'Arugula & Parmesan Salad',
      itemDescription: 'Fresh arugula with shaved parmesan and lemon vinaigrette.',
      itemPrice: 7,
      itemImage: './images/arugula.jpg',
      itemCategory: 'Salads'
    },
  
    // Desserts
    {
      itemName: 'Tiramisu',
      itemDescription: 'Coffee-soaked ladyfingers layered with mascarpone cream and cocoa.',
      itemPrice: 6,
      itemImage: './images/tiramisu.jpg',
      itemCategory: 'Desserts'
    },
    {
      itemName: 'Panna Cotta',
      itemDescription: 'Creamy vanilla dessert with a berry compote topping.',
      itemPrice: 7,
      itemImage: './images/panna-cotta.jpg',
      itemCategory: 'Desserts'
    },
    {
      itemName: 'Cannoli',
      itemDescription: 'Crispy pastry filled with sweet ricotta and chocolate chips.',
      itemPrice: 5,
      itemImage: './images/cannoli.jpg',
      itemCategory: 'Desserts'
    }
  ];
  
async function seedDB() {
  try {
    await Menu.deleteMany({});
    await Menu.insertMany(seedItems);
    console.log('✅ Menu items seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding menu items:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
