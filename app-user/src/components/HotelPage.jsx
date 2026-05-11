import React from 'react';
import { APP_DATA } from '../data';

const HotelPage = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Luxurious Stays</h1>
      
      <div className="grid-3">
        {APP_DATA.hotels.map((hotel) => (
          <div key={hotel.id} className="glass-card card interactive">
            <div className="card-image-wrapper">
              <img src={hotel.image} alt={hotel.name} className="card-image" />
              <div className="rating-badge">★ {hotel.rating}</div>
            </div>
            <div className="card-content">
              <div className="card-header-row">
                <h3>{hotel.name}</h3>
                <span className="location-tag">{hotel.location}</span>
              </div>
              <p className="text-muted">Experience world-class service and unparalleled comfort at NHPL's flagship properties.</p>
              <div className="card-footer">
                <span className="price-tag">{hotel.price}</span>
                <button className="premium-btn small">Reserve</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card filter-bar" style={{marginTop: '40px'}}>
        <div className="filter-group">
          <label>Location</label>
          <input type="text" placeholder="Search cities..." className="minimal-input" />
        </div>
        <div className="filter-group">
          <label>Dates</label>
          <input type="text" placeholder="May 12 - May 15" className="minimal-input" />
        </div>
        <div className="filter-group">
          <label>Guests</label>
          <select className="minimal-input">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3+ Guests</option>
          </select>
        </div>
        <button className="premium-btn">Check Availability</button>
      </div>
    </div>
  );
};

export default HotelPage;
