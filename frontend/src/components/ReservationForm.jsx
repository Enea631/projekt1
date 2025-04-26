import { useState } from 'react';
import './ReservationForm.scss';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table reserved for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
    // Here you'd normally send this data to a backend or email service
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h3>Reserve a Table</h3>
      <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
      <input type="date" name="date" required onChange={handleChange} />
      <input type="time" name="time" required onChange={handleChange} />
      <input type="number" name="guests" min="1" max="20" placeholder="Guests" required onChange={handleChange} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default ReservationForm;
