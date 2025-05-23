import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.scss';
import { format } from 'date-fns';
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const AdminPage = () => {
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
    
      navigate('/admin-login');
    } else {
      
      axios
        .get('http://localhost:5000/api/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch(() => {
         
          localStorage.removeItem('token');
          navigate('/admin-login');
        });
    }
  }, [navigate]);


  const [menuItems, setMenuItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const [menuForm, setMenuForm] = useState({
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemCategory: '',
    itemImage: '',
  });


  useEffect(() => {
    fetchMenuItems();
    fetchContacts();
    fetchBookings();
    fetchOrders();
  }, []);

  
  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/menu');
      setMenuItems(response.data);
    } catch (err) {
      console.error('Error fetching menu items:', err);
      alert('Failed to fetch menu items.');
    } finally {
      setLoading(false);
    }
  };

  
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };
  const handleMenuSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('itemName', menuForm.itemName);
  formData.append('itemDescription', menuForm.itemDescription);
  formData.append('itemPrice', parseFloat(menuForm.itemPrice));
  formData.append('itemCategory', menuForm.itemCategory);

  
  if (menuForm.itemImage instanceof File) {
    formData.append('itemImage', menuForm.itemImage);
  }

  try {
    if (menuForm._id) {
      const response = await axios.put(
        `http://localhost:5000/api/menu/${menuForm._id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      alert('Menu item updated successfully!');
      setMenuItems((prev) =>
        prev.map((item) => (item._id === menuForm._id ? response.data : item))
      );
    } else {
      const response = await axios.post(
        'http://localhost:5000/api/menu',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      alert('Menu item created successfully!');
      setMenuItems((prev) => [...prev, response.data]);
    }

  
    setMenuForm({
      itemName: '',
      itemDescription: '',
      itemPrice: '',
      itemCategory: '',
      itemImage: '',
    });

    
    document.querySelector('input[type="file"]').value = '';
  } catch (err) {
    console.error('Error submitting menu item:', err);
    alert('Failed to submit menu item.');
  }
};



  const handleDeleteMenuItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/menu/${id}`);
        alert('Menu item deleted successfully!');
        setMenuItems(prev => prev.filter(item => item._id !== id));
      } catch (err) {
        console.error('Error deleting menu item:', err);
        alert('Failed to delete menu item.');
      }
    }
  };

  
  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        alert('Contact deleted successfully!');
        setContacts(prev => prev.filter(contact => contact._id !== id));
      } catch (err) {
        console.error('Error deleting contact:', err);
        alert('Failed to delete contact.');
      }
    }
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        alert('Booking deleted successfully!');
        setBookings(prev => prev.filter(booking => booking._id !== id));
      } catch (err) {
        console.error('Error deleting booking:', err);
        alert('Failed to delete booking.');
      }
    }
  };

 
  const handleDeleteOrder = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`http://localhost:5000/api/orders/${id}`);
        alert('Order deleted successfully!');
        setOrders(prev => prev.filter(order => order._id !== id));
      } catch (err) {
        console.error('Error deleting order:', err);
        alert('Failed to delete order.');
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="admin-sections">


          <section className="admin-section">
            <h2>Contacts</h2>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.message}</td>
                    <td>
                      <button className='btn' onClick={() => handleDeleteContact(contact._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          
          <section className="admin-section">
            <h2>Bookings</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{format(new Date(booking.date), 'yyyy-MM-dd')}</td>
                    <td>{booking.time}</td>
                    <td>{booking.people}</td>
                    <td>
                      <button className="btn" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>


          
          <section className="admin-section">
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Items</th>
                  <th>Customer Info</th>
                  <th>Payment Method</th>
                  <th>Total (€)</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.itemName} × {item.quantity} @ €{item.price.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      <div><strong>Name:</strong> {order.customer.name}</div>
                      <div><strong>Phone:</strong> {order.customer.phone}</div>
                      <div><strong>Address:</strong> {order.customer.address}</div>
                    </td>
                    <td>{order.customer.paymentMethod}</td>
                    <td>€{order.total.toFixed(2)}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>
                      <button className="btn" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

        </div>
      )}


      <section className="admin-section">
        <h2>Menu Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item._id}>
                <td>{item.itemName}</td>
                <td>{item.itemDescription}</td>
                <td>{item.itemPrice}€</td>
                <td>{item.itemCategory}</td>
                <td>
  {item.itemImage ? <img src={`http://localhost:5000${item.itemImage}`} alt={item.itemName} /> : 'No Image'}
</td>
                <td>
                  <button  onClick={() => setMenuForm(item)} title="Edit" className="btn edit-button">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleDeleteMenuItem(item._id)} title="Delete" className="btn delete-button">
                    <Trash2 size={16} />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
      <section className="create-menu-section">
        <h2>{menuForm._id ? 'Update' : 'Create'} Menu Item</h2>
        <form onSubmit={handleMenuSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={menuForm.itemName}
            onChange={(e) => setMenuForm({ ...menuForm, itemName: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={menuForm.itemDescription}
            onChange={(e) => setMenuForm({ ...menuForm, itemDescription: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={menuForm.itemPrice}
            onChange={(e) => setMenuForm({ ...menuForm, itemPrice: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={menuForm.itemCategory}
            onChange={(e) => setMenuForm({ ...menuForm, itemCategory: e.target.value })}
            required
          />
          <input
            type="file"
            placeholder="Image"
            name="itemImage"
            onChange={(e) => setMenuForm({ ...menuForm, itemImage: e.target.files[0] })}
          />
          <button className="btn createform" type="submit">{menuForm._id ? 'Update' : 'Create'} Menu Item</button>
        </form>
      </section>
    </div>
  );
};

export default AdminPage;
