import React, { useState } from 'react';
import './Booking.css';

const games = [
  'FIFA 23', 'Call of Duty', 'Fortnite', 'Valorant', 'Minecraft', 'Rocket League', 'Apex Legends', 'Tekken 7', 'Mortal Kombat', 'PUBG', 'Overwatch', 'Counter-Strike', 'League of Legends', 'Dota 2', 'Among Us'
];

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    players: '',
    game: '',
    requests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (submitted) {
    return (
      <div className="booking-container">
        <div className="booking-confirmation">
          <h2>Thank you for your booking!</h2>
          <p>We have received your request and will contact you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Your Gaming Session</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-grid">
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Number of Players</label>
            <input type="number" name="players" min="1" max="20" value={form.players} onChange={handleChange} required />
          </div>
          <div className="form-row form-row-full">
            <label>Game/Package</label>
            <select name="game" value={form.game} onChange={handleChange} required>
              <option value="">Select a game/package</option>
              {games.map(game => (
                <option value={game} key={game}>{game}</option>
              ))}
            </select>
          </div>
          <div className="form-row form-row-full">
            <label>Special Requests</label>
            <textarea name="requests" value={form.requests} onChange={handleChange} placeholder="Any special requests?" />
          </div>
        </div>
        <button className="booking-submit" type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;