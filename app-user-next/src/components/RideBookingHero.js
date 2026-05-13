"use client";
import React, { useState } from 'react';

export default function RideBookingHero({ driver, onClose, onConfirm }) {
  const [bookingMode, setBookingMode] = useState('km'); // 'km' or 'points'
  const [distance, setDistance] = useState(50);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [vehicleType, setVehicleType] = useState('premium');
  const [includeGuide, setIncludeGuide] = useState(true);

  const points = [
    { id: '1', name: 'Airport / Station', icon: 'ph ph-airplane' },
    { id: '2', name: 'Downtown Center', icon: 'ph ph-buildings' },
    { id: '3', name: 'Netarhat Hills', icon: 'ph ph-mountains' },
    { id: '4', name: 'Patratu Valley', icon: 'ph ph-map-trifold' },
    { id: '5', name: 'Saffron Dining', icon: 'ph ph-fork-knife' },
  ];

  const togglePoint = (id) => {
    if (selectedPoints.includes(id)) {
      setSelectedPoints(selectedPoints.filter(p => p !== id));
    } else {
      setSelectedPoints([...selectedPoints, id]);
    }
  };

  const calculateEstimate = () => {
    let base = bookingMode === 'km' ? distance * 15 : selectedPoints.length * 500;
    if (vehicleType === 'luxury') base *= 1.5;
    if (includeGuide) base += 800;
    return base;
  };

  return (
    <div className="ride-hero-overlay">
      <div className="ride-hero-card">
        <div className="hero-close" onClick={onClose}>✕</div>
        
        <div className="hero-header">
          <div className="driver-mini">
            <div className="hero-avatar">{driver.name[0]}</div>
            <div>
              <h3>Booking with {driver.name}</h3>
              <p>{driver.car} • {driver.rating} ★</p>
            </div>
          </div>
          <div className="estimate-box">
            <span className="label">Estimated Total</span>
            <span className="value">₹{calculateEstimate()}</span>
          </div>
        </div>

        <div className="hero-body">
          {/* Mode Selector */}
          <div className="booking-modes">
            <button 
              className={`mode-tab ${bookingMode === 'km' ? 'active' : ''}`}
              onClick={() => setBookingMode('km')}
            >
              <span className="icon"><i className="ph ph-ruler"></i></span>
              <div>
                <strong>KM Wise</strong>
                <p>Pay as you go</p>
              </div>
            </button>
            <button 
              className={`mode-tab ${bookingMode === 'points' ? 'active' : ''}`}
              onClick={() => setBookingMode('points')}
            >
              <span className="icon"><i className="ph ph-map-pin-line"></i></span>
              <div>
                <strong>Point-to-Point</strong>
                <p>Fixed route</p>
              </div>
            </button>
          </div>

          <div className="config-section">
            {bookingMode === 'km' ? (
              <div className="km-config">
                <label>Distance Required: <strong>{distance} KM</strong></label>
                <input 
                  type="range" 
                  min="10" 
                  max="300" 
                  step="10" 
                  value={distance} 
                  onChange={(e) => setDistance(e.target.value)} 
                  className="hero-slider"
                />
                <div className="slider-labels">
                  <span>10km</span>
                  <span>150km</span>
                  <span>300km</span>
                </div>
              </div>
            ) : (
              <div className="points-config">
                <label>Select Destinations (Multi-stop allowed)</label>
                <div className="points-grid">
                  {points.map(p => (
                    <div 
                      key={p.id} 
                      className={`point-chip ${selectedPoints.includes(p.id) ? 'active' : ''}`}
                      onClick={() => togglePoint(p.id)}
                    >
                      <span className="p-icon"><i className={p.icon}></i></span>
                      <span className="p-name">{p.name}</span>
                      <div className="p-check">{selectedPoints.includes(p.id) ? '✓' : '+'}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="options-row">
            <div className="option-group">
              <label>Vehicle Class</label>
              <div className="radio-group">
                <button 
                  className={vehicleType === 'premium' ? 'active' : ''} 
                  onClick={() => setVehicleType('premium')}
                >Premium</button>
                <button 
                  className={vehicleType === 'luxury' ? 'active' : ''} 
                  onClick={() => setVehicleType('luxury')}
                >Luxury XL</button>
              </div>
            </div>
            <div className="option-group">
              <label>Add-ons</label>
              <div 
                className={`checkbox-card ${includeGuide ? 'active' : ''}`}
                onClick={() => setIncludeGuide(!includeGuide)}
              >
                <div className="cb-info">
                  <strong>Regional Guide</strong>
                  <p>Certified historical expert</p>
                </div>
                <div className="cb-toggle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <p className="footer-note">Includes NHPL Safe-Travel Insurance & 24/7 Monitoring</p>
          <button className="confirm-booking-btn" onClick={() => onConfirm({
            driverId: driver.id,
            total: calculateEstimate(),
            mode: bookingMode
          })}>
            CONFIRM & ASSIGN RIDER
          </button>
        </div>
      </div>

      <style jsx>{`
        .ride-hero-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }
        .ride-hero-card {
          background: white;
          width: 100%;
          max-width: 650px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          width: 32px; height: 32px;
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
        .driver-mini { display: flex; gap: 1rem; align-items: center; }
        .hero-avatar {
          width: 50px; height: 50px;
          background: var(--accent); color: white;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.25rem; font-weight: bold;
        }
        .estimate-box { text-align: right; }
        .estimate-box .label { display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; }
        .estimate-box .value { font-size: 1.75rem; font-weight: 800; color: var(--accent); }

        .hero-body { padding: 2rem; }
        
        .booking-modes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .mode-tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }
        .mode-tab.active { border-color: var(--accent); background: #f0f9ff; }
        .mode-tab .icon { font-size: 1.5rem; }
        .mode-tab strong { display: block; font-size: 0.95rem; }
        .mode-tab p { font-size: 0.75rem; color: #64748b; margin: 0; }

        .config-section { margin-bottom: 2rem; }
        .km-config label { display: block; margin-bottom: 1rem; font-weight: 600; }
        .hero-slider {
          width: 100%; height: 6px;
          background: #e2e8f0; border-radius: 3px;
          outline: none; -webkit-appearance: none;
        }
        .hero-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px; height: 24px;
          background: var(--accent); border: 4px solid white;
          border-radius: 50%; cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }
        .slider-labels { display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem; color: #94a3b8; }

        .points-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
        }
        .point-chip {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0;
          border-radius: 12px; cursor: pointer; position: relative;
        }
        .point-chip.active { background: white; border-color: var(--accent); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .p-icon { font-size: 1.25rem; }
        .p-name { font-size: 0.85rem; font-weight: 500; }
        .p-check { 
          margin-left: auto; width: 20px; height: 20px; 
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; background: #e2e8f0; font-size: 0.7rem; color: #64748b;
        }
        .point-chip.active .p-check { background: var(--accent); color: white; }

        .options-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .option-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; letter-spacing: 0.5px; margin-bottom: 0.75rem; }
        
        .radio-group { display: flex; background: #f1f5f9; padding: 4px; border-radius: 10px; }
        .radio-group button { 
          flex: 1; padding: 0.5rem; border: none; background: transparent; 
          border-radius: 7px; cursor: pointer; font-size: 0.85rem; font-weight: 600; color: #64748b;
        }
        .radio-group button.active { background: white; color: var(--accent); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }

        .checkbox-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 12px; cursor: pointer;
        }
        .checkbox-card.active { border-color: var(--accent); background: #f0f9ff; }
        .cb-info strong { display: block; font-size: 0.85rem; }
        .cb-info p { font-size: 0.7rem; color: #64748b; margin: 0; }
        .cb-toggle {
          width: 40px; height: 22px; background: #e2e8f0; border-radius: 20px; position: relative; transition: 0.3s;
        }
        .cb-toggle::after {
          content: ''; position: absolute; top: 2px; left: 2px;
          width: 18px; height: 18px; background: white; border-radius: 50%; transition: 0.3s;
        }
        .checkbox-card.active .cb-toggle { background: var(--accent); }
        .checkbox-card.active .cb-toggle::after { left: 20px; }

        .hero-footer { padding: 1.5rem 2rem; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; }
        .footer-note { font-size: 0.7rem; color: #94a3b8; margin-bottom: 1rem; }
        .confirm-booking-btn {
          width: 100%; padding: 1rem; background: var(--accent); color: white;
          border: none; border-radius: 14px; font-weight: 800; letter-spacing: 1px;
          cursor: pointer; box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
          transition: all 0.2s;
        }
        .confirm-booking-btn:hover { transform: translateY(-2px); box-shadow: 0 15px 20px -5px rgba(16, 185, 129, 0.4); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
