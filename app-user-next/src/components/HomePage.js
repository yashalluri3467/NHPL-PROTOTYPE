"use client";
import React, { useState } from 'react';
import { APP_DATA } from '../data';
import QuickActionCTA from './QuickActionCTA';
import RideBookingHero from './RideBookingHero';
import HotelBookingHero from './HotelBookingHero';
import RestaurantBookingHero from './RestaurantBookingHero';
import OrderTracker from './OrderTracker';

export default function HomePage({ selectedCity, onNavigate, addBooking }) {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [resMode, setResMode] = useState('dine');
  const [activeOrder, setActiveOrder] = useState(null);

  // Filter data for the portfolio
  const cityLocations = APP_DATA.locations.filter(l => l.city === selectedCity).slice(0, 3);
  const cityHotels = APP_DATA.hotels.filter(h => h.city === selectedCity).slice(0, 3);
  const cityRestaurants = APP_DATA.restaurants.filter(r => r.city === selectedCity).slice(0, 3);
  const cityDrivers = APP_DATA.drivers.filter(d => d.city === selectedCity).slice(0, 3);

  return (
    <div className="home-portfolio">
      {/* Hero Section with Suggestions */}
      <div className="suggestion-banner">
        <span className="s-label">Smart Suggestions</span>
        <h2 className="s-title">Based on your {selectedCity} interest...</h2>
        <div className="s-chips">
          <div className="s-chip" onClick={() => onNavigate('travel')}><i className="ph-fill ph-car"></i> Book Driver + Guide for exploration</div>
          <div className="s-chip" onClick={() => onNavigate('restaurant')}><i className="ph-fill ph-fork-knife"></i> Reserve Dinner at Signature Dining</div>
          <div className="s-chip" onClick={() => onNavigate('hotel')}><i className="ph-fill ph-bed"></i> Book Deluxe Room for the night</div>
        </div>
      </div>

      <QuickActionCTA />

      {/* Portfolio Sections */}
      {/* City Portfolio Section */}
      <div className="portfolio-section full-width mt-2">
        <div className="section-header-compact">
          <h3>{selectedCity} City Portfolio</h3>
          <button className="text-btn" onClick={() => onNavigate('travel')}>View Full Gallery</button>
        </div>
        <div className="portfolio-gallery-rich">
          {cityLocations.map(loc => (
            <div key={loc.id} className="portfolio-item-card">
              <div className="card-image">
                <img src={loc.image} alt={loc.name} />
                <div className="badge-tag">{loc.state}</div>
              </div>
              <div className="card-content">
                <h4>{loc.name}</h4>
                <p className="description">{loc.desc}</p>
                <div className="card-footer">
                  <span className="info-badge"><i className="ph ph-info"></i> Official Spot</span>
                  <button className="action-link" onClick={() => onNavigate('travel')}>Explore Spot</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {/* Chauffeurs */}
        <div className="portfolio-section">
          <div className="section-header-compact">
            <h3>Premium Chauffeurs</h3>
            <button className="text-btn" onClick={() => onNavigate('travel')}>View Drivers</button>
          </div>
          <div className="driver-list-compact">
            {cityDrivers.map(driver => (
              <div key={driver.id} className="mini-driver-card">
                <div className="avatar-mini">{driver.name[0]}</div>
                <div className="d-info">
                  <strong>{driver.name}</strong>
                  <span>{driver.car} • {driver.rating} <i className="ph-fill ph-star"></i></span>
                </div>
                <button className="icon-btn-sm" onClick={() => setSelectedDriver(driver)}><i className="ph ph-plus"></i></button>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Stays Summary */}
        <div className="portfolio-section">
          <div className="section-header-compact">
            <h3>Luxury Stays</h3>
            <button className="text-btn" onClick={() => onNavigate('hotel')}>View All</button>
          </div>
          <div className="mini-stays-vertical">
            {cityHotels.slice(0, 2).map(hotel => (
              <div key={hotel.id} className="mini-stay-item" onClick={() => setSelectedHotel(hotel)}>
                <img src={hotel.image} alt={hotel.name} />
                <div>
                  <strong>{hotel.name}</strong>
                  <p>{hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fine Dining Portfolio */}
        <div className="portfolio-section full-width">
          <div className="section-header-compact">
            <h3>Fine Dining & Culinary</h3>
            <button className="text-btn" onClick={() => onNavigate('restaurant')}>View Menu</button>
          </div>
          <div className="restaurant-row-compact">
            {cityRestaurants.map(res => (
              <div key={res.id} className="mini-res-card">
                <div className="res-img-mini"><img src={res.image} alt={res.name} /></div>
                <div className="r-info">
                  <h4>{res.name}</h4>
                  <p>{res.cuisine} • {res.rating} <i className="ph-fill ph-star"></i></p>
                </div>
                <div className="res-actions-mini">
                  <button className="res-btn-sm" onClick={() => { setResMode('dine'); setSelectedRestaurant(res); }}>RESERVE</button>
                  <button className="res-btn-sm order" onClick={() => { setResMode('takeaway'); setSelectedRestaurant(res); }}>ORDER</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Hero Overlays */}
      {selectedDriver && (
        <RideBookingHero 
          driver={selectedDriver} 
          onClose={() => setSelectedDriver(null)} 
          onConfirm={() => {
            addBooking({ type: 'Travel', title: `Chauffeur Service: ${selectedDriver.name}`, price: '₹1,850' });
            setSelectedDriver(null);
          }} 
        />
      )}
      {selectedHotel && (
        <HotelBookingHero 
          hotel={selectedHotel} 
          onClose={() => setSelectedHotel(null)} 
          onConfirm={() => {
            addBooking({ type: 'Hotel', title: `Stay at ${selectedHotel.name}`, price: selectedHotel.price });
            setSelectedHotel(null);
          }} 
        />
      )}
      {selectedRestaurant && (
        <RestaurantBookingHero 
          restaurant={selectedRestaurant} 
          mode={resMode} 
          onClose={() => setSelectedRestaurant(null)} 
          onConfirm={(order) => {
            addBooking({ 
              type: resMode === 'dine' ? 'Dining' : 'Takeaway', 
              title: `${selectedRestaurant.name} - ${resMode.toUpperCase()}`,
              price: order.total ? `₹${(order.total * 85).toLocaleString()}` : 'TBD'
            });
            if (resMode !== 'dine') {
              setActiveOrder({
                restaurantName: selectedRestaurant.name,
                ...order
              });
            }
            setSelectedRestaurant(null);
          }} 
        />
      )}

      {activeOrder && (
        <div className="active-order-overlay">
          <OrderTracker 
            order={activeOrder} 
            onComplete={() => setActiveOrder(null)} 
          />
        </div>
      )}

      <style jsx>{`
        .home-portfolio {
          animation: fadeIn 0.4s ease;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .portfolio-section.full-width {
          grid-column: span 2;
        }
        .section-header-compact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .section-header-compact h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
        }
        .text-btn {
          background: none; border: none; color: var(--accent);
          font-weight: 600; font-size: 0.85rem; cursor: pointer;
        }
        
        .portfolio-gallery-rich {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .portfolio-item-card {
          background: white; border: 1px solid #e2e8f0; border-radius: 20px;
          overflow: hidden; box-shadow: var(--shadow-sm); transition: 0.3s;
        }
        .portfolio-item-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .card-image { position: relative; height: 160px; }
        .card-image img { width: 100%; height: 100%; object-fit: cover; }
        .badge-tag {
          position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.9);
          padding: 4px 10px; border-radius: 20px; font-size: 0.65rem; font-weight: 800;
        }
        .card-content { padding: 1.25rem; }
        .card-content h4 { margin: 0 0 0.5rem 0; font-size: 1rem; color: #1e293b; }
        .card-content .description { 
          font-size: 0.8rem; color: #64748b; margin-bottom: 1rem; 
          line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .card-footer {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid #f1f5f9; pt: 0.75rem; margin-top: 0.5rem;
        }
        .info-badge { font-size: 0.65rem; color: #94a3b8; display: flex; align-items: center; gap: 4px; }
        .action-link { 
          background: none; border: none; color: var(--accent); font-weight: 700; 
          font-size: 0.75rem; cursor: pointer; padding: 0;
        }

        .driver-list-compact {
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .mini-driver-card {
          display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
          background: white; border: 1px solid #e2e8f0; border-radius: 12px;
        }
        .avatar-mini {
          width: 32px; height: 32px; background: #f1f5f9; border-radius: 8px;
          display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent);
        }
        .d-info { flex: 1; }
        .d-info strong { display: block; font-size: 0.85rem; }
        .d-info span { font-size: 0.7rem; color: #64748b; }
        .icon-btn-sm { 
          width: 28px; height: 28px; border-radius: 50%; border: none; 
          background: var(--accent-bg); color: var(--accent); cursor: pointer;
        }

        .mini-stays-vertical { display: flex; flex-direction: column; gap: 0.75rem; }
        .mini-stay-item {
          display: flex; gap: 1rem; align-items: center; padding: 0.5rem;
          background: white; border: 1px solid #e2e8f0; border-radius: 12px; cursor: pointer;
        }
        .mini-stay-item img { width: 50px; height: 50px; border-radius: 8px; object-fit: cover; }
        .mini-stay-item strong { display: block; font-size: 0.85rem; }
        .mini-stay-item p { font-size: 0.75rem; color: var(--accent); margin: 0; font-weight: 700; }

        .restaurant-row-compact {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
        }
        .mini-res-card {
          display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
          background: #f8fafc; border-radius: 12px;
        }
        .res-img-mini img { width: 45px; height: 45px; border-radius: 8px; object-fit: cover; }
        .r-info h4 { margin: 0 0 0.2rem 0; font-size: 0.85rem; }
        .r-info p { margin: 0; font-size: 0.7rem; color: #64748b; }
        .res-actions-mini {
          margin-left: auto; display: flex; gap: 4px;
        }
        .res-btn-sm {
          padding: 4px 8px; border: 1px solid var(--accent);
          color: var(--accent); background: white; border-radius: 6px; 
          font-size: 0.65rem; font-weight: 800; cursor: pointer; transition: 0.2s;
        }
        .res-btn-sm:hover { background: var(--accent); color: white; }
        .res-btn-sm.order {
          background: #f1f5f9; border-color: #e2e8f0; color: #475569;
        }
        .res-btn-sm.order:hover { background: #e2e8f0; }

        .active-order-overlay {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 350px;
          z-index: 1000;
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1024px) {
          .portfolio-gallery-rich { grid-template-columns: 1fr 1fr; }
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio-section.full-width { grid-column: span 1; }
          .restaurant-row-compact { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
