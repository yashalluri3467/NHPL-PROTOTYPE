"use client";
import React, { useState } from 'react';

export default function UnifiedFolio() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const items = [
    { id: '1', type: 'Trip', title: 'Airport Pickup', price: 45.00, details: 'Driver + Guide' },
    { id: '2', type: 'Hotel', title: 'NHPL Grand Luxury', price: 180.00, details: '1 Night, Suite' },
    { id: '3', type: 'Food', title: 'Saffron Dinner', price: 65.50, details: 'Pre-ordered for 20:00' }
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsPaid(true);
      setTimeout(() => setIsPaid(false), 3000);
    }, 2000);
  };

  return (
    <div className={`folio-drawer ${isExpanded ? 'expanded' : ''} ${isPaid ? 'paid-success' : ''}`}>
      <div className="folio-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="folio-summary">
          <div className="cart-icon">
            {isPaid ? (
              <i className="ph-fill ph-check-circle" style={{color: '#059669', fontSize: '1.5rem'}}></i>
            ) : (
              <i className="ph ph-shopping-cart-simple"></i>
            )}
            {!isPaid && <span className="count">{items.length}</span>}
          </div>
          <div>
            <p className="total-label">{isPaid ? 'Payment Successful' : 'Total Folio Amount'}</p>
            <p className="total-value">{isPaid ? 'CONFIRMED' : `$${total.toFixed(2)}`}</p>
          </div>
        </div>
        <button 
          className={`pay-btn ${isCheckingOut ? 'loading' : ''}`} 
          onClick={(e) => { e.stopPropagation(); handleCheckout(); }}
          disabled={isCheckingOut || isPaid}
        >
          {isCheckingOut ? 'Processing...' : isPaid ? 'Paid' : 'Checkout'}
        </button>
      </div>

      {isExpanded && (
        <div className="folio-details">
          <h4 className="details-title">Booking Breakdown</h4>
          <div className="folio-items">
            {items.map(item => (
              <div key={item.id} className="folio-item">
                <div className="item-info">
                  <span className="type-tag">{item.type}</span>
                  <div>
                    <p className="item-title">{item.title}</p>
                    <p className="item-sub">{item.details}</p>
                  </div>
                </div>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          <div className="split-pricing">
            <button className="secondary-btn"><i className="ph ph-users-three"></i> Split Bill</button>
            <button className="secondary-btn"><i className="ph ph-file-pdf"></i> Download PDF Invoice</button>
          </div>
          
          <div className="fee-breakdown">
            <p>Includes NHPL Platform Fee ($5.00) & Taxes ($12.50)</p>
          </div>
        </div>
      )}
    </div>
  );
}
