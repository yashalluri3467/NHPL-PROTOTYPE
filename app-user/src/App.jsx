import React, { useState } from 'react';
import './App.css';
import TravelPage from './components/TravelPage';
import HotelPage from './components/HotelPage';
import RestaurantPage from './components/RestaurantPage';
import { APP_DATA } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('travel');
  const [showProfile, setShowProfile] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'travel': return <TravelPage />;
      case 'hotel': return <HotelPage />;
      case 'restaurant': return <RestaurantPage />;
      default: return <TravelPage />;
    }
  };

  return (
    <div className="app-layout">
      {/* Navigation */}
      <nav className="glass-card main-nav">
        <div className="nav-container">
          <div className="logo-section">
            <span className="brand-logo">NHPL</span>
            <span className="brand-name">SuperApp</span>
          </div>
          
          <div className="nav-tabs">
            <button 
              className={`nav-item ${activeTab === 'travel' ? 'active' : ''}`}
              onClick={() => setActiveTab('travel')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              <span>Travel</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'hotel' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotel')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Hotel</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'restaurant' ? 'active' : ''}`}
              onClick={() => setActiveTab('restaurant')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
              <span>Dining</span>
            </button>
          </div>

          <div className="profile-section" onClick={() => setShowProfile(!showProfile)}>
            <div className="avatar">{APP_DATA.profile.avatar}</div>
          </div>
        </div>
      </nav>

      {/* Profile Sidebar */}
      <div className={`profile-drawer glass-card ${showProfile ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="avatar large">{APP_DATA.profile.avatar}</div>
          <h2>{APP_DATA.profile.name}</h2>
          <p className="badge">{APP_DATA.profile.membership}</p>
        </div>
        <div className="drawer-stats">
          <div className="stat">
            <span className="val">{APP_DATA.profile.recentTrips}</span>
            <span className="lbl">Trips</span>
          </div>
          <div className="stat">
            <span className="val">{APP_DATA.profile.totalSpent}</span>
            <span className="lbl">Spent</span>
          </div>
        </div>
        <div className="drawer-menu">
          <button className="menu-item">My Bookings</button>
          <button className="menu-item">Payment Methods</button>
          <button className="menu-item">Settings</button>
          <button className="menu-item danger">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <main className={`content-area ${showProfile ? 'shifted' : ''}`}>
        {renderContent()}
      </main>

      <footer className="page-footer">
        <p className="text-muted">© 2026 NHPL SuperApp Network. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
