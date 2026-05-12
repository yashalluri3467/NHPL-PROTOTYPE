"use client";
import React from 'react';

export default function Invoices() {
  const invoices = [
    { id: 'INV-2024-001', date: 'Oct 20, 2024', total: '$290.50', status: 'Paid', items: 3 },
    { id: 'INV-2024-002', date: 'Oct 15, 2024', total: '$120.00', status: 'Pending', items: 1 }
  ];

  return (
    <div className="invoices-page">
      <div className="section-header">
        <h2 className="section-title">Invoices & Receipts</h2>
        <p className="section-subtitle">View and download your transaction history.</p>
      </div>

      <div className="invoices-grid">
        {invoices.map(inv => (
          <div key={inv.id} className="official-card invoice-card">
            <div className="inv-header">
              <div className="inv-icon">📄</div>
              <div>
                <p className="inv-id">{inv.id}</p>
                <p className="inv-date">{inv.date}</p>
              </div>
              <span className={`inv-status ${inv.status.toLowerCase()}`}>{inv.status}</span>
            </div>
            
            <div className="inv-body">
              <div className="inv-stat">
                <span>Items</span>
                <b>{inv.items}</b>
              </div>
              <div className="inv-stat">
                <span>Total Amount</span>
                <b>{inv.total}</b>
              </div>
            </div>

            <div className="inv-footer">
              <button className="download-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                PDF Receipt
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SOS Button specifically in Invoice Section as requested */}
      <div className="invoice-safety-cta">
        <div className="safety-info">
          <h4>Need Emergency Support?</h4>
          <p>If you have any issues with your payment or service, use the SOS trigger.</p>
        </div>
        <button className="sos-btn-inline">ACTIVATE SOS</button>
      </div>
    </div>
  );
}
