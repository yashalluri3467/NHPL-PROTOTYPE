"use client";
import React from 'react';

export default function LocationDetailHero({ location, onClose, onBookRide }) {
  return (
    <div className="detail-overlay">
      <div className="detail-card">
        <div className="close-hero" onClick={onClose}>✕</div>
        
        <div className="detail-hero-image">
          <img src={location.image} alt={location.name} />
          <div className="hero-badge">{location.state}</div>
          <div className="hero-title-overlay">
            <h1>{location.name}</h1>
            <p><i className="ph ph-map-pin"></i> {location.city}, Jharkhand</p>
          </div>
        </div>

        <div className="detail-body">
          <div className="content-layout">
            <div className="main-info">
              <section className="info-block">
                <h3>About this Destination</h3>
                <p>{location.desc || "A breathtaking landmark in the heart of Jharkhand, offering serene views and a glimpse into the regional heritage. Perfect for nature lovers and explorers seeking tranquility."}</p>
              </section>

              <section className="info-block mt-2">
                <h3>Why Visit?</h3>
                <ul className="perks-list">
                  <li><i className="ph ph-sparkle"></i> Stunning panoramic views</li>
                  <li><i className="ph ph-camera"></i> Photogenic landscapes</li>
                  <li><i className="ph ph-footprints"></i> Peaceful walking trails</li>
                  <li><i className="ph ph-leaf"></i> Fresh mountain air</li>
                </ul>
              </section>
            </div>

            <div className="side-info">
              <div className="stat-box">
                <label>Best Time</label>
                <strong>Oct - March</strong>
              </div>
              <div className="stat-box">
                <label>Ideal For</label>
                <strong>4-6 Hours</strong>
              </div>
              <div className="stat-box">
                <label>Entry Fee</label>
                <strong>Free / Nominal</strong>
              </div>

              <button className="primary-action-btn mt-2" onClick={() => onBookRide(location)}>
                BOOK RIDE TO THIS SPOT
              </button>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <div className="safety-badge">
            <i className="ph-fill ph-shield-check"></i>
            NHPL Verified Destination
          </div>
        </div>
      </div>

      <style jsx>{`
        .detail-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }
        .detail-card {
          background: white;
          width: 100%;
          max-width: 900px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5);
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .close-hero {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          cursor: pointer; font-weight: bold; color: white;
          z-index: 20;
          transition: 0.2s;
        }
        .close-hero:hover { background: rgba(255, 255, 255, 0.3); transform: rotate(90deg); }

        .detail-hero-image {
          height: 380px;
          position: relative;
        }
        .detail-hero-image img {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .hero-badge {
          position: absolute;
          top: 1.5rem; left: 1.5rem;
          background: var(--accent);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .hero-title-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 3rem 2rem 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          color: white;
        }
        .hero-title-overlay h1 { font-size: 2.5rem; margin: 0; }
        .hero-title-overlay p { opacity: 0.8; margin: 0.5rem 0 0; display: flex; align-items: center; gap: 0.5rem; }

        .detail-body { padding: 2.5rem; }
        .content-layout { display: grid; grid-template-columns: 1fr 280px; gap: 3rem; }
        
        .info-block h3 { font-size: 1.1rem; margin-bottom: 1rem; color: #1e293b; }
        .info-block p { color: #64748b; line-height: 1.7; font-size: 0.95rem; }
        
        .perks-list { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .perks-list li { font-size: 0.9rem; color: #475569; font-weight: 500; }

        .side-info {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .stat-box label { display: block; font-size: 0.7rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem; }
        .stat-box strong { font-size: 1rem; color: #1e293b; }

        .primary-action-btn {
          background: var(--accent);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 14px;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .primary-action-btn:hover { background: var(--accent-hover); transform: translateY(-2px); }

        .detail-footer {
          padding: 1rem 2.5rem;
          background: #f1f5f9;
          border-top: 1px solid #e2e8f0;
        }
        .safety-badge {
          display: flex; align-items: center; gap: 0.5rem;
          color: #059669; font-size: 0.75rem; font-weight: 700;
        }

        @media (max-width: 768px) {
          .content-layout { grid-template-columns: 1fr; gap: 2rem; }
          .detail-hero-image { height: 250px; }
          .hero-title-overlay h1 { font-size: 1.75rem; }
          .detail-overlay { padding: 1rem; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
