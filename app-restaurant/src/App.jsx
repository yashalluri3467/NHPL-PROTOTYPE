import React, { useState } from 'react';
import './App.css';

const INITIAL_MENU_DATA = [
  { id: 1, name: 'Truffle Mushroom Risotto', category: 'Main Course', price: 850, desc: 'Creamy Arborio rice with wild mushrooms and black truffle oil.', diet: 'veg', prepTime: '20 min' },
  { id: 2, name: 'Pan-Seared Salmon', category: 'Main Course', price: 1250, desc: 'Fresh Atlantic salmon with asparagus and lemon butter sauce.', diet: 'non-veg', prepTime: '15 min' },
  { id: 3, name: 'Burrata Salad', category: 'Starters', price: 650, desc: 'Creamy burrata cheese with heirloom tomatoes and pesto.', diet: 'veg', prepTime: '10 min' },
  { id: 4, name: 'Lamb Rogan Josh', category: 'Indian', price: 950, desc: 'Traditional slow-cooked lamb in a rich aromatic gravy.', diet: 'non-veg', prepTime: '30 min' },
  { id: 5, name: 'Saffron Panna Cotta', category: 'Desserts', price: 450, desc: 'Silky cream infused with premium saffron and pistachios.', diet: 'veg', prepTime: '10 min' },
  { id: 6, name: 'Old Fashioned Burger', category: 'Main Course', price: 750, desc: 'Angus beef patty, cheddar, caramelized onions, and house sauce.', diet: 'non-veg', prepTime: '15 min' },
];

function App() {
  const [activeView, setActiveView] = useState('menu');
  const [activeMode, setActiveMode] = useState('dine-in');
  const [menu, setMenu] = useState(INITIAL_MENU_DATA);

  const [newItem, setNewItem] = useState({
    name: '', category: 'Main Course', price: '', desc: '', diet: 'veg', prepTime: ''
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseInt(newItem.price)
    };
    setMenu([item, ...menu]);
    setNewItem({ name: '', category: 'Main Course', price: '', desc: '', diet: 'veg', prepTime: '' });
  };


  const Sidebar = () => (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <i className="ph ph-fork-knife"></i>
          <span>NHPL EATS</span>
        </div>
      </div>
      <div className="sidebar-nav">
        <p className="nav-label">Operations</p>
        <div className={`nav-item ${activeView === 'menu' ? 'active' : ''}`} onClick={() => setActiveView('menu')}>
          <i className="ph ph-book-open"></i>
          <span>Digital Menu</span>
        </div>
        <div className={`nav-item ${activeView === 'orders' ? 'active' : ''}`} onClick={() => setActiveView('orders')}>
          <i className="ph ph-receipt"></i>
          <span>Live Orders</span>
        </div>
        <div className={`nav-item ${activeView === 'tables' ? 'active' : ''}`} onClick={() => setActiveView('tables')}>
          <i className="ph ph-grid-four"></i>
          <span>Table Map</span>
        </div>
        
        <p className="nav-label mt-2">Production</p>
        <div className={`nav-item ${activeView === 'kitchen' ? 'active' : ''}`} onClick={() => setActiveView('kitchen')}>
          <i className="ph ph-fire"></i>
          <span>Kitchen Display</span>
        </div>
        <div className={`nav-item ${activeView === 'dispatch' ? 'active' : ''}`} onClick={() => setActiveView('dispatch')}>
          <i className="ph ph-moped"></i>
          <span>Dispatch Hub</span>
        </div>

        <p className="nav-label mt-2">Management</p>
        <div className={`nav-item ${activeView === 'inventory' ? 'active' : ''}`} onClick={() => setActiveView('inventory')}>
          <i className="ph ph-package"></i>
          <span>Inventory</span>
        </div>
        <div className={`nav-item ${activeView === 'reports' ? 'active' : ''}`} onClick={() => setActiveView('reports')}>
          <i className="ph ph-chart-pie-slice"></i>
          <span>Analytics</span>
        </div>
        <div className={`nav-item ${activeView === 'menu-mgmt' ? 'active' : ''}`} onClick={() => setActiveView('menu-mgmt')}>
          <i className="ph ph-list-plus"></i>
          <span>Menu Mgmt</span>
        </div>
      </div>
    </div>
  );

  const Topbar = () => (
    <div className="topbar">
      <div className="mode-selector">
        <button className={`mode-btn ${activeMode === 'dine-in' ? 'active' : ''}`} onClick={() => setActiveMode('dine-in')}>Dine-in</button>
        <button className={`mode-btn ${activeMode === 'takeaway' ? 'active' : ''}`} onClick={() => setActiveMode('takeaway')}>Takeaway</button>
        <button className={`mode-btn ${activeMode === 'delivery' ? 'active' : ''}`} onClick={() => setActiveMode('delivery')}>Delivery</button>
      </div>
      <div className="topbar-actions">
        <button className="primary-btn">
          <i className="ph ph-plus"></i> New Order
        </button>
      </div>
    </div>
  );

  const MenuView = () => (
    <div className="view-section active">
      <div className="page-header">
        <div>
          <h2>Digital Menu</h2>
          <p>Browse our curated selection of gourmet dishes.</p>
        </div>
        <div className="search-bar-mock secondary-btn" style={{width: '300px', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <i className="ph ph-magnifying-glass"></i>
          <span style={{color: 'var(--text-muted)'}}>Search dishes, categories...</span>
        </div>
      </div>

      <div className="menu-grid">
        {menu.map(item => (
          <div key={item.id} className="menu-card glass-panel">
            <div className="menu-img" style={{background: `linear-gradient(45deg, var(--bg-app), var(--border-color))`}}></div>
            <div className="menu-details">
              <div className="menu-header">
                <span className="menu-title">{item.name}</span>
                <span className="menu-price">₹{item.price}</span>
              </div>
              <p className="menu-desc">{item.desc}</p>
              <div className="menu-footer">
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  <span className={`diet-tag ${item.diet}`}>{item.diet}</span>
                  <span style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>
                    <i className="ph ph-clock" style={{marginRight: '0.2rem'}}></i>
                    {item.prepTime}
                  </span>
                </div>
                <button className="add-btn">
                  <i className="ph ph-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MenuMgmtView = () => (
    <div className="view-section active">
      <div className="page-header">
        <div>
          <h2>Menu Management</h2>
          <p>Create and refine your restaurant's digital offerings.</p>
        </div>
      </div>

      <div className="dashboard-split" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
        <div className="glass-panel">
          <div className="panel-header">
            <h3>Add New Dish</h3>
          </div>
          <form className="modern-form" onSubmit={handleAddItem}>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '1.25rem'}}>
              <div style={{flex: 1}}>
                <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Dish Name</label>
                <input type="text" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)'}} placeholder="e.g. Garlic Butter Prawns" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} required />
              </div>
              <div style={{width: '120px'}}>
                <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Price (₹)</label>
                <input type="number" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)'}} placeholder="0.00" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} required />
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '1.25rem'}}>
              <div style={{flex: 1}}>
                <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Category</label>
                <select style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)'}} value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})}>
                  <option>Starters</option>
                  <option>Main Course</option>
                  <option>Indian</option>
                  <option>Desserts</option>
                  <option>Beverages</option>
                </select>
              </div>
              <div style={{flex: 1}}>
                <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Prep Time (mins)</label>
                <input type="text" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)'}} placeholder="e.g. 15 min" value={newItem.prepTime} onChange={e => setNewItem({...newItem, prepTime: e.target.value})} />
              </div>
            </div>
            <div style={{marginBottom: '1.25rem'}}>
              <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Description</label>
              <textarea rows="3" style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontFamily: 'inherit'}} placeholder="Briefly describe the ingredients and flavor profile..." value={newItem.desc} onChange={e => setNewItem({...newItem, desc: e.target.value})}></textarea>
            </div>
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem'}}>Dietary Type</label>
              <div className="mode-selector" style={{width: 'fit-content'}}>
                <button type="button" className={`mode-btn ${newItem.diet === 'veg' ? 'active' : ''}`} onClick={() => setNewItem({...newItem, diet: 'veg'})}>Veg</button>
                <button type="button" className={`mode-btn ${newItem.diet === 'non-veg' ? 'active' : ''}`} onClick={() => setNewItem({...newItem, diet: 'non-veg'})}>Non-Veg</button>
              </div>
            </div>
            <button type="submit" className="primary-btn" style={{width: '100%', justifyContent: 'center'}}>
              <i className="ph ph-plus-circle"></i> Add Dish to Menu
            </button>
          </form>
        </div>

        <div className="glass-panel">
          <div className="panel-header">
            <h3>Live Menu List</h3>
          </div>
          <div className="table-responsive">
            <table className="modern-table" style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr>
                  <th style={{textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase'}}>Dish</th>
                  <th style={{textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase'}}>Category</th>
                  <th style={{textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase'}}>Price</th>
                  <th style={{textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map(item => (
                  <tr key={item.id}>
                    <td style={{padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600'}}>{item.name}</td>
                    <td style={{padding: '1rem', borderBottom: '1px solid var(--border-color)'}}><span style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>{item.category}</span></td>
                    <td style={{padding: '1rem', borderBottom: '1px solid var(--border-color)'}}>₹{item.price}</td>
                    <td style={{padding: '1rem', borderBottom: '1px solid var(--border-color)'}}>
                      <button className="secondary-btn" style={{padding: '0.4rem', borderRadius: '8px'}} onClick={() => setMenu(menu.filter(m => m.id !== item.id))}>
                        <i className="ph ph-trash" style={{color: 'var(--status-danger)'}}></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="view-container">
          {activeView === 'menu' && <MenuView />}
          {activeView === 'menu-mgmt' && <MenuMgmtView />}
          {activeView !== 'menu' && activeView !== 'menu-mgmt' && (
            <div className="glass-panel" style={{padding: '4rem', textAlign: 'center'}}>
              <i className="ph ph-hammer" style={{fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '1rem'}}></i>
              <h3>{activeView.charAt(0).toUpperCase() + activeView.slice(1)} View</h3>
              <p>This module is currently being optimized for unified operations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
