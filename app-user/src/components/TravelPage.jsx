import React from 'react';
import { APP_DATA } from '../data';

const TravelPage = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Explore Your Journey</h1>
      
      <div className="grid-3">
        {APP_DATA.travel.map((item) => (
          <div key={item.id} className="glass-card card interactive">
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-badge">{item.type}</div>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
              <div className="card-footer">
                <span className="price-tag">{item.price}</span>
                <button className="premium-btn small">Book Now</button>
              </div>
            </div>
          </div>
        ))}

        <div className="glass-card card promo-card">
          <div className="promo-content">
            <h3>Special Offer</h3>
            <p>Get 20% off on your first city tour with a verified local guide.</p>
            <button className="outline-btn">Claim Offer</button>
          </div>
        </div>
      </div>

      <div className="glass-card card search-banner" style={{marginTop: '40px'}}>
        <div className="banner-text">
          <h2>Ready for your next adventure?</h2>
          <p>Book a premium ride or find a guide in seconds.</p>
        </div>
        <div className="search-row">
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="premium-input"
          />
          <button className="premium-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
