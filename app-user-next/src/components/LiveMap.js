"use client";
import React from 'react';

export default function LiveMap() {
  return (
    <div className="official-card map-card">
      <div className="card-header">
        <h3 className="card-title">Live Tracking & Route</h3>
        <div className="map-controls">
          <span className="share-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            Share Live Link
          </span>
        </div>
      </div>
      
      <div className="map-placeholder">
        {/* Mock Map View */}
        <div className="map-overlay-info">
          <div className="vehicle-info">
            <span className="v-icon">🚗</span>
            <div>
              <p className="v-id">JH01-BJ-9921</p>
              <p className="v-status">En route to Ranchi Airport</p>
            </div>
          </div>
          <div className="eta-badge">12 MIN</div>
        </div>
        
        {/* Mock Route Line */}
        <svg className="route-svg" viewBox="0 0 400 300">
          <path d="M 50 250 Q 150 50 350 100" stroke="var(--accent)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
          <circle cx="50" cy="250" r="6" fill="#DC2626" /> {/* Origin */}
          <circle cx="350" cy="100" r="6" fill="#059669" /> {/* Destination */}
          <circle cx="150" cy="115" r="8" fill="var(--accent)">
            <animate attributeName="cx" values="50;150;350" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="250;115;100" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="map-footer">
        <p><b>Driver:</b> Rahul S. (Verified ★4.9)</p>
        <p><b>Security:</b> NHPL Safetrip Active</p>
      </div>
    </div>
  );
}
