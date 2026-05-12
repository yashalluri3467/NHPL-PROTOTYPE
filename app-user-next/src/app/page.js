"use client";
import React, { useState, useEffect } from 'react';
import TravelPage from '../components/TravelPage';
import HotelPage from '../components/HotelPage';
import RestaurantPage from '../components/RestaurantPage';
import QuickActionCTA from '../components/QuickActionCTA';
import BookingTimeline from '../components/BookingTimeline';
import CommunicationPanel from '../components/CommunicationPanel';
import LiveMap from '../components/LiveMap';
import UnifiedFolio from '../components/UnifiedFolio';
import MyBookings from '../components/MyBookings';
import Invoices from '../components/Invoices';
import { APP_DATA } from '../data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('travel');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Ranchi');
  const [userProfile, setUserProfile] = useState(null);

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

  const renderContent = () => {
    const props = { selectedCity };
    switch (activeTab) {
      case 'travel': return <TravelPage {...props} />;
      case 'hotel': return <HotelPage {...props} />;
      case 'restaurant': return <RestaurantPage {...props} />;
      case 'bookings': return <MyBookings />;
      case 'invoices': return <Invoices />;
      default: return <TravelPage {...props} />;
    }
  };

  const navItems = [
    { 
      id: 'travel', 
      label: 'Travel & Discovery', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    },
    { 
      id: 'hotel', 
      label: 'Stays & Luxury', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    { 
      id: 'restaurant', 
      label: 'Fine Dining', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-7"/><line x1="3" y1="20" x2="21" y2="20"/></svg>
    },
  ];

  return (
    <div className="app-container">
      {/* Global Indicators */}

      {/* Official Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l.5-4h17l.5 4z"/><path d="M4 21V10"/><path d="M10 21V10"/><path d="M14 21V10"/><path d="M20 21V10"/></svg>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>My Bookings</span>
          </div>
          <div 
            className={`nav-link ${activeTab === 'invoices' ? 'active' : ''}`}
            onClick={() => setActiveTab('invoices')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>Invoices</span>
          </div>
        </div>

        <div className="sidebar-footer" style={{position: 'relative'}}>
          {isUserMenuOpen && (
            <div className="user-popover">
              <div className="nav-link" onClick={() => { setIsProfileModalOpen(true); setIsUserMenuOpen(false); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent)'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--text-muted)'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search experiences..." />
            </div>
          </div>

          <div className="top-actions">
            <div className="action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <div className="notif-badge">3</div>
            </div>
            <button className="premium-action-btn">Upgrade</button>
          </div>
        </header>

        {/* Content Area */}
        <main className="page-content">
          <div className="suggestion-banner">
            <span className="s-label">Smart Suggestions</span>
            <h2 className="s-title">Based on your Netarhat interest...</h2>
            <div className="s-chips">
              <div className="s-chip"><i className="ph ph-car"></i> Book Driver + Guide for Naina Falls</div>
              <div className="s-chip"><i className="ph ph-fork-knife"></i> Reserve Dinner at 8:00 PM</div>
              <div className="s-chip"><i className="ph ph-bed"></i> Book Deluxe Room for night</div>
            </div>
          </div>

          <QuickActionCTA />
          {renderContent()}

          <div className="dashboard-grid" style={{marginTop: '3rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              <BookingTimeline />
              <LiveMap />
            </div>
            <CommunicationPanel />
          </div>
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
