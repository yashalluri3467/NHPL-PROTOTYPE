"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';

export default function TravelPage({ selectedCity }) {
  const [search, setSearch] = useState('');
  
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            </div>
            <div>
              <span className="stat-label">Active Rides</span>
              <span className="stat-value">8</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginBottom: '2.5rem'}}>
        <h3 style={{marginBottom: '1rem'}}>Certified NHPL Chauffeurs in {selectedCity}</h3>
        <div className="discovery-gallery" style={{gap: '1rem'}}>
          {APP_DATA.drivers.filter(d => d.city === selectedCity).map(driver => (
            <div key={driver.id} className="official-card" style={{minWidth: '240px', padding: '1.25rem'}}>
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
              <button className="premium-action-btn" style={{width: '100%', padding: '6px', fontSize: '0.75rem'}}>Book Ride</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{marginBottom: '2.5rem'}}>
        <h3 style={{marginBottom: '1rem'}}>Available Near You</h3>
        <div className="discovery-gallery">
          {filtered.length > 0 ? filtered.map(loc => (
            <div key={loc.id} className="location-card">
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

      <div className="official-card" style={{padding: '0'}}>
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
                  <td><button className="premium-action-btn" style={{padding: '4px 12px', fontSize: '0.75rem'}}>Explore</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
