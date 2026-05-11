// Data State
let orders = [
  { id: '1024', customer: 'Aryan Sharma', items: ['Truffle Pasta', 'Lime Soda'], total: 850, status: 'preparing', type: 'dine-in', table: 'T4', time: '12:45' },
  { id: '1025', customer: 'Priya Singh', items: ['Wagyu Burger', 'Fries'], total: 1200, status: 'ready', type: 'takeaway', time: '13:05' },
  { id: '1026', customer: 'Rohan Das', items: ['Pepperoni Pizza'], total: 650, status: 'on-the-way', type: 'delivery', rider: 'John D.', time: '13:15' }
];

let tables = [
  { id: 'T1', num: '1', seats: 2, status: 'occupied', guest: 'Karan J.', time: '45m' },
  { id: 'T2', num: '2', seats: 2, status: 'available' },
  { id: 'T3', num: '3', seats: 4, status: 'reserved', guest: 'Mehta Party', time: '19:00' },
  { id: 'T4', num: '4', seats: 4, status: 'occupied', guest: 'Aryan S.', time: '15m' },
  { id: 'T5', num: '5', seats: 6, status: 'dirty' },
  { id: 'T6', num: '6', seats: 2, status: 'available' }
];

let riders = [
  { id: 'R1', name: 'John D.', status: 'online', activeOrders: 1, rating: 4.8 },
  { id: 'R2', name: 'Sarah K.', status: 'online', activeOrders: 0, rating: 4.9 },
  { id: 'R3', name: 'Mike R.', status: 'offline', activeOrders: 0, rating: 4.5 }
];

let menuItems = [
  { id: 'M1', name: 'Truffle Pasta', price: 650, category: 'Main Course', status: 'available' },
  { id: 'M2', name: 'Wagyu Burger', price: 950, category: 'Main Course', status: 'available' },
  { id: 'M3', name: 'Lime Soda', price: 150, category: 'Beverages', status: 'available' },
  { id: 'M4', name: 'Fries', price: 200, category: 'Sides', status: 'available' },
  { id: 'M5', name: 'Water Bottle', price: 40, category: 'Beverages', status: 'available' },
  { id: 'M6', name: 'Soft Drink', price: 60, category: 'Beverages', status: 'available' }
];

let inventoryItems = [
  { id: 'I1', name: 'Wagyu Beef', stock: 12, unit: 'kg', lowStock: 5, icon: 'ph-steak' },
  { id: 'I2', name: 'Truffle Oil', stock: 4, unit: 'liters', lowStock: 2, icon: 'ph-drop' },
  { id: 'I3', name: 'Pasta Flour', stock: 45, unit: 'kg', lowStock: 10, icon: 'ph-grains' }
];

let notifications = [];
let currentCart = [];

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const view = item.getAttribute('data-view');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
  });
});

// View Renderers
function refreshAllViews() {
  renderLiveOrders();
  renderTableGrid();
  renderKitchenQueue();
  renderDispatch();
  renderMenuManagement();
  renderInventory();
}

function renderLiveOrders() {
  const container = document.getElementById('live-orders-container');
  if (!container) return;
  container.innerHTML = orders.map(order => `
    <div class="order-card" onclick="showOrderFolio('${order.id}')">
      <div class="order-header">
        <span class="order-number">#${order.id}</span>
        <span class="order-type">${order.type}</span>
      </div>
      <div class="order-customer">
        <strong>${order.customer}</strong>
        <span class="text-muted">${order.type === 'dine-in' ? order.table : order.time}</span>
      </div>
      <div class="order-items">
        ${order.items.map(item => `<div class="order-item"><span>${item}</span><span>1x</span></div>`).join('')}
      </div>
      <div class="order-footer">
        <span class="status-badge ${order.status}">${order.status.replace('-', ' ')}</span>
        <strong>₹${order.total}</strong>
        ${order.source === 'Portal' ? '<span class="status-badge ready" style="background:#fdf2f2; color:#991b1b; font-size:0.6rem;">PORTAL</span>' : ''}
      </div>
    </div>
  `).join('');
}

function renderTableGrid() {
  const grid = document.getElementById('table-grid');
  if (!grid) return;
  grid.innerHTML = tables.map(table => `
    <div class="table-block ${table.status}" onclick="showTableDetail('${table.id}')">
      <span class="table-num">${table.num}</span>
      <span class="table-seats">${table.seats} Seats</span>
      ${table.guest ? `<span style="font-size: 0.65rem; font-weight: 700; color: var(--accent-primary);">${table.guest}</span>` : ''}
    </div>
  `).join('');
}

function renderKitchenQueue() {
  const container = document.getElementById('kitchen-tickets');
  if (!container) return;
  const kitchenOrders = orders.filter(o => o.status === 'preparing');
  container.innerHTML = kitchenOrders.map(order => `
    <div class="kds-ticket">
      <div class="ticket-header" style="display:flex; justify-content:space-between;">
        <strong>#${order.id}</strong>
        <span class="prep-timer">08:45</span>
      </div>
      <div class="ticket-items" style="flex:1;">
        ${order.items.map(item => `<p><i class="ph ph-circle" style="font-size:0.7rem; margin-right:0.5rem;"></i> ${item}</p>`).join('')}
      </div>
      <button class="primary-btn" style="width:100%; margin-top:1rem;" onclick="updateOrderStatus('${order.id}', 'ready')">Mark Ready</button>
    </div>
  `).join('');
}

function renderDispatch() {
  const tbody = document.getElementById('dispatch-tbody');
  if (!tbody) return;
  const deliveryOrders = orders.filter(o => o.type === 'delivery' || o.status === 'ready');
  tbody.innerHTML = deliveryOrders.map(order => `
    <tr>
      <td>#${order.id}</td>
      <td>Sector 5, Ranchi</td>
      <td><span class="status-badge ${order.status}">${order.status}</span></td>
      <td>${order.rider || 'Not Assigned'}</td>
      <td>
        ${order.status === 'ready' ? 
          `<button class="action-btn" onclick="openAssignModal('${order.id}')">Assign Rider</button>` : 
          `<button class="action-btn" disabled>Tracking</button>`}
      </td>
    </tr>
  `).join('');
  
  const riderList = document.getElementById('rider-list');
  if (riderList) {
    riderList.innerHTML = riders.map(rider => `
      <div class="stat-card" style="margin-bottom: 0.75rem; padding: 1rem;">
        <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
          <div><strong style="display:block;">${rider.name}</strong><span class="text-muted" style="font-size:0.7rem;">${rider.activeOrders} active • ⭐ ${rider.rating}</span></div>
          <span class="status-badge ${rider.status === 'online' ? 'preparing' : 'dirty'}" style="font-size:0.6rem;">${rider.status}</span>
        </div>
      </div>
    `).join('');
  }
}

function renderMenuManagement() {
  const tbody = document.getElementById('menu-tbody');
  if (!tbody) return;
  tbody.innerHTML = menuItems.map(item => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
      <td>₹${item.price}</td>
      <td><span class="text-success">${item.status}</span></td>
      <td><button class="icon-btn" onclick="showMenuModal('${item.id}')"><i class="ph ph-pencil-simple"></i></button></td>
    </tr>
  `).join('');
}

function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;
  grid.innerHTML = inventoryItems.map(item => `
    <div class="stat-card">
      <div class="stat-icon arrivals"><i class="ph ${item.icon}"></i></div>
      <div class="stat-info" style="flex:1;"><p>${item.name}</p><h3 class="${item.stock <= item.lowStock ? 'text-danger' : ''}">${item.stock} ${item.unit}</h3></div>
      <button class="icon-btn" onclick="showInventoryModal('${item.id}')"><i class="ph ph-pencil-simple"></i></button>
    </div>
  `).join('');
}

// Table & Order Detailed Views
window.showTableDetail = function(id) {
  const table = tables.find(t => t.id === id);
  const modal = document.getElementById('folio-modal');
  const content = document.getElementById('folio-content');
  const footer = document.getElementById('folio-footer');
  
  document.getElementById('folio-title').innerText = `Table ${table.num} - ${table.status}`;
  
  content.innerHTML = `
    <div style="padding-bottom:1rem; border-bottom:1px solid var(--border-color); margin-bottom:1rem;">
      <p><strong>Guest:</strong> ${table.guest || 'N/A'}</p>
      <p><strong>Capacity:</strong> ${table.seats} Seats</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:0.5rem;">
      <button class="folio-btn" onclick="openMiniMenu('${id}')"><i class="ph ph-plus"></i> Add Item (Water/Soft Drinks)</button>
      <button class="folio-btn" onclick="showOrderModal('dine-in', '${table.id}')"><i class="ph ph-book-open"></i> Full Menu</button>
      <button class="folio-btn" onclick="updateTableStatus('${id}', 'dirty')">Clear Table</button>
    </div>
    <div id="mini-menu-container" style="display:none; margin-top:1rem; padding-top:1rem; border-top:1px dashed var(--border-color);"></div>
  `;
  
  footer.innerHTML = `<button class="primary-btn" onclick="closeModals()">Close</button>`;
  modal.classList.add('active');
}

window.openMiniMenu = function(tableId) {
    const container = document.getElementById('mini-menu-container');
    const drinks = menuItems.filter(m => m.id === 'M5' || m.id === 'M6');
    container.style.display = 'block';
    container.innerHTML = `
        <p style="font-size:0.7rem; font-weight:700; margin-bottom:0.5rem;">QUICK ADD</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
            ${drinks.map(d => `
                <button class="action-btn" onclick="quickAddItem('${tableId}', '${d.name}', ${d.price})">${d.name} (₹${d.price})</button>
            `).join('')}
        </div>
    `;
}

window.quickAddItem = function(tableId, name, price) {
    addNotification('Order Updated', `${name} added to Table ${tableId}`, 'success');
    closeModals();
}

window.showOrderFolio = function(id) {
    const order = orders.find(o => o.id === id);
    const modal = document.getElementById('folio-modal');
    const content = document.getElementById('folio-content');
    
    document.getElementById('folio-title').innerText = `Order #${order.id}`;
    content.innerHTML = `
        <div class="cart-summary-mini">
            <p><strong>Customer:</strong> ${order.customer}</p>
            <div style="margin-top:1rem;">
                ${order.items.map(i => `<div class="cart-item-row"><span>${i}</span><span>₹...</span></div>`).join('')}
            </div>
            <div class="cart-total-line"><span>Total</span><span>₹${order.total}</span></div>
        </div>
    `;
    modal.classList.add('active');
}

// New Order Flow
const newOrderBtn = document.getElementById('new-order-btn');
if (newOrderBtn) {
    newOrderBtn.addEventListener('click', () => showOrderModal());
}

window.showOrderModal = function(type = 'dine-in', tableId = null) {
    const modal = document.getElementById('order-modal');
    const grid = document.getElementById('modal-menu-grid');
    currentCart = [];
    
    document.getElementById('order-step-1').classList.add('active');
    document.getElementById('order-step-2').classList.remove('active');
    
    grid.innerHTML = menuItems.map(item => `
        <div class="mini-menu-card" onclick="addToCart('${item.name}', ${item.price})">
            <h5>${item.name}</h5>
            <span class="price">₹${item.price}</span>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

document.getElementById('next-to-menu')?.addEventListener('click', () => {
    document.getElementById('order-step-1').classList.remove('active');
    document.getElementById('order-step-2').classList.add('active');
});

window.addToCart = function(name, price) {
    currentCart.push({ name, price });
    addNotification('Item Added', `${name} added to cart`, 'info');
}

document.getElementById('finalize-order')?.addEventListener('click', () => {
    const customer = document.getElementById('order-customer').value || 'Guest';
    const total = currentCart.reduce((sum, item) => sum + item.price, 0);
    const newId = (1000 + orders.length + 1).toString();
    
    orders.push({
        id: newId,
        customer,
        items: currentCart.map(c => c.name),
        total,
        status: 'preparing',
        type: 'dine-in',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    closeModals();
    refreshAllViews();
});

// Other Modals (Assign, Menu, Inventory)
window.openAssignModal = function(orderId) {
    const modal = document.getElementById('assign-modal');
    const body = document.getElementById('assign-body');
    const onlineRiders = riders.filter(r => r.status === 'online');
    body.innerHTML = onlineRiders.map(rider => `<div class="mini-menu-card" onclick="confirmAssignment('${orderId}', '${rider.name}')"><strong>${rider.name}</strong><span>${rider.activeOrders} active</span></div>`).join('');
    modal.classList.add('active');
}

window.confirmAssignment = function(orderId, riderName) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'on-the-way';
        order.rider = riderName;
        closeModals();
        refreshAllViews();
    }
}

window.showMenuModal = function(id = null) {
    const modal = document.getElementById('menu-item-modal');
    if (id) {
        const item = menuItems.find(m => m.id === id);
        document.getElementById('menu-item-id').value = item.id;
        document.getElementById('menu-item-name').value = item.name;
        document.getElementById('menu-item-price').value = item.price;
        document.getElementById('menu-item-cat').value = item.category;
    } else {
        document.getElementById('menu-item-form').reset();
    }
    modal.classList.add('active');
}

window.showInventoryModal = function(id = null) {
    const modal = document.getElementById('inventory-modal');
    if (id) {
        const item = inventoryItems.find(i => i.id === id);
        document.getElementById('inv-item-id').value = item.id;
        document.getElementById('inv-item-name').value = item.name;
        document.getElementById('inv-item-stock').value = item.stock;
    } else {
        document.getElementById('inventory-form').reset();
    }
    modal.classList.add('active');
}

window.closeModals = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

window.updateTableStatus = function(id, status) {
    const table = tables.find(t => t.id === id);
    if (table) {
        table.status = status;
        if (status === 'dirty' || status === 'available') table.guest = null;
        refreshAllViews();
        closeModals();
    }
}

window.updateOrderStatus = function(id, status) {
    const order = orders.find(o => o.id === id);
    if (order) { order.status = status; refreshAllViews(); }
}

window.addNotification = function(title, message, type) {
    notifications.unshift({ title, message, type });
    const badge = document.getElementById('notif-badge');
    if (badge) badge.innerText = notifications.length;
}

// Initial
refreshAllViews();
document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', closeModals));

// Interconnectivity Sync
syncWithCloud();
setInterval(syncWithCloud, 10000); // Sync every 10 seconds

async function syncWithCloud() {
  try {
    const response = await fetch('http://localhost:3000/api/restaurant-orders');
    if (response.ok) {
      const cloudOrders = await response.json();
      
      const formatted = cloudOrders.map(co => ({
        id: `DB-${co.id}`,
        customer: co.guest_name || 'Online Customer',
        items: JSON.parse(co.items).map(i => i.name),
        total: co.total_amount,
        status: co.status.toLowerCase(),
        type: co.order_type,
        time: new Date(co.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'Portal'
      }));
      
      const existingIds = orders.map(o => o.id);
      const newOrders = formatted.filter(o => !existingIds.includes(o.id));
      
      if (newOrders.length > 0) {
        orders = [...newOrders, ...orders];
        refreshAllViews();
        
        newOrders.forEach(no => {
          addNotification('New Online Order', `${no.customer} placed a ${no.type} order.`, 'success');
        });
      }
    }
  } catch (err) {
    console.warn("Restaurant cloud sync unavailable. Ensure app-user-next is running.");
  }
}
