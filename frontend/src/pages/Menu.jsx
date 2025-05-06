import React, { useState, useEffect } from "react";
import "./Menu.scss";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu")
      .then((res) => {
        setMenuItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
        setLoading(false);
      });
  }, []);

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      if (!acc[item.itemCategory]) {
        acc[item.itemCategory] = [];
      }
      acc[item.itemCategory].push(item);
      return acc;
    }, {});
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.name === item.name);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const getTotalPrice = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price.replace("€", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleOrderSubmit = () => {
    if (name && address && phone && paymentMethod) {
      const orderData = {
        items: cart.map((item) => ({
          itemName: item.name,
          price: parseFloat(item.price.replace("€", "")),
          quantity: item.quantity
        })),
        customer: {
          name,
          address,
          phone,
          paymentMethod
        },
        total: parseFloat(getTotalPrice())
      };

      axios.post("http://localhost:5000/api/orders", orderData)
        .then(() => {
          alert("Order successfully placed!");
          setCart([]);
          setName("");
          setAddress("");
          setPhone("");
          setPaymentMethod("Credit Card");
          setIsCartVisible(false);
        })
        .catch((err) => {
          console.error("Order submission error:", err);
          alert("Failed to place the order. Please try again.");
        });
    } else {
      alert("Please complete the form before placing the order.");
    }
  };

  return (
    <section className="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p>Explore our finest Italian dishes, crafted with love and the freshest ingredients.</p>
      </div>

      <div className="menu-categories">
        {loading ? (
          <p>Loading menu...</p>
        ) : (
          Object.entries(groupByCategory(menuItems)).map(([categoryName, items]) => (
            <div key={categoryName} className="menu-category">
              <h3 className="category-title">{categoryName}</h3>
              <div className="menu-items">
                {items.map((item) => (
                  <div key={item._id} className="menu-item">
                    <img src={item.itemImage} alt={item.itemName} className="menu-item-image" />
                    <div className="menu-item-details">
                      <h4>{item.itemName}</h4>
                      <p>{item.itemDescription}</p>
                      <p className="menu-item-price">€{item.itemPrice.toFixed(2)}</p>
                      <button
                        onClick={() => addToCart({
                          name: item.itemName,
                          price: `€${item.itemPrice.toFixed(2)}`,
                          image: item.itemImage,
                          description: item.itemDescription
                        })}
                        className="add-to-cart-btn"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Button */}
      <button className="cart-button" onClick={toggleCart}>
        🛒 {cart.length} Items
      </button>

      {/* Cart Modal */}
      {isCartVisible && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <h2>Your Cart</h2>
            <div className="cart-items">
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                cart.map((item) => (
                  <div key={item.name} className="cart-item">
                    <span>{item.name}</span>
                    <span>
                      {item.price} x {item.quantity}
                    </span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="cart-total">
              <p>Total: €{getTotalPrice()}</p>
            </div>

            {/* Order Details Form */}
            <div className="cart-form">
              <label>
                Full Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </label>

              <label>
                Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </label>

              <label>
                Payment Method:
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </label>
            </div>

            <button className="place-order-btn" onClick={handleOrderSubmit}>
              Place Order
            </button>
            <button className="close-cart-btn" onClick={toggleCart}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
