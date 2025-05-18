import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.scss'; 

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      localStorage.setItem('token', response.data.token); // Save token
      navigate('/admin'); // Redirect to admin dashboard
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='admin-login'>
      <div className='card'>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className='login' type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
    </div>
  );
};

export default AdminLogin;