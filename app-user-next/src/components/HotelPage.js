"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';
import HotelBookingHero from './HotelBookingHero';

export default function HotelPage({ selectedCity, addBooking }) {
  const [bookingStatus, setBookingStatus] = useState({}); 
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const hotels = APP_DATA.hotels.filter(h => h.city === selectedCity);

  const handleOpenRooms = (hotel) => {
    setSelectedHotel(hotel);
    setIsBooking(true);
  };

  const confirmBooking = (details) => {
    setBookingStatus(prev => ({ ...prev, [selectedHotel.id]: 'success' }));
    setIsBooking(false);

    addBooking({
      type: 'Hotel',
      title: `Stay at ${selectedHotel.name}`,
      price: selectedHotel.price
    });

    setTimeout(() => {
      setBookingStatus(prev => ({ ...prev, [selectedHotel.id]: null }));
      setSelectedHotel(null);
    }, 3000);
  };

  const handleReserve = async (hotel, room) => {
    setBookingStatus(prev => ({ ...prev, [hotel.id]: 'processing' }));
    try {
      // Simulate API call
      setTimeout(() => {
        setBookingStatus(prev => ({ ...prev, [hotel.id]: 'success' }));
        setTimeout(() => {
          setBookingStatus(prev => ({ ...prev, [hotel.id]: null }));
          setSelectedHotel(null);
        }, 2000);
      }, 1000);
    } catch (error) {
      console.error("Booking failed:", error);
      setBookingStatus(prev => ({ ...prev, [hotel.id]: 'error' }));
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

      {hotels.length > 0 ? (
        <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="official-card" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{position: 'relative'}}>
                <img src={hotel.image} alt={hotel.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                <div style={{position: 'absolute', top: '12px', right: '12px', background: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <i className="ph-fill ph-star" style={{color: '#EAB308'}}></i>
                  {hotel.rating}
                </div>
                {bookingStatus[hotel.id] === 'success' && (
                  <div style={{position: 'absolute', inset: 0, background: 'rgba(22, 163, 74, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
                    <p style={{color: 'white', fontWeight: 800}}>ROOM RESERVED</p>
                  </div>
                )}
              </div>
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
                    onClick={() => handleOpenRooms(hotel)}
                  >
                    Reserve Now
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

      {isBooking && selectedHotel && (
        <HotelBookingHero 
          hotel={selectedHotel}
          onClose={() => setIsBooking(false)}
          onConfirm={confirmBooking}
        />
      )}
    </div>
  );
}
