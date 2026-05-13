"use client";
import React, { useState } from 'react';

export default function RestaurantBookingHero({ restaurant, onClose, onConfirm, mode = 'dine' }) {
  const [step, setStep] = useState(mode === 'dine' ? 'reserve' : 'details'); // 'reserve' | 'details' | 'menu' | 'full'
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    phone: '+91 98765 43210',
    email: 'alex.j@example.com',
    persons: 2
  });
  const [cart, setCart] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const handleNext = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      if (mode === 'dine' && formData.persons > 8) {
        setStep('full');
      } else {
        setStep('menu');
      }
    }, 1200);
  };

  const toggleCartItem = (item) => {
    if (cart.find(i => i.name === item.name)) {
      setCart(cart.filter(i => i.name !== item.name));
    } else {
      setCart([...cart, item]);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="res-hero-overlay">
      <div className="res-hero-card">
        <div className="hero-close" onClick={onClose}>✕</div>
        
        <div className="hero-header">
          <div className="res-mini">
            <div className="res-avatar"><i className="ph-fill ph-fork-knife"></i></div>
            <div>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine} • {restaurant.rating} <i className="ph-fill ph-star" style={{color: '#EAB308'}}></i></p>
            </div>
          </div>
          {step === 'menu' && (
            <div className="cart-summary">
              <span className="label">Order Total</span>
              <span className="value">₹{(total * 85).toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="hero-body">
          {(step === 'reserve' || step === 'details') && (
            <div className="reservation-form">
              <div className="form-title">
                <i className={`ph ${mode === 'dine' ? 'ph-calendar-check' : 'ph-user-list'}`}></i>
                <div>
                  <h4>{mode === 'dine' ? 'Secure Your Table' : 'Contact Information'}</h4>
                  <p>{mode === 'dine' ? 'Check real-time availability' : 'Required for order tracking'}</p>
                </div>
              </div>

              <div className="input-grid">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="input-group full">
                  <label>Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                
                {mode === 'dine' && (
                  <div className="input-group full">
                    <label>Number of Persons</label>
                    <div className="persons-selector">
                      {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                        <button 
                          key={n} 
                          className={formData.persons === n ? 'active' : ''}
                          onClick={() => setFormData({...formData, persons: n})}
                        >{n}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="primary-action-btn mt-2" onClick={handleNext} disabled={isChecking}>
                {isChecking ? 'Processing...' : (mode === 'dine' ? 'CHECK CAPACITY & RESERVE' : 'CONTINUE TO MENU')}
              </button>
            </div>
          )}

          {step === 'menu' && (
            <div className="menu-selection">
              <div className="form-title">
                <i className="ph ph-shopping-bag-open"></i>
                <div>
                  <h4>{mode === 'dine' ? 'Table Reserved!' : 'Select Your Items'}</h4>
                  <p>{mode === 'dine' ? 'Pre-order from the menu to save time' : 'Add your favorites to the cart'}</p>
                </div>
              </div>

              <div className="menu-list-compact">
                {restaurant.menu.map((item, idx) => (
                  <div key={idx} className={`menu-row ${cart.find(i => i.name === item.name) ? 'selected' : ''}`}>
                    <div className="item-info">
                      <strong>{item.name}</strong>
                      <p>{item.category}</p>
                    </div>
                    <div className="item-price">₹{(item.price * 85).toLocaleString()}</div>
                    <button className="add-item-btn" onClick={() => toggleCartItem(item)}>
                      {cart.find(i => i.name === item.name) ? 'REMOVE' : 'ADD'}
                    </button>
                  </div>
                ))}
              </div>

              <button className="primary-action-btn mt-2" onClick={() => onConfirm({ formData, cart, total, mode })}>
                {mode === 'dine' ? 'CONFIRM RESERVATION & ORDER' : `BOOK ${mode.toUpperCase()} ORDER`}
              </button>
            </div>
          )}

          {step === 'full' && (
            <div className="capacity-error">
              <div className="error-icon"><i className="ph-fill ph-warning-octagon"></i></div>
              <h3>Restaurant at Capacity</h3>
              <p>We're sorry, {restaurant.name} cannot accommodate a party of {formData.persons} at this time.</p>
              <button className="secondary-action-btn mt-2" onClick={() => setStep('reserve')}>TRY AGAIN</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .res-hero-overlay {
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
        .res-hero-card {
          background: white;
          width: 100%;
          max-width: 600px;
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
          padding: 1.5rem 2rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .res-mini { display: flex; gap: 1rem; align-items: center; }
        .res-avatar {
          width: 48px; height: 48px;
          background: var(--accent-bg); color: var(--accent);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
        }
        .cart-summary { text-align: right; }
        .cart-summary .label { display: block; font-size: 0.65rem; color: #64748b; font-weight: 700; text-transform: uppercase; }
        .cart-summary .value { font-size: 1.25rem; font-weight: 800; color: var(--accent); }

        .hero-body { padding: 2rem; }
        .form-title { display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem; }
        .form-title i { font-size: 1.5rem; color: var(--accent); }
        .form-title h4 { margin: 0; font-size: 1.1rem; }
        .form-title p { margin: 0; font-size: 0.85rem; color: #64748b; }

        .input-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .input-group.full { grid-column: span 2; }
        .input-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; margin-bottom: 0.5rem; }
        .input-group input { 
          width: 100%; padding: 0.75rem 1rem; border: 1px solid #e2e8f0; 
          border-radius: 10px; background: #f8fafc; font-family: inherit; font-size: 0.9rem;
        }

        .persons-selector { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .persons-selector button {
          flex: 1; min-width: 45px; padding: 0.5rem; border: 1px solid #e2e8f0;
          background: #f8fafc; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s;
        }
        .persons-selector button.active { background: var(--accent); color: white; border-color: var(--accent); }

        .menu-list-compact {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 2rem;
          padding-right: 0.5rem;
        }
        .menu-row {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem; border-bottom: 1px solid #f1f5f9; transition: 0.2s;
        }
        .menu-row.selected { background: #f0f9ff; border-radius: 12px; border-bottom-color: transparent; }
        .item-info { flex: 1; }
        .item-info p { font-size: 0.7rem; color: #64748b; margin: 0; }
        .item-price { font-weight: 700; color: #1e293b; font-size: 0.9rem; }
        .add-item-btn { 
          padding: 0.5rem 0.75rem; border: none; border-radius: 8px; 
          font-weight: 700; font-size: 0.75rem; cursor: pointer;
          background: #f1f5f9; color: #475569;
        }
        .menu-row.selected .add-item-btn { background: #fee2e2; color: #ef4444; }

        .capacity-error { text-align: center; padding: 2rem 0; }
        .error-icon { font-size: 4rem; color: #ef4444; margin-bottom: 1.5rem; }
        .error-icon i { animation: shake 0.5s ease; }

        .primary-action-btn {
          width: 100%; padding: 1.1rem; background: var(--accent); color: white;
          border: none; border-radius: 14px; font-weight: 800; letter-spacing: 0.5px;
          cursor: pointer; transition: 0.2s;
        }
        .primary-action-btn:hover { background: var(--accent-hover); transform: translateY(-2px); }
        .primary-action-btn:disabled { background: #cbd5e1; cursor: not-allowed; transform: none; }

        .secondary-action-btn {
          padding: 0.75rem 1.5rem; background: transparent; border: 2px solid #e2e8f0;
          border-radius: 12px; font-weight: 700; color: #64748b; cursor: pointer;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}
