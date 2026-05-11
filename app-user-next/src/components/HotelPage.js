"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';

export default function HotelPage({ selectedCity }) {
  const [bookingStatus, setBookingStatus] = useState(null);

  const hotels = APP_DATA.hotels.filter(h => h.city === selectedCity);

  const handleReserve = async (hotel) => {
    setBookingStatus('processing');
    try {
      const response = await fetch('/api/hotel-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 1,
          guest_name: "Alex Johnson",
          room_type: hotel.name,
          check_in: "2026-05-12",
          check_out: "2026-05-15",
          amount: hotel.price
        })
      });
      if (response.ok) {
        setBookingStatus('success');
        setTimeout(() => setBookingStatus(null), 3000);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      setBookingStatus('error');
    }
  };

  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Stays in {selectedCity}</h1>
        <p>Premium NHPL accommodations in {selectedCity}.</p>
      </div>

      <div className="stats-grid">
        <div className="official-card">
          <div className="stat-header">
            <div className="stat-icon-circle green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M2 20h20"/><path d="M7 10v4"/><path d="M17 10v4"/></svg>
            </div>
            <div>
              <span className="stat-label">Properties</span>
              <span className="stat-value">{hotels.length}</span>
            </div>
          </div>
        </div>
      </div>

      {bookingStatus === 'success' && (
        <div className="official-card" style={{background: '#f0fdf4', borderColor: '#16a34a', marginBottom: '24px'}}>
          <p style={{color: '#16a34a', fontWeight: 700, textAlign: 'center'}}>Reservation Successful.</p>
        </div>
      )}

      {hotels.length > 0 ? (
        <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="official-card" style={{padding: '0', overflow: 'hidden'}}>
              <img src={hotel.image} alt={hotel.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <div style={{padding: '1.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 style={{margin: 0}}>{hotel.name}</h3>
                  <span className="stat-label" style={{background: 'var(--bg-app)', padding: '2px 8px', borderRadius: '4px'}}>{hotel.location}</span>
                </div>
                <p className="text-muted" style={{fontSize: '0.85rem', marginBottom: '1.5rem'}}>Exquisite service and professional amenities.</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)'}}>{hotel.price}</span>
                  <button 
                    className="premium-action-btn"
                    onClick={() => handleReserve(hotel)}
                    disabled={bookingStatus === 'processing'}
                  >
                    {bookingStatus === 'processing' ? 'Processing...' : 'Reserve'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="official-card" style={{textAlign: 'center', padding: '4rem'}}>
          <p className="text-muted">No NHPL Signature Stays available in {selectedCity} yet. Exploring other cities?</p>
        </div>
      )}
    </div>
  );
}
