"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';
import RestaurantBookingHero from './RestaurantBookingHero';

export default function RestaurantPage({ selectedCity }) {
  const [mode, setMode] = useState('dine');
  const [orderStatus, setOrderStatus] = useState({}); 
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const restaurants = APP_DATA.restaurants.filter(r => r.city === selectedCity);

  const handleOpenMenu = (res) => {
    setSelectedRestaurant(res);
    setIsBooking(true);
  };

  const confirmBooking = (details) => {
    setOrderStatus(prev => ({ ...prev, [selectedRestaurant.id]: 'success' }));
    setIsBooking(false);
    setTimeout(() => {
      setOrderStatus(prev => ({ ...prev, [selectedRestaurant.id]: null }));
      setSelectedRestaurant(null);
    }, 3000);
  };

  const handleOrder = async (res, item) => {
    setOrderStatus(prev => ({ ...prev, [res.id]: 'processing' }));
    try {
      // Simulate API call
      setTimeout(() => {
        setOrderStatus(prev => ({ ...prev, [res.id]: 'success' }));
        setTimeout(() => {
          setOrderStatus(prev => ({ ...prev, [res.id]: null }));
          setSelectedRestaurant(null);
        }, 2000);
      }, 1000);
    } catch (error) {
      console.error("Order failed:", error);
      setOrderStatus(prev => ({ ...prev, [res.id]: 'error' }));
    }
  };

  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Dining in {selectedCity}</h1>
        <p>Explore the best of {selectedCity} culinary delights.</p>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2.5rem'}}>
        <div className="official-card" style={{padding: '6px', borderRadius: '14px', display: 'inline-flex', gap: '4px'}}>
          {['dine', 'takeaway', 'delivery'].map((m) => (
            <button 
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: '8px 20px', 
                borderRadius: '10px', 
                border: 'none', 
                background: mode === m ? 'var(--accent)' : 'transparent',
                color: mode === m ? 'white' : 'var(--text-secondary)',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease'
              }}
            >{m}</button>
          ))}
        </div>
      </div>

      {restaurants.length > 0 ? (
        <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {restaurants.map((res) => (
            <div key={res.id} className="official-card" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{position: 'relative'}}>
                <img src={res.image} alt={res.name} style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                {orderStatus[res.id] === 'success' && (
                  <div style={{position: 'absolute', inset: 0, background: 'rgba(5, 150, 105, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
                    <p style={{color: 'white', fontWeight: 800}}>ORDER PLACED</p>
                  </div>
                )}
                <div style={{position: 'absolute', top: '12px', right: '12px', background: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <i className="ph-fill ph-star" style={{color: '#EAB308'}}></i>
                  {res.rating}
                </div>
              </div>
              <div style={{padding: '1.25rem'}}>
                <h3 style={{margin: '0 0 0.5rem 0'}}>{res.name}</h3>
                <p className="text-muted" style={{fontSize: '0.85rem', marginBottom: '1.25rem'}}>{res.cuisine} • {res.time} delivery</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span className="stat-label" style={{color: 'var(--accent)'}}>{mode.toUpperCase()}</span>
                  <button 
                    className="premium-action-btn"
                    onClick={() => handleOpenMenu(res)}
                  >
                    {mode === 'dine' ? 'Reserve Table' : 'Order Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="official-card" style={{textAlign: 'center', padding: '4rem'}}>
          <p className="text-muted">No NHPL Culinary outlets in {selectedCity} yet. We are expanding soon!</p>
        </div>
      )}

      {isBooking && selectedRestaurant && (
        <RestaurantBookingHero 
          restaurant={selectedRestaurant}
          onClose={() => setIsBooking(false)}
          onConfirm={confirmBooking}
        />
      )}
    </div>
  );
}
