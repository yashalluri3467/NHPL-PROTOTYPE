"use client";
import React, { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import TravelPage from '../components/TravelPage';
import HotelPage from '../components/HotelPage';
import RestaurantPage from '../components/RestaurantPage';
import BookingTimeline from '../components/BookingTimeline';
import CommunicationPanel from '../components/CommunicationPanel';
import LiveMap from '../components/LiveMap';
import MyBookings from '../components/MyBookings';
import Invoices from '../components/Invoices';
import { APP_DATA } from '../data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Ranchi');
  const [userProfile, setUserProfile] = useState(null);
  const [bookings, setBookings] = useState([
    { id: 'BK001', type: 'Travel', title: 'Pickup from Ranchi Airport', date: 'Oct 24, 2024', status: 'Upcoming', price: '$45.00' },
    { id: 'BK002', type: 'Hotel', title: 'NHPL Grand Luxury Ranchi', date: 'Oct 24-25, 2024', status: 'Confirmed', price: '$180.00' },
    { id: 'BK003', type: 'Dining', title: 'Saffron Restaurant', date: 'Oct 24, 2024 (20:00)', status: 'Upcoming', price: '$65.50' }
  ]);

  const addBooking = (booking) => {
    const newBooking = {
      id: `BK${Math.floor(Math.random() * 9000) + 1000}`,
      status: 'Confirmed',
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      ...booking
    };
    setBookings(prev => [newBooking, ...prev]);
  };

  // Load profile from DB
  useEffect(() => {
    fetch('/api/user-profile')
      .then(res => res.json())
      .then(data => setUserProfile(data))
      .catch(err => console.error("Failed to load profile:", err));
  }, []);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/user-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const updated = await response.json();
        setUserProfile(updated);
        setIsProfileModalOpen(false);
      }
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home Page', icon: <i className="ph ph-house"></i> },
    { id: 'travel', label: 'Travel & Discovery', icon: <i className="ph ph-map-trifold"></i> },
    { id: 'hotel', label: 'Stays & Luxury', icon: <i className="ph ph-bed"></i> },
    { id: 'restaurant', label: 'Fine Dining', icon: <i className="ph ph-fork-knife"></i> },
  ];

  const renderContent = () => {
    const props = { selectedCity, addBooking };
    switch (activeTab) {
      case 'home': return <HomePage onNavigate={(tab) => setActiveTab(tab)} selectedCity={selectedCity} addBooking={addBooking} />;
      case 'travel': return <TravelPage {...props} />;
      case 'hotel': return <HotelPage {...props} />;
      case 'restaurant': return <RestaurantPage {...props} />;
      case 'bookings': return <MyBookings bookings={bookings} />;
      case 'invoices': return <Invoices />;
      default: return <HomePage onNavigate={(tab) => setActiveTab(tab)} selectedCity={selectedCity} addBooking={addBooking} />;
    }
  };

  return (
    <div className="app-container">
      {/* Official Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-icon">
            <i className="ph-fill ph-shield-checkered" style={{fontSize: '1.2rem'}}></i>
          </div>
          <div className="brand-text">NHPL<br/><span style={{fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, letterSpacing: '1px'}}>Organization</span></div>
        </div>
        
        <div className="nav-group">
          <p className="nav-label">Main Services</p>
          {navItems.map(item => (
            <div 
              key={item.id} 
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon-wrapper">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

          <p className="nav-label" style={{marginTop: '2rem'}}>Personal</p>
          <div 
            className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <span className="nav-icon-wrapper"><i className="ph ph-calendar-check"></i></span>
            <span>My Bookings</span>
          </div>
          <div 
            className={`nav-link ${activeTab === 'invoices' ? 'active' : ''}`}
            onClick={() => setActiveTab('invoices')}
          >
            <span className="nav-icon-wrapper"><i className="ph ph-receipt"></i></span>
            <span>Invoices</span>
          </div>
        </div>

        <div className="sidebar-footer" style={{position: 'relative'}}>
          {isUserMenuOpen && (
            <div className="user-popover">
              <div className="nav-link" onClick={() => { setIsProfileModalOpen(true); setIsUserMenuOpen(false); }}>
                <i className="ph ph-user-circle-gear"></i>
                <span>Edit Profile</span>
              </div>
            </div>
          )}
          <div className="user-pill" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} style={{cursor: 'pointer'}}>
            <div className="user-avatar">{userProfile?.avatar || APP_DATA.profile.avatar}</div>
            <div style={{overflow: 'hidden'}}>
              <p style={{fontWeight: 600, fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{userProfile?.name || APP_DATA.profile.name}</p>
              <p style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>{userProfile?.membership || APP_DATA.profile.membership}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Top Action Bar */}
        <header className="top-bar">
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flex: 1}}>
            <div className="city-selector-wrapper">
              <i className="ph-fill ph-map-pin" style={{color: 'var(--accent)'}}></i>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="city-selector"
              >
                {APP_DATA.cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div className="search-wrapper" style={{maxWidth: '400px'}}>
              <i className="ph ph-magnifying-glass" style={{color: 'var(--text-muted)'}}></i>
              <input type="text" placeholder="Search experiences..." />
            </div>
          </div>

          <div className="top-actions">
            <div className="action-icon">
              <i className="ph ph-bell" style={{fontSize: '1.25rem'}}></i>
              <div className="notif-badge">3</div>
            </div>
            <button className="premium-action-btn">
              <i className="ph-fill ph-crown"></i>
              Upgrade
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="page-content">
          {renderContent()}
        </main>
      </div>

      {/* Profile Edit Modal */}
      {isProfileModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Professional Profile</h2>
              <button className="close-btn" onClick={() => setIsProfileModalOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleSaveProfile} style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1}}>
              <div className="modal-body">
                <div className="profile-grid">
                  <div className="photo-upload-zone">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem', color: 'var(--accent)'}}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <p style={{fontSize: '0.85rem', fontWeight: 600}}>Upload Identity Photo</p>
                  </div>
                  
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="name" type="text" defaultValue={userProfile?.name} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" defaultValue={userProfile?.email} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+91 00000 00000" defaultValue={userProfile?.phone} />
                  </div>
                  <div className="form-group">
                    <label>Government ID (Aadhar/PAN)</label>
                    <input name="gov_id" type="text" placeholder="XXXX-XXXX-XXXX" defaultValue={userProfile?.gov_id} />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input name="age" type="number" defaultValue={userProfile?.age} />
                  </div>
                  <div className="form-group">
                    <label>Sex</label>
                    <select name="sex" defaultValue={userProfile?.sex}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nationality</label>
                    <input name="nationality" type="text" defaultValue={userProfile?.nationality || 'Indian'} />
                  </div>
                  <div className="form-group full">
                    <label>Residential Address</label>
                    <textarea name="address" rows="3" defaultValue={userProfile?.address}></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="nav-link" style={{margin: 0, padding: '0.6rem 1.25rem'}} onClick={() => setIsProfileModalOpen(false)}>Cancel</button>
                <button type="submit" className="premium-action-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
