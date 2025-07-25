import React from 'react';
import './Pricing.css';

const packages = [
  {
    name: 'Basic',
    price: '₹99/hr',
    features: [
      'Access to standard gaming PCs',
      'Free WiFi',
      '1 soft drink included',
      'Casual seating',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹149/hr',
    features: [
      'High-end gaming PCs & consoles',
      'Priority seating',
      '2 soft drinks included',
      'Access to tournaments',
      'VR experience (15 min)',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '₹249/hr',
    features: [
      'Private gaming zone',
      'Snacks & unlimited drinks',
      'Premium peripherals',
      'Personal game coach (on request)',
      'VIP lounge access',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Our Packages</h2>
      <div className="pricing-cards">
        {packages.map((pkg) => (
          <div className={`pricing-card${pkg.popular ? ' popular' : ''}`} key={pkg.name}>
            {pkg.popular && <div className="popular-badge">Most Popular</div>}
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price}</div>
            <ul className="features">
              {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="choose-btn">Choose {pkg.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;