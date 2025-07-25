import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </div>
          <button className="contact-submit" type="submit">Send Message</button>
          {submitted && (
            <div className="contact-confirmation">Thank you! We'll get back to you soon.</div>
          )}
        </form>
        <div className="contact-info">
          <h3>PlayerOne Gaming Lounge</h3>
          <p>123 Main Street, Sonipat, Haryana</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Email:</b> info@playerone.com</p>
        </div>
      </div>
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3551290455075!2d77.03075167593595!3d29.004056975464092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1c221bb7cdf%3A0x9745b555f9c193fe!2sPlayer%20one!5e1!3m2!1sen!2sin!4v1753355320299!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PlayerOne Location"></iframe>
      </div>
    </div>
  );
};

export default Contact;