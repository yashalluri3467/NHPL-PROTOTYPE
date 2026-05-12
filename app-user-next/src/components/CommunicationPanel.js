"use client";
import React, { useState } from 'react';

export default function CommunicationPanel() {
  const [activeChat, setActiveChat] = useState('B1'); // Default to first booking chat

  const chats = [
    {
      id: 'B1',
      title: 'Airport Transfer Group',
      participants: 'You, Rahul (Driver), Sneha (Guide)',
      lastMsg: 'I am arriving at Terminal 1 shortly.',
      time: 'Just now'
    },
    {
      id: 'B2',
      title: 'NHPL Grand Concierge',
      participants: 'You, Reception, Room Service',
      lastMsg: 'Your room upgrade is confirmed.',
      time: '14:20'
    }
  ];

  return (
    <div className="official-card comms-card">
      <div className="card-header">
        <h3 className="card-title">In-app Communication</h3>
        <button className="voice-call-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Quick Call
        </button>
      </div>

      <div className="chat-tabs">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            className={`chat-tab ${activeChat === chat.id ? 'active' : ''}`}
            onClick={() => setActiveChat(chat.id)}
          >
            <div className="chat-avatar-stack">
              <div className="mini-avatar">U</div>
              <div className="mini-avatar accent">P</div>
            </div>
            <div className="chat-preview">
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="chat-name">{chat.title}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <p className="chat-msg">{chat.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-wrapper">
        <input type="text" placeholder="Type a message to the group..." />
        <button className="send-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  );
}
