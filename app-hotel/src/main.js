let tasks = [
  { id: 'T-1024', room: '402', category: 'Housekeeping', issue: 'Extra Towels & Pillows', priority: 'High', sla: '12 mins', assignee: 'Maria S.', status: 'Pending' },
  { id: 'T-1025', room: '210', category: 'Maintenance', issue: 'AC Leaking', priority: 'Urgent', sla: '28 mins', assignee: 'John D.', status: 'In Progress' },
  { id: 'T-1026', room: '505', category: 'F&B', issue: 'Dinner Service (Veg)', priority: 'Medium', sla: '45 mins', assignee: 'Kitchen', status: 'Completed' },
  { id: 'T-1027', room: '301', category: 'Housekeeping', issue: 'Turndown Service', priority: 'Low', sla: '60 mins', assignee: 'Pending', status: 'Pending' },
  { id: 'T-1028', room: '108', category: 'Maintenance', issue: 'Wifi Connectivity', priority: 'Medium', sla: '20 mins', assignee: 'IT Team', status: 'Completed' },
];

let bookings = [
  { id: 'B-8801', guest: 'Michael Chen', roomType: 'Deluxe Suite', dates: 'Oct 24 - Oct 27', status: 'Current', amount: '₹12,400', initials: 'MC' },
  { id: 'B-8802', guest: 'Sarah Jenkins', roomType: 'Standard King', dates: 'Oct 24 - Oct 25', status: 'Checked Out', amount: '₹4,500', initials: 'SJ' },
  { id: 'B-8803', guest: 'David Miller', roomType: 'Ocean View', dates: 'Oct 26 - Oct 30', status: 'Upcoming', amount: '₹18,200', initials: 'DM' },
  { id: 'B-8804', guest: 'Emma Watson', roomType: 'Presidential', dates: 'Nov 02 - Nov 05', status: 'Upcoming', amount: '₹45,000', initials: 'EW' },
];


let reportStats = {
  totalRevenue: 452400,
  adr: 8200,
  revpar: 6450,
  newRegistrations: 128,
  offlineBookings: 42
};


let settings = {
  discount1: 15,
  discount2: 20,
  hotelName: 'NHPL Grand Hotel',
  contactEmail: 'contact@nhpl-hotel.com',
  supportPhone: '+91 12345 67890',
  userName: 'Eleanor M.',
  userRole: 'Front Desk Mgr',
  userAvatar: 'https://i.pravatar.cc/150?img=11'
};

let notifications = [
  { id: 1, type: 'info', title: 'New Booking', message: 'Michael Chen just booked a Deluxe Suite.', time: '5 mins ago' },
  { id: 2, type: 'warning', title: 'Task Delayed', message: 'AC Repair in Room 210 is overdue.', time: '12 mins ago' },
  { id: 3, type: 'success', title: 'Payment Received', message: 'Folio #8802 has been settled.', time: '45 mins ago' }
];

let rooms = [
  { no: '101', type: 'SK', status: 'available', resources: ['Extra Towels', 'Mini Bar'], inventory: 'High' },
  { no: '102', type: 'SK', status: 'occupied', guest: 'Michael C.', resources: ['Baby Crib', 'Pillows'], inventory: 'Normal' },
  { no: '103', type: 'DS', status: 'dirty', resources: ['Toiletries'], inventory: 'Low' },
  { no: '104', type: 'DS', status: 'available', resources: ['Bottled Water'], inventory: 'High' },
  { no: '105', type: 'OV', status: 'occupied', guest: 'Sarah J.', resources: ['Wine Set'], inventory: 'Normal' },
  { no: '201', type: 'SK', status: 'available', resources: ['Standard Kit'], inventory: 'High' },
  { no: '202', type: 'SK', status: 'available', resources: ['Standard Kit'], inventory: 'High' },
  { no: '203', type: 'DS', status: 'occupied', guest: 'David M.', resources: ['Coffee Maker'], inventory: 'Normal' },
  { no: '204', type: 'PR', status: 'dirty', resources: ['Fruit Basket'], inventory: 'Low' },
  { no: '205', type: 'OV', status: 'available', resources: ['Beach Kit'], inventory: 'High' },
  { no: '301', type: 'SK', status: 'occupied', guest: 'Emma W.', resources: ['Extra Blankets'], inventory: 'Normal' },
  { no: '302', type: 'DS', status: 'available', resources: ['Mini Bar'], inventory: 'High' },
  { no: '303', type: 'OV', status: 'available', resources: ['Standard Kit'], inventory: 'High' },
  { no: '401', type: 'PR', status: 'occupied', guest: 'Chris E.', resources: ['Luxury Kit'], inventory: 'Normal' },
  { no: '402', type: 'DS', status: 'dirty', resources: ['Standard Kit'], inventory: 'Low' },
];

let resourceInventory = [
  { name: 'Bath Towels', category: 'Linens', quantity: 240, unit: 'pcs', threshold: 50 },
  { name: 'Bed Sheets', category: 'Linens', quantity: 180, unit: 'pcs', threshold: 40 },
  { name: 'Shampoo (30ml)', category: 'Toiletries', quantity: 45, unit: 'btls', threshold: 100 },
  { name: 'Conditioner (30ml)', category: 'Toiletries', quantity: 120, unit: 'btls', threshold: 50 },
  { name: 'Mini Water Btls', category: 'F&B', quantity: 500, unit: 'btls', threshold: 200 },
  { name: 'Coffee Pods', category: 'F&B', quantity: 30, unit: 'pcs', threshold: 50 },
];


let arrivals = [
  { name: 'Michael Chen', roomType: 'Deluxe Suite', status: 'Expected', eta: '14:30', initials: 'MC' },
  { name: 'Sarah Jenkins', roomType: 'Standard King', status: 'Arrived', eta: '11:00', initials: 'SJ' },
  { name: 'David Miller', roomType: 'Ocean View', status: 'Late', eta: '18:00', initials: 'DM' },
  { name: 'Emma Watson', roomType: 'Presidential', status: 'Expected', eta: '15:45', initials: 'EW' },
];


let pastBookings = [
  { id: 'B-7012', guest: 'Robert Downy', dates: 'Oct 10 - Oct 14', room: '102', amount: '₹18,000', status: 'Paid', initials: 'RD' },
  { id: 'B-7013', guest: 'Alice Wong', dates: 'Oct 12 - Oct 15', room: '205', amount: '₹13,500', status: 'Paid', initials: 'AW' },
  { id: 'B-7014', guest: 'Tom Hardy', dates: 'Oct 15 - Oct 18', room: '304', amount: '₹22,400', status: 'Refunded', initials: 'TH' },
  { id: 'B-7015', guest: 'Scarlett J.', dates: 'Oct 18 - Oct 20', room: '401', amount: '₹45,000', status: 'Paid', initials: 'SJ' },
];


document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  loadMockArrivals();
  renderTasks();
  renderBookings();
  initModals();
  initSettings();
  updateSidebarFooter();
  initNotifications();
  renderRoomMap();
  renderGuests();
  renderRooms();
  renderResourceInventory();
  renderPastBookings();
  renderReportStats();
  initResourceForm();
  initExportModal();
  
  // Interconnectivity Sync
  syncWithCloud();
  setInterval(syncWithCloud, 10000); // Sync every 10 seconds
});

async function syncWithCloud() {
  try {
    const response = await fetch('http://localhost:3000/api/hotel-bookings');
    if (response.ok) {
      const cloudBookings = await response.json();
      // Transform cloud data to match local format
      const formatted = cloudBookings.map(cb => ({
        id: `DB-${cb.id}`,
        guest: cb.guest_name,
        roomType: cb.room_type,
        dates: `${new Date(cb.check_in).toLocaleDateString()} - ${new Date(cb.check_out).toLocaleDateString()}`,
        status: cb.status,
        amount: cb.amount,
        initials: cb.guest_name.split(' ').map(n => n[0]).join('').toUpperCase(),
        source: 'Portal'
      }));
      
      // Merge with local bookings (avoiding duplicates)
      const existingIds = bookings.map(b => b.id);
      const newBookings = formatted.filter(b => !existingIds.includes(b.id));
      
      if (newBookings.length > 0) {
        bookings = [...newBookings, ...bookings];
        renderBookings();
        
        // Add notification for new cloud booking
        newBookings.forEach(nb => {
          notifications.unshift({
            id: Date.now(),
            type: 'info',
            title: 'New Online Booking',
            message: `${nb.guest} reserved ${nb.roomType} via Customer Portal.`,
            time: 'Just now'
          });
        });
        initNotifications();
      }
    }
  } catch (err) {
    console.warn("Cloud sync currently unavailable. Ensure app-user-next is running on port 3000.");
  }
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const viewSections = document.querySelectorAll('.view-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      const targetViewId = 'view-' + item.dataset.view;
      viewSections.forEach(section => {
        section.classList.toggle('active', section.id === targetViewId);
      });
    });
  });
}

function loadMockArrivals() {
  const tbody = document.getElementById('arrivals-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = arrivals.map(arrival => {
    let statusClass = 'expected';
    if(arrival.status === 'Arrived') statusClass = 'arrived';
    if(arrival.status === 'Late') statusClass = 'late';
    if(arrival.status === 'Cancelled') statusClass = 'late'; // Reuse late style or add cancelled

    return `
      <tr data-guest="${arrival.name}" data-room-type="${arrival.roomType}">
        <td>
          <div class="guest-cell">
            <div class="guest-avatar">${arrival.initials}</div>
            <span>${arrival.name}</span>
          </div>
        </td>
        <td>${arrival.roomType}</td>
        <td><span class="status-badge ${statusClass}">${arrival.status}</span></td>
        <td>${arrival.eta}</td>
        <td><button class="action-btn manage-arrival-btn">Manage</button></td>
      </tr>
    `;
  }).join('');

  // Add event listeners to Manage buttons
  document.querySelectorAll('.manage-arrival-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      const guestName = row.dataset.guest;
      const roomType = row.dataset.roomType;
      openManageModal(guestName, roomType);
    });
  });
}

function renderTasks() {
  const tbody = document.getElementById('tasks-tbody');
  if (!tbody) return;

  tbody.innerHTML = tasks.map(task => {
    let priorityClass = 'priority-medium';
    if (task.priority === 'Urgent') priorityClass = 'priority-urgent';
    if (task.priority === 'High') priorityClass = 'priority-high';
    if (task.priority === 'Low') priorityClass = 'priority-low';

    const isCompleted = task.status === 'Completed';
    const rowClass = isCompleted ? 'task-completed' : '';

    return `
      <tr class="${rowClass}" data-task-id="${task.id}" data-task-title="${task.issue}">
        <td><span class="text-muted">#${task.id}</span></td>
        <td><strong>${task.room}</strong></td>
        <td>${task.category}</td>
        <td>${task.issue}</td>
        <td><span class="priority-badge ${priorityClass}">${task.priority}</span></td>
        <td><span class="sla-timer">${isCompleted ? 'Done' : task.sla}</span></td>
        <td>
          <div class="assignee-cell">
            <div class="mini-avatar">${task.assignee.charAt(0)}</div>
            <span>${task.assignee}</span>
          </div>
        </td>
        <td>
          ${isCompleted ? 
            '<span class="status-done-icon"><i class="ph-fill ph-check-circle"></i></span>' : 
            '<button class="action-btn update-task-btn">Update</button>'
          }
        </td>
      </tr>
    `;
  }).join('');

  const updateBtns = document.querySelectorAll('.update-task-btn');
  updateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      openStatusModal(tr.dataset.taskId, tr.dataset.taskTitle);
    });
  });
}

function renderBookings(filter = 'all') {
  const tbody = document.getElementById('bookings-tbody');
  if (!tbody) return;

  const filteredBookings = bookings.filter(b => {
    if (filter === 'all') return true;
    if (filter === 'current') return b.status === 'Current';
    if (filter === 'upcoming') return b.status === 'Upcoming';
    if (filter === 'past') return b.status === 'Past' || b.status === 'Checked Out';
    return true;
  });

  tbody.innerHTML = filteredBookings.map(b => {
    let statusClass = 'expected';
    if (b.status === 'Current') statusClass = 'arrived';
    if (b.status === 'Checked Out' || b.status === 'Past') statusClass = 'late';
    
    return `
      <tr data-id="${b.id}">
        <td><span class="text-muted">#${b.id}</span></td>
        <td>
          <div class="guest-cell">
            <div class="guest-avatar">${b.initials}</div>
            <span>${b.guest}</span>
          </div>
        </td>
        <td>${b.roomType}</td>
        <td>${b.dates}</td>
        <td><span class="status-badge ${statusClass}">${b.status}</span></td>
        <td><strong>${b.amount}</strong></td>
        <td>${b.source === 'Portal' ? '<span class="status-badge arrived" style="background:#e0e7ff; color:#4338ca">Online</span>' : '<button class="action-btn edit-booking-btn">Edit</button>'}</td>
      </tr>
    `;
  }).join('');

  const editBtns = document.querySelectorAll('.edit-booking-btn');
  editBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      openEditBookingModal(tr.dataset.id);
    });
  });
}

function initModals() {
  // Status Modal
  const statusModal = document.getElementById('status-modal');
  const closeStatusBtn = document.getElementById('close-modal');
  const cancelStatusBtn = document.getElementById('cancel-status');
  const saveStatusBtn = document.getElementById('save-status');

  const closeStatus = () => statusModal.classList.remove('active');
  closeStatusBtn.addEventListener('click', closeStatus);
  cancelStatusBtn.addEventListener('click', closeStatus);

  saveStatusBtn.addEventListener('click', () => {
    const selectedStatus = document.querySelector('input[name="task-status"]:checked').value;
    const taskDisplayId = document.getElementById('modal-task-id').innerText;
    const cleanId = taskDisplayId.replace('Task #', '');
    const taskIndex = tasks.findIndex(t => t.id === cleanId);
    if (taskIndex !== -1) {
      tasks[taskIndex].status = selectedStatus === 'completed' ? 'Completed' : 
                                 selectedStatus === 'in-progress' ? 'In Progress' : 'Pending';
      saveStatusBtn.innerText = 'Updating...';
      setTimeout(() => {
        saveStatusBtn.innerText = 'Save Status';
        renderTasks();
        closeStatus();
      }, 500);
    }
  });

  // Create Task Modal
  const createModal = document.getElementById('create-task-modal');
  const createTriggerBtn = document.querySelector('#view-tasks .primary-btn');
  const closeCreateBtn = document.getElementById('close-create-modal');
  const cancelCreateBtn = document.getElementById('cancel-create');
  const submitTaskBtn = document.getElementById('submit-task');

  if (createTriggerBtn) {
    createTriggerBtn.addEventListener('click', () => createModal.classList.add('active'));
  }
  closeCreateBtn.addEventListener('click', () => createModal.classList.remove('active'));
  cancelCreateBtn.addEventListener('click', () => createModal.classList.remove('active'));

  submitTaskBtn.addEventListener('click', () => {
    const newTask = {
      id: 'T-' + Math.floor(1000 + Math.random() * 9000),
      room: document.getElementById('task-room').value || '---',
      category: document.getElementById('task-category').value,
      issue: document.getElementById('task-issue').value || 'New Request',
      priority: document.getElementById('task-priority').value,
      sla: '60 mins',
      assignee: document.getElementById('task-assignee').value || 'Pending',
      status: 'Pending'
    };
    submitTaskBtn.innerText = 'Creating...';
    setTimeout(() => {
      tasks.unshift(newTask);
      renderTasks();
      submitTaskBtn.innerText = 'Create Task';
      document.getElementById('create-task-form').reset();
      createModal.classList.remove('active');
    }, 600);
  });

  // New Booking Modal
  const bookingModal = document.getElementById('booking-modal');
  const rateTypeSelect = document.getElementById('book-rate-type');
  const customRateGroup = document.getElementById('custom-rate-group');

  rateTypeSelect.addEventListener('change', () => {
    customRateGroup.style.display = rateTypeSelect.value === 'negotiated' ? 'block' : 'none';
  });

  const openBookingBtn = document.getElementById('open-booking-modal');
  const topbarBookingBtn = document.querySelector('.topbar .new-booking-btn');
  const closeBookingBtn = document.getElementById('close-booking-modal');
  const cancelBookingBtn = document.getElementById('cancel-booking');
  const submitBookingBtn = document.getElementById('submit-booking');

  const openB = () => {
    bookingModal.querySelector('h3').innerText = 'Create New Booking';
    submitBookingBtn.innerText = 'Confirm Booking';
    delete bookingModal.dataset.editId;
    document.getElementById('booking-form').reset();
    bookingModal.classList.add('active');
  };
  const closeB = () => bookingModal.classList.remove('active');

  if (openBookingBtn) openBookingBtn.addEventListener('click', openB);
  if (topbarBookingBtn) topbarBookingBtn.addEventListener('click', openB);
  closeBookingBtn.addEventListener('click', closeB);
  cancelBookingBtn.addEventListener('click', closeB);

  submitBookingBtn.addEventListener('click', () => {
    const name = document.getElementById('book-name').value;
    const roomType = document.getElementById('book-room-type').value;
    const guests = document.getElementById('book-guests').value;
    const checkin = document.getElementById('book-checkin').value;
    const checkout = document.getElementById('book-checkout').value;
    const email = document.getElementById('book-email').value;
    const phone = document.getElementById('book-phone').value;
    const govId = document.getElementById('book-govid').value;
    const rateType = document.getElementById('book-rate-type').value;
    const customRate = document.getElementById('book-custom-rate').value;
    
    if (!name || !checkin || !checkout || !govId) {
      alert('Please fill in Guest Name, Dates, and Gov ID');
      return;
    }

    // Calculate Amount
    const roomTypeSelect = document.getElementById('book-room-type');
    const basePrice = parseInt(roomTypeSelect.options[roomTypeSelect.selectedIndex].dataset.price);
    let finalAmount = basePrice;

    if (rateType === 'discount1') {
      finalAmount = basePrice * (1 - settings.discount1 / 100);
    } else if (rateType === 'discount2') {
      finalAmount = basePrice * (1 - settings.discount2 / 100);
    } else if (rateType === 'negotiated' && customRate) {
      finalAmount = parseInt(customRate);
    }

    const amountStr = `₹${Math.round(finalAmount).toLocaleString('en-IN')}`;

    const editId = bookingModal.dataset.editId;
    
    if (editId) {
      const index = bookings.findIndex(b => b.id === editId);
      if (index !== -1) {
        bookings[index] = {
          ...bookings[index],
          guest: name,
          roomType: roomType,
          govId: govId,
          rateType: rateType,
          customRate: customRate,
          amount: amountStr,
          dates: `${checkin} - ${checkout}`,
          initials: name.split(' ').map(n => n[0]).join('').toUpperCase()
        };
      }
      submitBookingBtn.innerText = 'Updating...';
    } else {
      const newBooking = {
        id: 'B-' + Math.floor(8800 + Math.random() * 1000),
        guest: name,
        roomType: roomType,
        govId: govId,
        rateType: rateType,
        customRate: customRate,
        amount: amountStr,
        dates: `${checkin} - ${checkout}`,
        status: 'Upcoming',
        initials: name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      bookings.unshift(newBooking);
      submitBookingBtn.innerText = 'Confirming...';

      // Update Report Stats
      reportStats.newRegistrations++;
      reportStats.offlineBookings++;
      renderReportStats();
    }


    setTimeout(() => {
      renderBookings();
      submitBookingBtn.innerText = editId ? 'Save Changes' : 'Confirm Booking';
      document.getElementById('booking-form').reset();
      delete bookingModal.dataset.editId;
      closeB();
    }, 800);
  });

  // Booking Filters
  const filterTabs = document.querySelectorAll('#booking-filters .tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderBookings(tab.dataset.filter);
    });
  });

  // Backdrop clicks
  [statusModal, createModal, bookingModal].forEach(m => {
    if (m) m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('active'); });
  });
}

function openStatusModal(id, title) {
  const modal = document.getElementById('status-modal');
  document.getElementById('modal-task-id').innerText = `Task #${id}`;
  document.getElementById('modal-task-title').innerText = title;
  modal.classList.add('active');
}

function openEditBookingModal(id) {
  const booking = bookings.find(b => b.id === id);
  if (!booking) return;

  const modal = document.getElementById('booking-modal');
  const form = document.getElementById('booking-form');
  
  modal.querySelector('h3').innerText = 'Edit Booking';
  document.getElementById('submit-booking').innerText = 'Save Changes';
  
  document.getElementById('book-name').value = booking.guest;
  document.getElementById('book-room-type').value = booking.roomType;
  document.getElementById('book-govid').value = booking.govId || '';
  document.getElementById('book-rate-type').value = booking.rateType || 'default';
  document.getElementById('book-custom-rate').value = booking.customRate || '';
  document.getElementById('custom-rate-group').style.display = booking.rateType === 'negotiated' ? 'block' : 'none';
  
  modal.dataset.editId = id;
  modal.classList.add('active');
}

function initSettings() {
  const saveBtn = document.getElementById('save-settings-btn');
  if (!saveBtn) return;

  saveBtn.addEventListener('click', () => {
    settings.discount1 = parseInt(document.getElementById('settings-discount-1').value);
    settings.discount2 = parseInt(document.getElementById('settings-discount-2').value);
    settings.hotelName = document.getElementById('settings-hotel-name').value;
    settings.contactEmail = document.getElementById('settings-contact-email').value;
    settings.supportPhone = document.getElementById('settings-support-phone').value;
    settings.userName = document.getElementById('settings-user-name').value;
    settings.userRole = document.getElementById('settings-user-role').value;
    settings.userAvatar = document.getElementById('settings-user-avatar').value;

    saveBtn.innerText = 'Saving...';
    setTimeout(() => {
      saveBtn.innerText = 'Save Settings';
      updateSidebarFooter();
      alert('Settings saved successfully!');
    }, 600);
  });
}

function updateSidebarFooter() {
  const logoText = document.querySelector('.logo span');
  if (logoText) logoText.innerText = settings.hotelName.toUpperCase();
  
  const userNameEl = document.querySelector('.sidebar-footer .user-name');
  const userRoleEl = document.querySelector('.sidebar-footer .user-role');
  const userAvatarEl = document.querySelector('.sidebar-footer img');

  if (userNameEl) userNameEl.innerText = settings.userName;
  if (userRoleEl) userRoleEl.innerText = settings.userRole;
  if (userAvatarEl) userAvatarEl.src = settings.userAvatar;
}

function initNotifications() {
  const notifBtn = document.getElementById('notif-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  const notifList = document.getElementById('notif-list');
  const notifBadge = document.getElementById('notif-badge');
  const clearBtn = document.getElementById('clear-notifs');

  if (!notifBtn) return;

  const renderNotifs = () => {
    notifList.innerHTML = '';
    if (notifications.length === 0) {
      notifList.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No new notifications</div>';
      notifBadge.style.display = 'none';
      return;
    }

    notifBadge.innerText = notifications.length;
    notifBadge.style.display = 'flex';

    notifications.forEach(notif => {
      const div = document.createElement('div');
      div.className = 'notif-item';
      div.innerHTML = `
        <div class="notif-icon ${notif.type}">
          <i class="ph-fill ph-${notif.type === 'success' ? 'check-circle' : notif.type === 'warning' ? 'warning' : 'info'}"></i>
        </div>
        <div class="notif-content">
          <h5>${notif.title}</h5>
          <p>${notif.message}</p>
          <span class="notif-time">${notif.time}</span>
        </div>
      `;
      notifList.appendChild(div);
    });
  };

  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
  });

  clearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifications = [];
    renderNotifs();
  });

  document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
      notifDropdown.classList.remove('active');
    }
  });

  renderNotifs();
}

function renderRoomMap() {
  const roomGrid = document.getElementById('room-grid');
  if (!roomGrid) return;

  roomGrid.innerHTML = '';
  rooms.forEach(room => {
    const div = document.createElement('div');
    div.className = `room-block ${room.status}`;
    div.innerHTML = `
      <span class="room-number">${room.no}</span>
      <span class="room-type-abbr">${room.type}</span>
      <div class="room-info-engraved">
        ${room.guest ? room.guest : room.status.charAt(0).toUpperCase() + room.status.slice(1)}
      </div>
    `;
    roomGrid.appendChild(div);
  });
}

// Manage Arrival Functions
function openManageModal(guestName, roomType) {
  const modal = document.getElementById('manage-arrival-modal');
  const nameEl = document.getElementById('manage-guest-name');
  const typeEl = document.getElementById('manage-room-type');
  
  if (modal && nameEl && typeEl) {
    nameEl.textContent = guestName;
    typeEl.textContent = roomType;
    modal.classList.add('active');
  }
}

// Initialize Manage Arrival Modal
const manageModal = document.getElementById('manage-arrival-modal');
const closeManageBtn = document.getElementById('close-manage-modal');
const cancelManageBtn = document.getElementById('cancel-manage');
const confirmManageBtn = document.getElementById('confirm-manage');

if (closeManageBtn) closeManageBtn.addEventListener('click', () => manageModal.classList.remove('active'));
if (cancelManageBtn) cancelManageBtn.addEventListener('click', () => manageModal.classList.remove('active'));

if (confirmManageBtn) {
  confirmManageBtn.addEventListener('click', () => {
    const selectedAction = document.querySelector('input[name="arrival-action"]:checked').value;
    const guestName = document.getElementById('manage-guest-name').textContent;
    
    let message = "";
    let type = "success";
    
    if (selectedAction === 'check-in') {
      message = `Successfully checked in ${guestName}.`;
    } else if (selectedAction === 'early-check-in') {
      message = `Early check-in processed for ${guestName}.`;
    } else if (selectedAction === 'cancel') {
      message = `Reservation for ${guestName} has been cancelled.`;
      type = "warning";
    }
    
    // Add to notifications
    notifications.unshift({
      id: Date.now(),
      type: type,
      title: selectedAction.replace(/-/g, ' ').toUpperCase(),
      message: message,
      time: 'Just now'
    });
    
    initNotifications();
    manageModal.classList.remove('active');
    
    // Update local state
    const arrival = arrivals.find(a => a.name === guestName);
    if (arrival) {
      if (selectedAction === 'check-in' || selectedAction === 'early-check-in') {
        arrival.status = 'Arrived';
      } else if (selectedAction === 'cancel') {
        arrival.status = 'Cancelled';
      }
    }
    
    // Re-render table
    loadMockArrivals();
    
    alert(message);
  });
}

function renderGuests() {
  const tbody = document.getElementById('guests-tbody');
  if (!tbody) return;

  const inHouseGuests = rooms.filter(r => r.status === 'occupied');

  tbody.innerHTML = inHouseGuests.map(room => {
    return `
      <tr>
        <td>
          <div class="guest-cell">
            <div class="guest-avatar">${room.guest.split(' ').map(n => n[0]).join('')}</div>
            <span>${room.guest}</span>
          </div>
        </td>
        <td><strong>${room.no}</strong></td>
        <td>${room.type === 'SK' ? 'Standard King' : room.type === 'DS' ? 'Deluxe Suite' : room.type === 'OV' ? 'Ocean View' : 'Presidential'}</td>
        <td>Oct 24, 2024</td>
        <td>Oct 27, 2024</td>
        <td><span class="status-badge arrived">In-House</span></td>
        <td>
          <button class="action-btn">Manage</button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderRooms() {
  const tbody = document.getElementById('rooms-tbody');
  if (!tbody) return;

  tbody.innerHTML = rooms.map(room => {
    let statusClass = 'available';
    if(room.status === 'occupied') statusClass = 'occupied';
    if(room.status === 'dirty') statusClass = 'dirty';

    let inventoryClass = 'status-badge arrived';
    if(room.inventory === 'Low') inventoryClass = 'status-badge late';
    if(room.inventory === 'Normal') inventoryClass = 'status-badge expected';

    return `
      <tr>
        <td><strong>Room ${room.no}</strong></td>
        <td>${getRoomTypeFull(room.type)}</td>
        <td><span class="status-badge ${statusClass}">${room.status}</span></td>
        <td>
          <div class="resource-tags">
            ${room.resources.map(res => `<span class="res-tag">${res}</span>`).join('')}
          </div>
        </td>
        <td><span class="${inventoryClass}">${room.inventory}</span></td>
        <td>
          <button class="action-btn">Edit Resources</button>
        </td>
      </tr>
    `;
  }).join('');
}

function getRoomTypeFull(type) {
  const types = {
    'SK': 'Standard King',
    'DS': 'Deluxe Suite',
    'OV': 'Ocean View',
    'PR': 'Presidential'
  };
  return types[type] || type;
}

function renderResourceInventory() {
  const grid = document.getElementById('resource-inventory-grid');
  if (!grid) return;

  grid.innerHTML = resourceInventory.map(item => {
    const isLow = item.quantity < item.threshold;
    return `
      <div class="resource-item-card">
        <div class="res-item-header">
          <span class="res-item-cat">${item.category}</span>
          <i class="ph ph-dots-three-vertical"></i>
        </div>
        <span class="res-item-name">${item.name}</span>
        <div class="res-item-stats">
          <span class="res-item-qty">${item.quantity}</span>
          <span class="res-item-unit">${item.unit}</span>
        </div>
        <span class="res-stock-status ${isLow ? 'low' : 'normal'}">
          <i class="ph ${isLow ? 'ph-warning-circle' : 'ph-check-circle'}"></i>
          ${isLow ? 'Low Stock' : 'In Stock'}
        </span>
      </div>
    `;
  }).join('');
}

function initResourceForm() {
  const form = document.getElementById('add-resource-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('res-name').value;
    const cat = document.getElementById('res-cat').value;
    const qty = parseInt(document.getElementById('res-qty').value);

    if (name && qty) {
      resourceInventory.push({
        name,
        category: cat,
        quantity: qty,
        unit: 'pcs',
        threshold: 20
      });

      renderResourceInventory();
      form.reset();
      
      notifications.unshift({
        id: Date.now(),
        type: 'success',
        title: 'Inventory Updated',
        message: `${qty} ${name} added to global inventory.`,
        time: 'Just now'
      });
      initNotifications();
    }
  });
}

function renderPastBookings() {
  const tbody = document.getElementById('past-bookings-tbody');
  if (!tbody) return;

  tbody.innerHTML = pastBookings.map(booking => {
    return `
      <tr>
        <td><strong>#${booking.id}</strong></td>
        <td>
          <div class="guest-cell">
            <div class="guest-avatar">${booking.initials}</div>
            <span>${booking.guest}</span>
          </div>
        </td>
        <td>${booking.dates}</td>
        <td>Room ${booking.room}</td>
        <td><strong>${booking.amount}</strong></td>
        <td><span class="status-badge ${booking.status === 'Paid' ? 'arrived' : 'late'}">${booking.status}</span></td>
        <td>
          <button class="action-btn"><i class="ph ph-file-text"></i> View Bill</button>
        </td>
      </tr>
    `;
  }).join('');
}

function initExportModal() {
  const openBtn = document.getElementById('open-export-modal');
  const modal = document.getElementById('export-modal');
  const closeBtn = document.getElementById('close-export-modal');
  const cancelBtn = document.getElementById('cancel-export');
  const confirmBtn = document.getElementById('confirm-export');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  [closeBtn, cancelBtn].forEach(btn => {
    btn.addEventListener('click', () => modal.classList.remove('active'));
  });

  confirmBtn.addEventListener('click', () => {
    const type = document.getElementById('export-type').value;
    const format = document.querySelector('input[name="export-format"]:checked').value;
    
    confirmBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Generating...';
    confirmBtn.disabled = true;

    setTimeout(() => {
      modal.classList.remove('active');
      confirmBtn.innerHTML = '<i class="ph ph-download-simple"></i> Download Report';
      confirmBtn.disabled = false;
      
      // Simulate download
      notifications.unshift({
        id: Date.now(),
        type: 'success',
        title: 'Report Downloaded',
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} report has been exported as ${format.toUpperCase()}.`,
        time: 'Just now'
      });
      initNotifications();
    }, 2000);
  });
}

function renderReportStats() {
  const revEl = document.getElementById('report-total-rev');
  const regEl = document.getElementById('report-new-regs');
  const offEl = document.getElementById('report-offline-count');

  if (revEl) revEl.innerText = `₹${reportStats.totalRevenue.toLocaleString('en-IN')}`;
  if (regEl) regEl.innerText = reportStats.newRegistrations;
  if (offEl) offEl.innerText = reportStats.offlineBookings;
}



