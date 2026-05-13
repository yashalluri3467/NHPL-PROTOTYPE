"use client";
import React, { useState } from 'react';

export default function HotelBookingHero({ hotel, onClose, onConfirm }) {
  const [step, setStep] = useState('reserve'); // 'reserve' | 'rooms' | 'unavailable'
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    phone: '+91 98765 43210',
    email: 'alex.j@example.com',
    guests: 2,
    checkIn: '',
    checkOut: ''
  });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckAvailability = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      // Mock logic: Always available unless guests > 12 (unrealistic but follows the pattern)
      if (formData.guests > 12) {
        setStep('unavailable');
      } else {
        setStep('rooms');
      }
    }, 1500);
  };

  return (
    <div className="hotel-hero-overlay">
      <div className="hotel-hero-card">
        <div className="hero-close" onClick={onClose}>✕</div>
        
        <div className="hero-header">
          <div className="hotel-mini">
            <div className="hotel-avatar"><i className="ph-fill ph-bed"></i></div>
            <div>
              <h3>{hotel.name}</h3>
              <p>{hotel.location} • {hotel.rating} <i className="ph-fill ph-star" style={{color: '#EAB308'}}></i></p>
            </div>
          </div>
          {step === 'rooms' && selectedRoom && (
            <div className="price-summary">
              <span className="label">Total / Night</span>
              <span className="value">₹{(selectedRoom.price * 85).toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="hero-body">
          {step === 'reserve' && (
            <div className="booking-form">
              <div className="form-title">
                <i className="ph ph-calendar-plus"></i>
                <div>
                  <h4>Stay Configuration</h4>
                  <p>Define your travel dates and group size</p>
                </div>
              </div>

              <div className="input-grid">
                <div className="input-group">
                  <label>Check-In Date</label>
                  <input type="date" value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Check-Out Date</label>
                  <input type="date" value={formData.checkOut} onChange={e => setFormData({...formData, checkOut: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Adults / Guests</label>
                  <select value={formData.guests} onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}>
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guests</option>)}
                  </select>
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="input-group full">
                  <label>Full Guest Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
              </div>

              <button className="primary-action-btn mt-2" onClick={handleCheckAvailability} disabled={isChecking}>
                {isChecking ? 'Checking Inventory...' : 'CHECK AVAILABILITY'}
              </button>
            </div>
          )}

          {step === 'rooms' && (
            <div className="room-selection">
              <div className="form-title">
                <i className="ph ph-door-open"></i>
                <div>
                  <h4>Inventory Found!</h4>
                  <p>Choose your preferred luxury room type</p>
                </div>
              </div>

              <div className="room-list-compact">
                {hotel.rooms.map((room, idx) => (
                  <div key={idx} className={`room-row ${selectedRoom?.name === room.name ? 'selected' : ''}`} onClick={() => setSelectedRoom(room)}>
                    <div className="room-info">
                      <strong>{room.name}</strong>
                      <p>{room.desc}</p>
                      <div className="room-tags">
                        <span>{room.type}</span>
                        {room.price > 300 && <span className="premium-tag">Exclusive</span>}
                      </div>
                    </div>
                    <div className="room-price">
                      <span>₹{(room.price * 85).toLocaleString()}</span>
                      <small>/ night</small>
                    </div>
                    <div className="room-radio">
                      <div className={`radio-dot ${selectedRoom?.name === room.name ? 'checked' : ''}`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="primary-action-btn mt-2" 
                disabled={!selectedRoom}
                onClick={() => onConfirm({ formData, room: selectedRoom })}
              >
                {selectedRoom ? `RESERVE ${selectedRoom.name.toUpperCase()}` : 'SELECT A ROOM'}
              </button>
            </div>
          )}

          {step === 'unavailable' && (
            <div className="error-view">
              <div className="error-icon"><i className="ph ph-warning-circle"></i></div>
              <h3>Sold Out / Unavailable</h3>
              <p>We're sorry, NHPL {hotel.name} has no available inventory for {formData.guests} guests on the selected dates. Please try adjusting your dates or guest count.</p>
              <button className="secondary-action-btn mt-2" onClick={() => setStep('reserve')}>MODIFY DATES</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hotel-hero-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }
        .hotel-hero-card {
          background: white;
          width: 100%;
          max-width: 650px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: #f1f5f9; border-radius: 50%;
          cursor: pointer; font-weight: bold; color: #64748b;
          z-index: 10;
        }
        .hero-header {
          padding: 2rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hotel-mini { display: flex; gap: 1rem; align-items: center; }
        .hotel-avatar {
          width: 54px; height: 54px;
          background: var(--accent-bg); color: var(--accent);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.75rem;
        }
        .price-summary { text-align: right; }
        .price-summary .label { display: block; font-size: 0.7rem; color: #64748b; font-weight: 700; text-transform: uppercase; }
        .price-summary .value { font-size: 1.5rem; font-weight: 800; color: var(--accent); }

        .hero-body { padding: 2.5rem; }
        .form-title { display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem; }
        .form-title i { font-size: 1.75rem; color: var(--accent); }
        .form-title h4 { margin: 0; font-size: 1.25rem; }
        .form-title p { margin: 0; font-size: 0.9rem; color: #64748b; }

        .input-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .input-group.full { grid-column: span 2; }
        .input-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .input-group input, .input-group select { 
          width: 100%; padding: 0.85rem 1rem; border: 1.5px solid #e2e8f0; 
          border-radius: 12px; background: #f8fafc; font-family: inherit; font-size: 0.95rem;
          outline: none; transition: 0.2s;
        }
        .input-group input:focus { border-color: var(--accent); background: white; }

        .room-list-compact {
          max-height: 350px;
          overflow-y: auto;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-right: 0.5rem;
        }
        .room-row {
          display: flex; align-items: center; gap: 1.5rem;
          padding: 1.25rem; border: 2px solid #f1f5f9; border-radius: 18px;
          cursor: pointer; transition: 0.2s;
        }
        .room-row:hover { border-color: #e2e8f0; background: #f8fafc; }
        .room-row.selected { border-color: var(--accent); background: #f0f9ff; }
        
        .room-info { flex: 1; }
        .room-info strong { display: block; font-size: 1rem; color: #1e293b; margin-bottom: 0.25rem; }
        .room-info p { font-size: 0.8rem; color: #64748b; margin: 0 0 0.75rem 0; line-height: 1.4; }
        
        .room-tags { display: flex; gap: 0.5rem; }
        .room-tags span { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; background: #f1f5f9; border-radius: 4px; color: #475569; }
        .room-tags .premium-tag { background: var(--accent-bg); color: var(--accent); }

        .room-price { text-align: right; }
        .room-price span { display: block; font-size: 1.1rem; font-weight: 800; color: #1e293b; }
        .room-price small { font-size: 0.7rem; color: #94a3b8; font-weight: 600; }

        .room-radio .radio-dot {
          width: 22px; height: 22px; border: 2px solid #cbd5e1; border-radius: 50%;
          position: relative; transition: 0.2s;
        }
        .room-row.selected .radio-dot { border-color: var(--accent); }
        .room-row.selected .radio-dot::after {
          content: ''; position: absolute; inset: 4px;
          background: var(--accent); border-radius: 50%;
        }

        .error-view { text-align: center; padding: 2rem 0; }
        .error-icon { font-size: 4.5rem; color: #ef4444; margin-bottom: 1.5rem; opacity: 0.8; }

        .primary-action-btn {
          width: 100%; padding: 1.25rem; background: var(--accent); color: white;
          border: none; border-radius: 16px; font-weight: 800; letter-spacing: 1px;
          cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(180, 148, 31, 0.3);
        }
        .primary-action-btn:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 15px 20px -5px rgba(180, 148, 31, 0.4); }
        .primary-action-btn:disabled { background: #cbd5e1; cursor: not-allowed; transform: none; box-shadow: none; }

        .secondary-action-btn {
          padding: 0.85rem 1.75rem; background: transparent; border: 2px solid #e2e8f0;
          border-radius: 14px; font-weight: 700; color: #64748b; cursor: pointer;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
