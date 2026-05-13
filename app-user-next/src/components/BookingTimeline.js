"use client";
import React from 'react';

export default function BookingTimeline() {
  const activeBookings = [
    {
      id: 'B1',
      type: 'trip',
      title: 'Airport Transfer',
      status: 'In Progress',
      progress: 65,
      eta: '12 min',
      provider: 'Rahul (Innova)',
      icon: 'ph ph-car'
    },
    {
      id: 'B2',
      type: 'hotel',
      title: 'NHPL Grand Ranchi',
      status: 'Confirmed',
      progress: 0,
      checkIn: 'Tomorrow, 12:00',
      icon: 'ph ph-bed'
    },
    {
      id: 'B3',
      type: 'restaurant',
      title: 'Saffron Dining',
      status: 'Preparing',
      progress: 30,
      eta: '15 min',
      icon: 'ph ph-fork-knife'
    }
  ];

  return (
    <div className="official-card timeline-card">
      <div className="card-header">
        <h3 className="card-title">Live Bookings & Timeline</h3>
        <span className="live-indicator">● LIVE</span>
      </div>

      <div className="timeline-list">
        {activeBookings.map((item, index) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-connector">
              <div className="timeline-node"><i className={item.icon}></i></div>
              {index < activeBookings.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="item-main">
                  <h4>{item.title}</h4>
                  <p className="item-meta">{item.provider || item.checkIn || 'Active Reservation'}</p>
                </div>
                <div className="item-status">
                  <span className={`status-pill ${item.status.toLowerCase().replace(' ', '-')}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {item.progress > 0 && (
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
                  <span className="progress-text">{item.eta ? `ETA: ${item.eta}` : `${item.progress}%`}</span>
                </div>
              )}

              <div className="quick-actions">
                <button className="action-link">View Details</button>
                <button className="action-link">Modify</button>
                {item.type === 'trip' && <button className="action-link highlight">Track Map</button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
