"use client";
import React, { useState, useEffect } from 'react';

export default function OrderTracker({ order, onComplete }) {
  const [step, setStep] = useState(0); // 0: Confirmed, 1: Preparing, 2: Ready, 3: Completed
  const steps = [
    { label: 'Order Confirmed', icon: 'ph-check-circle', desc: 'We have received your order' },
    { label: 'Preparing', icon: 'ph-fire', desc: 'Chef is preparing your meal' },
    { label: 'Ready for Pickup', icon: 'ph-package', desc: 'Your order is at the counter' },
    { label: 'Picked Up', icon: 'ph-hand-waving', desc: 'Enjoy your meal!' }
  ];

  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 5000); // 5 seconds per step for demo
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 3000);
    }
  }, [step]);

  return (
    <div className="order-tracker-card official-card">
      <div className="tracker-header">
        <div className="live-badge">
          <div className="dot"></div>
          LIVE TRACKING
        </div>
        <h3>{order.restaurantName || 'Restaurant Order'}</h3>
        <p className="order-id">ORDER ID: #NHPL-{Math.floor(Math.random() * 9000) + 1000}</p>
      </div>

      <div className="tracker-steps">
        {steps.map((s, i) => (
          <div key={i} className={`step-item ${i <= step ? 'active' : ''} ${i === step ? 'current' : ''}`}>
            <div className="step-icon">
              <i className={`ph-fill ${s.icon}`}></i>
            </div>
            <div className="step-content">
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
            {i < 3 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="order-footer">
        <div className="estimated-time">
          <i className="ph ph-timer"></i>
          <span>Est. Ready in: <strong>{step >= 2 ? 'READY' : `${(3 - step) * 5} mins`}</strong></span>
        </div>
        <button className="help-btn">Need Help?</button>
      </div>

      <style jsx>{`
        .order-tracker-card {
          margin-top: 2rem;
          background: #0f172a !important;
          color: white !important;
          border: none !important;
          padding: 2rem !important;
          border-radius: 24px !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          position: relative;
          overflow: hidden;
        }
        .order-tracker-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--accent), #facc15);
        }
        .tracker-header { margin-bottom: 2rem; }
        .live-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(16, 185, 129, 0.2); color: #10b981;
          padding: 4px 12px; border-radius: 20px; font-size: 0.7rem;
          font-weight: 800; letter-spacing: 1px; margin-bottom: 1rem;
        }
        .dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: blink 1s infinite; }
        .order-id { font-size: 0.75rem; opacity: 0.6; margin-top: 0.25rem; }

        .tracker-steps {
          display: flex; flex-direction: column; gap: 1.5rem; position: relative;
        }
        .step-item { display: flex; gap: 1.5rem; align-items: flex-start; position: relative; opacity: 0.4; transition: 0.4s; }
        .step-item.active { opacity: 1; }
        .step-item.current .step-icon { transform: scale(1.2); box-shadow: 0 0 20px var(--accent); }
        
        .step-icon {
          width: 40px; height: 40px; background: #1e293b; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
          z-index: 2; position: relative;
        }
        .step-item.active .step-icon { background: var(--accent); color: white; }
        
        .step-content strong { display: block; font-size: 1rem; margin-bottom: 0.2rem; }
        .step-content p { font-size: 0.8rem; opacity: 0.7; margin: 0; }
        
        .step-line {
          position: absolute; left: 20px; top: 40px; bottom: -20px;
          width: 2px; background: #1e293b; z-index: 1;
        }
        .step-item.active .step-line { background: var(--accent); }

        .order-footer {
          margin-top: 2.5rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex; justify-content: space-between; align-items: center;
        }
        .estimated-time { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; }
        .estimated-time i { font-size: 1.5rem; color: var(--accent); }
        .help-btn { 
          background: rgba(255,255,255,0.1); border: none; color: white; 
          padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 0.8rem;
        }

        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
