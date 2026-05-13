"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';
import RideBookingHero from './RideBookingHero';
import LocationDetailHero from './LocationDetailHero';

export default function TravelPage({ selectedCity, addBooking }) {
  const [search, setSearch] = useState('');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const handleBookClick = (driver) => {
    setSelectedDriver(driver);
  };

  const handleExploreClick = (location) => {
    setSelectedLocation(location);
  };

  const handleBookFromLocation = (location) => {
    // Open driver selector or just the first available driver for that location
    const availableDriver = APP_DATA.drivers.find(d => d.city === location.city);
    setSelectedLocation(null);
    setSelectedDriver(availableDriver);
  };

  const confirmBooking = (details) => {
    addBooking({
      type: 'Travel',
      title: `Chauffeur Service: ${selectedDriver.name}`,
      price: `₹${details.total}`
    });
    setSelectedDriver(null);
  };

  // Filter by city and search
  const filtered = APP_DATA.locations.filter(loc => 
    (loc.city === selectedCity || loc.name === selectedCity) &&
    (loc.name.toLowerCase().includes(search.toLowerCase()) || 
     loc.desc?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Explore {selectedCity}</h1>
        <p>Hand-picked experiences and regional highlights curated for your visit.</p>
      </div>

      {/* Stats Quick View */}
      <div className="stats-grid">
        <div className="official-card">
          <div className="stat-header">
            <div className="stat-icon-circle blue">
              <i className="ph ph-map-pin"></i>
            </div>
            <div>
              <span className="stat-label">Destinations in {selectedCity}</span>
              <span className="stat-value">{filtered.length}</span>
            </div>
          </div>
        </div>
        <div className="official-card">
          <div className="stat-header">
            <div className="stat-icon-circle green">
              <i className="ph ph-steering-wheel"></i>
            </div>
            <div>
              <span className="stat-label">Active Rides</span>
              <span className="stat-value">8</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Available Near You (Visual Gallery) */}
      <div style={{marginBottom: '2.5rem'}}>
        <h3 style={{marginBottom: '1rem'}}>Available Near You</h3>
        <div className="discovery-gallery">
          {filtered.length > 0 ? filtered.map(loc => (
            <div key={loc.id} className="location-card" onClick={() => handleExploreClick(loc)}>
              <img src={loc.image} alt={loc.name} />
              <div className="location-overlay">
                <h4>{loc.name}</h4>
                <p>{loc.desc?.substring(0, 40) || 'Discover the beauty of Jharkhand...'}...</p>
              </div>
            </div>
          )) : (
            <div className="official-card" style={{width: '100%', textAlign: 'center', padding: '3rem'}}>
              <p className="text-muted">No regional destinations found for {selectedCity}. Check back later!</p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Detailed Spots (Table) */}
      <div className="official-card" style={{padding: '0', marginBottom: '2.5rem'}}>
        <div style={{padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{margin:0}}>Detailed Spots in {selectedCity}</h3>
          <div style={{position: 'relative'}}>
            <input 
              type="text" 
              placeholder="Search spots..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.85rem'}}
            />
          </div>
        </div>
        <div className="official-table-wrapper">
          <table className="official-table">
            <thead>
              <tr>
                <th>Spot Name</th>
                <th>Vibe</th>
                <th>Best Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(loc => (
                <tr key={loc.id}>
                  <td style={{fontWeight: 600}}>{loc.name}</td>
                  <td><span style={{fontSize: '0.75rem', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px'}}>{loc.state}</span></td>
                  <td className="text-muted">Best Time: Oct-Mar</td>
                  <td>
                    <button 
                      className="premium-action-btn" 
                      style={{padding: '4px 12px', fontSize: '0.75rem'}}
                      onClick={() => handleExploreClick(loc)}
                    >
                      Explore
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Certified NHPL Chauffeurs (Driver List) */}
      <div style={{marginBottom: '2.5rem'}}>
        <h3 style={{marginBottom: '1rem'}}>Certified NHPL Chauffeurs in {selectedCity}</h3>
        <div className="discovery-gallery">
          {APP_DATA.drivers.filter(d => d.city === selectedCity).map(driver => (
            <div key={driver.id} className="official-card" style={{padding: '1.25rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                <div className="user-avatar" style={{width: '45px', height: '45px', fontSize: '1rem', background: 'var(--accent-bg)', color: 'var(--accent)'}}>
                  {driver.name[0]}
                </div>
                <div>
                  <h4 style={{margin: 0}}>{driver.name}</h4>
                  <p className="text-muted" style={{fontSize: '0.75rem'}}>{driver.car}</p>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '1rem'}}>
                <span>Rating: <b>{driver.rating}</b></span>
                <span><b>{driver.trips}</b> Trips</span>
              </div>
              <button 
                className="premium-action-btn" 
                style={{width: '100%', padding: '6px', fontSize: '0.75rem'}}
                onClick={() => handleBookClick(driver)}
              >
                Book Ride
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedDriver && (
        <RideBookingHero 
          driver={selectedDriver} 
          onClose={() => setSelectedDriver(null)}
          onConfirm={confirmBooking}
        />
      )}

      {selectedLocation && (
        <LocationDetailHero 
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
          onBookRide={handleBookFromLocation}
        />
      )}
    </div>
  );
}
