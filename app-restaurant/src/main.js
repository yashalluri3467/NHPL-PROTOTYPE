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
let currentTableId = null;

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
  
  const order = orders.find(o => o.table === table.id);
  
  document.getElementById('folio-title').innerText = `Table ${table.num} - ${table.status}`;
  
  if (order) {
    const orderItems = order.items.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    content.innerHTML = `
      <div style="padding-bottom:1rem; border-bottom:1px solid var(--border-color); margin-bottom:1rem;">
        <p><strong>Guest:</strong> ${order.customer || 'N/A'}</p>
        <p><strong>Capacity:</strong> ${table.seats} Seats</p>
      </div>
      <div class="active-cart-section">
        <h4 style="margin-bottom:0.75rem; font-size:0.9rem; display:flex; align-items:center; gap:0.5rem;">
            <i class="ph ph-shopping-cart"></i> Current Order
        </h4>
        <div style="max-height: 200px; overflow-y: auto; margin-bottom:1rem;">
            ${Object.entries(orderItems).map(([name, qty]) => `
                <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid var(--bg-app); font-size:0.85rem;">
                    <span>${name}</span>
                    <span style="font-weight:700;">x${qty}</span>
                </div>
            `).join('')}
        </div>
        <button class="folio-btn" onclick="showOrderModal('dine-in', '${table.id}')" style="background:var(--bg-app); border:1px dashed var(--border-color); color:var(--text-main);">
            <i class="ph ph-plus"></i> Add More Items
        </button>
        <button class="folio-btn" onclick="updateTableStatus('${id}', 'dirty')" style="margin-top:0.5rem; color:#991b1b;">
            <i class="ph ph-trash"></i> Clear Table
        </button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div style="padding-bottom:1rem; border-bottom:1px solid var(--border-color); margin-bottom:1rem;">
        <p><strong>Capacity:</strong> ${table.seats} Seats</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <button class="folio-btn" onclick="showOrderModal('dine-in', '${table.id}')"><i class="ph ph-book-open"></i> Full Menu</button>
        <button class="folio-btn" onclick="updateTableStatus('${id}', 'dirty')">Clear Table</button>
      </div>
    `;
  }
  
  footer.innerHTML = `
    <div style="display:flex; justify-content:space-between; width:100%; align-items:center; gap:1rem;">
      ${order ? `<button class="secondary-btn" style="flex:1; justify-content:center; padding: 0.75rem;" onclick="showTableBill('${table.id}')"><i class="ph ph-receipt"></i> View Bill</button>` : '<div></div>'}
      <button class="primary-btn" style="flex:1; justify-content:center; padding: 0.75rem;" onclick="closeModals()">Close</button>
    </div>
  `;
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
    closeModals();
    const modal = document.getElementById('order-modal');
    const grid = document.getElementById('modal-menu-grid');
    currentTableId = tableId;
    
    // Check for existing order to load into cart
    const existingOrder = tableId ? orders.find(o => o.table === tableId) : null;
    if (existingOrder) {
        currentCart = existingOrder.items.reduce((acc, itemName) => {
            const existing = acc.find(i => i.name === itemName);
            if (existing) {
                existing.qty++;
            } else {
                const menuItem = menuItems.find(m => m.name === itemName);
                acc.push({ name: itemName, price: menuItem ? menuItem.price : 0, qty: 1 });
            }
            return acc;
        }, []);
        document.getElementById('order-customer').value = existingOrder.customer;
        // Move to menu selection directly if order exists
        document.getElementById('order-step-1').classList.remove('active');
        document.getElementById('order-step-2').classList.add('active');
    } else {
        currentCart = [];
        document.getElementById('order-form').reset();
        document.getElementById('order-step-1').classList.add('active');
        document.getElementById('order-step-2').classList.remove('active');
    }
    
    document.getElementById('order-step-3').classList.remove('active');
    
    renderCart();
    
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

document.getElementById('finalize-order-direct')?.addEventListener('click', () => {
    if (currentCart.length === 0) {
        addNotification('Empty Cart', 'Please add some items first.', 'warning');
        return;
    }
    const customer = document.getElementById('order-customer').value || 'Guest';
    const total = currentCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    // Check if we're updating an existing order or creating a new one
    const tableId = currentTableId; // Need to track this
    const existingIndex = orders.findIndex(o => o.table === tableId);

    if (existingIndex > -1) {
        orders[existingIndex].items = currentCart.map(c => Array(c.qty).fill(c.name)).flat();
        orders[existingIndex].total = total;
        addNotification('Order Updated', `Table ${orders[existingIndex].table} items updated.`, 'success');
    } else {
        const newId = (1000 + orders.length + 1).toString();
        orders.push({
            id: newId,
            customer,
            items: currentCart.map(c => Array(c.qty).fill(c.name)).flat(),
            total,
            status: 'preparing',
            type: 'dine-in',
            table: tableId,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        // Update table status
        const table = tables.find(t => t.id === tableId);
        if (table) {
            table.status = 'occupied';
            table.guest = customer;
        }
        
        addNotification('Order Placed', `Order #${newId} has been confirmed.`, 'success');
    }
    
    closeModals();
    refreshAllViews();
    addNotification('Order Placed', `Order #${newId} has been confirmed.`, 'success');
});

document.getElementById('back-to-menu')?.addEventListener('click', () => {
    document.getElementById('order-step-3').classList.remove('active');
    document.getElementById('order-step-2').classList.add('active');
});

window.addToCart = function(name, price) {
    const existing = currentCart.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        currentCart.push({ name, price, qty: 1 });
    }
    renderCart();
    addNotification('Added', `${name} added to cart`, 'info');
}

window.removeFromCart = function(name) {
    const index = currentCart.findIndex(item => item.name === name);
    if (index > -1) {
        if (currentCart[index].qty > 1) {
            currentCart[index].qty--;
        } else {
            currentCart.splice(index, 1);
        }
    }
    renderCart();
}

function renderCart() {
    const container = document.getElementById('modal-cart-items');
    const totalEl = document.getElementById('modal-cart-total');
    if (!container || !totalEl) return;

    if (currentCart.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:var(--text-muted); margin-top:2rem;">Cart is empty</div>`;
        totalEl.innerText = '₹0';
        return;
    }

    container.innerHTML = currentCart.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; background:white; padding:0.5rem; border-radius:8px;">
            <div style="flex:1;">
                <div style="font-weight:600; font-size:0.85rem;">${item.name}</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">₹${item.price} x ${item.qty}</div>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
                <button class="icon-btn" style="padding:0.25rem;" onclick="removeFromCart('${item.name}')"><i class="ph ph-minus"></i></button>
                <span style="font-weight:700;">${item.qty}</span>
                <button class="icon-btn" style="padding:0.25rem;" onclick="addToCart('${item.name}', ${item.price})"><i class="ph ph-plus"></i></button>
            </div>
        </div>
    `).join('');

    const total = currentCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.innerText = `₹${total}`;

    const nextToBillBtn = document.getElementById('next-to-bill');
    if (nextToBillBtn) {
        if (currentCart.length === 0) {
            nextToBillBtn.style.opacity = '0.5';
            nextToBillBtn.style.cursor = 'not-allowed';
        } else {
            nextToBillBtn.style.opacity = '1';
            nextToBillBtn.style.cursor = 'pointer';
        }
    }
}

function renderBillPreview() {
    const container = document.getElementById('bill-preview-content');
    if (!container) return;

    const customer = document.getElementById('order-customer').value || 'Guest';
    const subtotal = currentCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + tax;

    container.innerHTML = `
        <div style="text-align:center; border-bottom:2px dashed var(--border-color); padding-bottom:1rem; margin-bottom:1rem;">
            <h2 style="font-family:'Outfit'; color:var(--accent-secondary);">NHPL RESTAURANT</h2>
            <p style="font-size:0.8rem; color:var(--text-muted);">Unified Management System • Ranchi</p>
        </div>
        <div style="margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.5rem;">
                <span><strong>Customer:</strong> ${customer}</span>
                <span><strong>Date:</strong> ${new Date().toLocaleDateString()}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                <span><strong>Order ID:</strong> #${1000 + orders.length + 1}</span>
                <span><strong>Time:</strong> ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
            </div>
        </div>
        <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem;">
            <thead style="border-bottom:1px solid var(--border-color);">
                <tr>
                    <th style="text-align:left; padding:0.5rem 0; font-size:0.8rem;">ITEM</th>
                    <th style="text-align:center; padding:0.5rem 0; font-size:0.8rem;">QTY</th>
                    <th style="text-align:right; padding:0.5rem 0; font-size:0.8rem;">TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${currentCart.map(item => `
                    <tr>
                        <td style="padding:0.75rem 0; font-size:0.9rem;">${item.name}</td>
                        <td style="text-align:center; padding:0.75rem 0; font-size:0.9rem;">${item.qty}</td>
                        <td style="text-align:right; padding:0.75rem 0; font-size:0.9rem;">₹${item.price * item.qty}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <div style="border-top:1px solid var(--border-color); padding-top:1rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.9rem;">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.9rem;">
                <span>GST (5%)</span>
                <span>₹${tax}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1.2rem; color:var(--accent-secondary); margin-top:0.5rem; padding-top:0.5rem; border-top:2px solid var(--accent-secondary);">
                <span>GRAND TOTAL</span>
                <span>₹${total}</span>
            </div>
        </div>
        <div style="text-align:center; margin-top:2rem; font-size:0.75rem; color:var(--text-muted);">
            <p>Thank you for dining with us!</p>
            <p>www.nhpl-restos.com</p>
        </div>
    `;
}

document.getElementById('finalize-order')?.addEventListener('click', () => {
    const customer = document.getElementById('order-customer').value || 'Guest';
    const total = currentCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
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

window.showTableBill = function(tableId) {
    closeModals();
    const order = orders.find(o => o.table === tableId);
    if (!order) {
        addNotification('No Bill', 'No active order found for this table.', 'info');
        return;
    }

    // Prepare currentCart for the bill preview
    currentCart = order.items.map(itemName => {
        const menuItem = menuItems.find(m => m.name === itemName);
        return {
            name: itemName,
            price: menuItem ? menuItem.price : 0,
            qty: 1 // Assuming 1 for now as the simple order logic doesn't track quantity
        };
    });

    const modal = document.getElementById('order-modal');
    document.getElementById('order-step-1').classList.remove('active');
    document.getElementById('order-step-2').classList.remove('active');
    document.getElementById('order-step-3').classList.add('active');
    document.getElementById('order-customer').value = order.customer;
    
    renderBillPreview();
    modal.classList.add('active');
}

window.addNotification = function(title, message, type) {
    notifications.unshift({ title, message, type });
    const badge = document.getElementById('notif-badge');
    if (badge) badge.innerText = notifications.length;
}

// Add Table Functionality
const addTableBtn = document.getElementById('add-table-btn');
if (addTableBtn) {
    addTableBtn.addEventListener('click', () => {
        document.getElementById('add-table-modal').classList.add('active');
    });
}

const saveTableBtn = document.getElementById('save-new-table');
if (saveTableBtn) {
    saveTableBtn.addEventListener('click', () => {
        const num = document.getElementById('new-table-num').value;
        const seats = document.getElementById('new-table-seats').value;
        
        if (num && seats) {
            const newId = `T${tables.length + 1}`;
            tables.push({
                id: newId,
                num: num,
                seats: parseInt(seats),
                status: 'available'
            });
            
            closeModals();
            renderTableGrid();
            document.getElementById('add-table-form').reset();
            addNotification('Table Added', `Table ${num} has been added to the floor plan.`, 'success');
        }
    });
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
