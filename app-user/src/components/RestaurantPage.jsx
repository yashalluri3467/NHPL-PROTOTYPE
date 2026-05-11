import React, { useState } from 'react';
import { APP_DATA } from '../data';

const RestaurantPage = () => {
  const [mode, setMode] = useState('delivery');

  return (
    <div className="page-container">
      <h1 className="section-title">Premium Dining</h1>
      
      <div className="mode-selector-wrapper">
        <div className="glass-card mode-selector">
          <button 
            onClick={() => setMode('dine')}
            className={`mode-btn ${mode === 'dine' ? 'active' : ''}`}
          >Dine-in</button>
          <button 
            onClick={() => setMode('takeaway')}
            className={`mode-btn ${mode === 'takeaway' ? 'active' : ''}`}
          >Takeaway</button>
          <button 
            onClick={() => setMode('delivery')}
            className={`mode-btn ${mode === 'delivery' ? 'active' : ''}`}
          >Delivery</button>
        </div>
      </div>

      <div className="grid-3">
        {APP_DATA.restaurants.map((res) => (
          <div key={res.id} className="glass-card card interactive">
            <div className="card-image-wrapper">
              <img src={res.image} alt={res.name} className="card-image" />
              <div className="time-badge">{res.time}</div>
            </div>
            <div className="card-content">
              <div className="card-header-row">
                <h3>{res.name}</h3>
                <span className="rating-pill">★ {res.rating}</span>
              </div>
              <p className="text-muted">{res.cuisine} • Fine Dining Experience</p>
              <div className="card-footer">
                <span className="mode-indicator">{mode.toUpperCase()}</span>
                <button className="premium-btn small">View Menu</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
