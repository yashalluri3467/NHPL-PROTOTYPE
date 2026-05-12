"use client";
import React, { useState, useEffect } from 'react';
import { APP_DATA } from '../data';

export default function QuickActionCTA() {
  const [mode, setMode] = useState('instant'); 
  const [service, setService] = useState('travel');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 minutes hold
  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    let timer;
    if (showResults && service === 'hotel' && countdown > 0) {
      timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [showResults, service, countdown]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const renderMatchedResults = () => {
    switch (service) {
      case 'travel':
        return (
          <div className="match-results-grid">
            {APP_DATA.drivers.slice(0, 3).map((driver, i) => (
              <div key={driver.id} className="match-card">
                <div className="match-badge">Recommended</div>
                <div className="match-info">
                  <span className="match-icon"><i className="ph ph-car"></i></span>
                  <div>
                    <h4>{driver.name} + NHPL Guide</h4>
                    <p>{driver.car} • {i + 2} min ETA</p>
                  </div>
                </div>
                <div className="match-pricing">
                  <span className="price">$45.00</span>
                  <button className="book-btn" onClick={() => setSelectedResult(driver.id)}>
                    {selectedResult === driver.id ? 'Selected' : 'Book'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'hotel':
        return (
          <div className="match-results-grid">
            <div className="hold-timer">
              <i className="ph ph-clock"></i>
              Rate Lock: {formatTime(countdown)} remaining
            </div>
            {['Luxury Suite', 'Executive Room', 'Premium Studio'].map((type, i) => (
              <div key={type} className="match-card">
                <div className="match-info">
                  <span className="match-icon"><i className="ph ph-bed"></i></span>
                  <div>
                    <h4>{type}</h4>
                    <p>King Bed • Free Breakfast • NHPL Exclusive</p>
                  </div>
                </div>
                <div className="match-pricing">
                  <span className="price">${120 + i * 40}</span>
                  <button className="book-btn">Select</button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'restaurant':
        return (
          <div className="match-results-grid">
            <div className="match-card highlight">
              <div className="match-info">
                <span className="match-icon"><i className="ph ph-fork-knife"></i></span>
                <div>
                  <h4>Standard Table for 4</h4>
                  <p>Next available: 19:30 • 5 min walk</p>
                </div>
              </div>
              <div className="match-pricing">
                <span className="status-tag">Available</span>
                <button className="book-btn">Confirm</button>
              </div>
            </div>
            <div className="match-card">
              <div className="match-info">
                <span className="match-icon"><i className="ph ph-shopping-bag"></i></span>
                <div>
                  <h4>Self Pickup</h4>
                  <p>Ready in 15 min</p>
                </div>
              </div>
              <div className="match-pricing">
                <span className="price">No Fee</span>
                <button className="book-btn">Order</button>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="quick-action-cta">
      <div className="cta-header">
        <div className="cta-title">
          <span className={`pulse-dot ${isSearching ? 'searching' : ''}`}></span>
          {isSearching ? 'Matching you with best NHPL options...' : 'Quick Booking & Requests'}
        </div>
        {!showResults && (
          <div className="mode-toggle">
            <button 
              className={`mode-btn ${mode === 'instant' ? 'active' : ''}`}
              onClick={() => setMode('instant')}
            >
              Instant Book
            </button>
            <button 
              className={`mode-btn ${mode === 'request' ? 'active' : ''}`}
              onClick={() => setMode('request')}
            >
              Request Mode
            </button>
          </div>
        )}
        {showResults && (
          <button className="close-results" onClick={() => setShowResults(false)}>✕ Close Results</button>
        )}
      </div>

      {!showResults ? (
        <div className={`cta-form-row ${isSearching ? 'loading' : ''}`}>
          <div className="input-group">
            <label>Service</label>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="travel">Travel & Transport</option>
              <option value="hotel">Hotels & Stays</option>
              <option value="restaurant">Dining & Tables</option>
            </select>
          </div>

          <div className="input-group">
            <label>{service === 'travel' ? 'Origin / Destination' : 'Property / Venue'}</label>
            <input type="text" placeholder={service === 'travel' ? 'e.g. Airport to Downtown' : 'e.g. NHPL Grand'} />
          </div>

          <div className="input-group">
            <label>Date & Time</label>
            <input type="datetime-local" />
          </div>

          <div className="input-group mini">
            <label>Pax</label>
            <input type="number" defaultValue="1" min="1" />
          </div>

          <div className="input-group">
            <label>Preferences</label>
            <input type="text" placeholder="e.g. Window seat, No smoking" />
          </div>

          <button className="cta-submit-btn" onClick={handleSearch} disabled={isSearching}>
            {isSearching ? 'Searching...' : (mode === 'instant' ? 'Book Now' : 'Send Request')}
          </button>
        </div>
      ) : (
        <div className="results-container">
          {renderMatchedResults()}
        </div>
      )}
    </div>
  );
}
