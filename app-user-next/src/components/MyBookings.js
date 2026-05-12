"use client";
import React from 'react';

export default function MyBookings() {
  const bookings = [
    { id: 'BK001', type: 'Travel', title: 'Pickup from Ranchi Airport', date: 'Oct 24, 2024', status: 'Upcoming', price: '$45.00' },
    { id: 'BK002', type: 'Hotel', title: 'NHPL Grand Luxury Ranchi', date: 'Oct 24-25, 2024', status: 'Confirmed', price: '$180.00' },
    { id: 'BK003', type: 'Dining', title: 'Saffron Restaurant', date: 'Oct 24, 2024 (20:00)', status: 'Upcoming', price: '$65.50' }
  ];

  return (
    <div className="bookings-page">
      <div className="section-header">
        <h2 className="section-title">My Bookings</h2>
        <p className="section-subtitle">Manage your active and upcoming experiences.</p>
      </div>

      <div className="bookings-list">
        {bookings.map(booking => (
          <div key={booking.id} className="official-card booking-row">
            <div className="booking-info">
              <span className={`type-tag ${booking.type.toLowerCase()}`}>{booking.type}</span>
              <div>
                <h4 className="booking-title">{booking.title}</h4>
                <p className="booking-id">ID: {booking.id} • {booking.date}</p>
              </div>
            </div>
            
            <div className="booking-status-box">
              <span className="status-badge upcoming">{booking.status}</span>
              <p className="booking-price">{booking.price}</p>
            </div>

            <div className="booking-actions">
              <button className="action-btn secondary">Modify</button>
              <button className="action-btn primary">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
