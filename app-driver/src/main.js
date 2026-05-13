// NHPL Driver App - Core Logic
let state = {
    isOnline: true,
    view: 'home',
    status: 'idle', // idle, alert, pickup, in-trip
    activeTrip: null,
    jobCountdown: 15,
    countdownInterval: null,
    earnings: 14850,
    logs: [
        { time: '14:20', type: 'system', msg: 'Shift Started' },
        { time: '14:45', type: 'trip', msg: 'Trip #9012 Completed - ₹450' },
        { time: '15:30', type: 'system', msg: 'Document Check Verified' }
    ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    simulateIncomingJob(); // Start looking for jobs
});

function initApp() {
    // Duty Toggle
    const dutyToggle = document.getElementById('duty-status');
    const dutyText = document.getElementById('duty-text');
    
    dutyToggle.addEventListener('change', () => {
        state.isOnline = dutyToggle.checked;
        dutyText.innerText = state.isOnline ? 'ON DUTY' : 'OFF DUTY';
        dutyText.className = state.isOnline ? 'status-online' : 'status-offline';
        
        if (state.isOnline) {
            addLog('system', 'Status: ONLINE');
            simulateIncomingJob();
        } else {
            addLog('system', 'Status: OFFLINE');
            stopJobSimulation();
        }
    });

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        showView(target);
        
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

renderLogs();
}

// View Management
export function showView(viewName) {
    state.view = viewName;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    if (viewName === 'home') {
        updateHomeView();
    }
    
    if (viewName === 'earnings') renderLogs();
}
window.showView = showView;

function updateHomeView() {
    const console = document.querySelector('.idle-console');
    const radar = console.querySelector('.radar-animation');
    const statusText = console.querySelector('h3');
    const subText = console.querySelector('p');

    if (state.status === 'idle') {
        radar.style.display = 'flex';
        statusText.innerText = 'Searching for Trips...';
        subText.innerHTML = 'Area: <strong>Ranchi Airport Zone</strong>';
        
        const returnBtn = console.querySelector('.return-trip-btn');
        if (returnBtn) returnBtn.remove();
    } else {
        radar.style.display = 'none';
        statusText.innerText = 'Active Trip in Progress';
        subText.innerHTML = `Heading to: <strong>${state.activeTrip?.to || 'Destination'}</strong>`;
        
        // Optional: Add a "Return to Trip" button
        if (!console.querySelector('.return-trip-btn')) {
            const btn = document.createElement('button');
            btn.className = 'primary-btn mt-2 return-trip-btn';
            btn.style.maxWidth = '250px';
            btn.innerText = 'VIEW ACTIVE TRIP';
            btn.onclick = () => showView('trip');
            console.appendChild(btn);
        }
    }
}

// Job Alert System
let jobSimTimeout;
function simulateIncomingJob() {
    if (!state.isOnline || state.status !== 'idle') return;
    
    jobSimTimeout = setTimeout(() => {
        if (state.isOnline && state.status === 'idle') {
            showJobAlert();
        }
    }, 10000); // New job every 10 seconds if idle
}

function stopJobSimulation() {
    clearTimeout(jobSimTimeout);
}

function showJobAlert() {
    state.status = 'alert';
    const overlay = document.getElementById('job-alert-overlay');
    overlay.classList.add('active');
    
    // Random Job Data
    const destinations = ['Patratu Valley Resort', 'Netarhat Sunset Point', 'Dassam Falls', 'Tagore Hill'];
    const dest = destinations[Math.floor(Math.random() * destinations.length)];
    document.getElementById('alert-to').innerText = dest;
    
    startCountdown();
}

function startCountdown() {
    state.jobCountdown = 15;
    const textEl = document.getElementById('countdown-text');
    const pathEl = document.getElementById('countdown-path');
    
    state.countdownInterval = setInterval(() => {
        state.jobCountdown--;
        textEl.textContent = state.jobCountdown;
        
        const offset = (state.jobCountdown / 15) * 100;
        pathEl.style.strokeDasharray = `${offset}, 100`;

        if (state.jobCountdown <= 0) declineJob();
    }, 1000);
}

export function acceptJob() {
    clearInterval(state.countdownInterval);
    document.getElementById('job-alert-overlay').classList.remove('active');
    
    // Transition to Safety Checklist if first trip
    document.getElementById('safety-modal').classList.add('active');
}
window.acceptJob = acceptJob;

export function dismissSafety() {
    document.getElementById('safety-modal').classList.remove('active');
    startTripFlow();
}
window.dismissSafety = dismissSafety;

export function declineJob() {
    clearInterval(state.countdownInterval);
    document.getElementById('job-alert-overlay').classList.remove('active');
    state.status = 'idle';
    addLog('system', 'Job Declined');
    simulateIncomingJob();
}
window.declineJob = declineJob;

// Trip Lifecycle
function startTripFlow() {
    state.status = 'pickup';
    state.activeTrip = {
        to: document.getElementById('alert-to').innerText,
        step: 'pickup'
    };
    
    // Update UI
    showView('trip');
    document.getElementById('trip-to').innerText = state.activeTrip.to;
    document.getElementById('trip-action-btn').innerText = 'ARRIVED AT PICKUP';
    document.getElementById('trip-action-btn').className = 'primary-btn';
    
    // Highlight Pickup Step
    document.getElementById('step-pickup').classList.add('active');
    document.getElementById('step-dropoff').classList.remove('active');
    
    addLog('trip', `Assigned: ${state.activeTrip.to}`);
}

export function handleTripAction() {
    const btn = document.getElementById('trip-action-btn');
    
    if (state.status === 'pickup') {
        state.status = 'at-pickup';
        btn.innerText = 'START TRIP';
        btn.className = 'primary-btn';
        addLog('trip', 'Arrived at Pickup');
    } else if (state.status === 'at-pickup') {
        state.status = 'in-trip';
        btn.innerText = 'COMPLETE TRIP';
        btn.className = 'primary-btn complete-btn';
        document.getElementById('step-dropoff').classList.add('active');
        addLog('trip', 'Trip Started');
    } else if (state.status === 'in-trip') {
        completeTrip();
    }
}
window.handleTripAction = handleTripAction;

function completeTrip() {
    const payout = 1850;
    state.earnings += payout;
    state.status = 'idle';
    state.activeTrip = null;
    
    alert(`Trip Completed! Earnings of ₹${payout} logged to your wallet.`);
    addLog('trip', `Trip Completed - ₹${payout}`);
    
    updateHomeView(); // Clean up home view
    showView('home');
    simulateIncomingJob();
}

// Utility Actions
export function callParticipant(role) {
    alert(`Dialing ${role}... Connecting via Secure NHPL Bridge.`);
}
window.callParticipant = callParticipant;

export function openNav() {
    alert('Launching External Navigation... Routing to Destination.');
}
window.openNav = openNav;

export function addStop() {
    const reason = prompt("Enter reason for extra stop (Traveler approval required):");
    if (reason) {
        addLog('trip', `Extra stop added: ${reason}`);
        alert('Stop added to route. Fares will be recalculated.');
    }
}
window.addStop = addStop;

export function openChat() {
    alert('Opening Group Chat (Driver, Guest, Guide)...');
}
window.openChat = openChat;

export function confirmEndShift() {
    if (confirm("Are you sure you want to end your shift? All active earnings will be finalized.")) {
        alert("Shift Ended. Great work today!");
        location.reload();
    }
}
window.confirmEndShift = confirmEndShift;

// Logs UI
function addLog(type, msg) {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    state.logs.push({ time, type, msg });
}

function renderLogs() {
    const container = document.getElementById('logs-container');
    if (!container) return;
    
    container.innerHTML = state.logs.slice().reverse().map(log => `
        <div class="log-item">
            <div style="display:flex; align-items:center; gap:0.75rem;">
                <i class="ph ${log.type === 'trip' ? 'ph-map-pin' : 'ph-gear'} text-muted"></i>
                <span class="log-msg">${log.msg}</span>
            </div>
            <span class="time">${log.time}</span>
        </div>
    `).join('');
}
