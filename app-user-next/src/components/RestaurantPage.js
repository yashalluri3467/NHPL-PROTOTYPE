"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';

export default function RestaurantPage({ selectedCity }) {
  const [mode, setMode] = useState('delivery');
  const [orderStatus, setOrderStatus] = useState(null);

  const restaurants = APP_DATA.restaurants.filter(r => r.city === selectedCity);

  const handleOrder = async (res) => {
    setOrderStatus('processing');
    try {
      const response = await fetch('/api/restaurant-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 1,
          restaurant_name: res.name,
          items: [{ name: "Signature Dish", price: 25.00 }],
          total_amount: 25.00,
          order_type: mode
        })
      });
      if (response.ok) {
        setOrderStatus('success');
        setTimeout(() => setOrderStatus(null), 3000);
      }
    } catch (error) {
      console.error("Order failed:", error);
      setOrderStatus('error');
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

      {orderStatus === 'success' && (
        <div className="official-card" style={{background: '#eff6ff', borderColor: '#2563eb', marginBottom: '24px'}}>
          <p style={{color: '#2563eb', fontWeight: 700, textAlign: 'center'}}>Order Confirmed.</p>
        </div>
      )}

      {restaurants.length > 0 ? (
        <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {restaurants.map((res) => (
            <div key={res.id} className="official-card" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{position: 'relative'}}>
                <img src={res.image} alt={res.name} style={{width: '100%', height: '180px', objectFit: 'cover'}} />
                <div style={{position: 'absolute', top: '12px', right: '12px', background: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
                    onClick={() => handleOrder(res)}
                    disabled={orderStatus === 'processing'}
                  >
                    {orderStatus === 'processing' ? 'Processing...' : 'Order'}
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
    </div>
  );
}
