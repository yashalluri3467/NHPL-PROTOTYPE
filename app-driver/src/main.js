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
window.showView = function(viewName) {
    state.view = viewName;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`view-${viewName}`).classList.add('active');
    
    if (viewName === 'earnings') renderLogs();
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

window.acceptJob = function() {
    clearInterval(state.countdownInterval);
    document.getElementById('job-alert-overlay').classList.remove('active');
    
    // Transition to Safety Checklist if first trip
    document.getElementById('safety-modal').classList.add('active');
}

window.dismissSafety = function() {
    document.getElementById('safety-modal').classList.remove('active');
    startTripFlow();
}

window.declineJob = function() {
    clearInterval(state.countdownInterval);
    document.getElementById('job-alert-overlay').classList.remove('active');
    state.status = 'idle';
    addLog('system', 'Job Declined');
    simulateIncomingJob();
}

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

window.handleTripAction = function() {
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

function completeTrip() {
    const payout = 1850;
    state.earnings += payout;
    state.status = 'idle';
    state.activeTrip = null;
    
    alert(`Trip Completed! Earnings of ₹${payout} logged to your wallet.`);
    addLog('trip', `Trip Completed - ₹${payout}`);
    
    showView('home');
    simulateIncomingJob();
}

// Utility Actions
window.callParticipant = function(role) {
    alert(`Dialing ${role}... Connecting via Secure NHPL Bridge.`);
}

window.openNav = function() {
    alert('Launching External Navigation... Routing to Destination.');
}

window.addStop = function() {
    const reason = prompt("Enter reason for extra stop (Traveler approval required):");
    if (reason) {
        addLog('trip', `Extra stop added: ${reason}`);
        alert('Stop added to route. Fares will be recalculated.');
    }
}

window.openChat = function() {
    alert('Opening Group Chat (Driver, Guest, Guide)...');
}

window.confirmEndShift = function() {
    if (confirm("Are you sure you want to end your shift? All active earnings will be finalized.")) {
        alert("Shift Ended. Great work today!");
        location.reload();
    }
}

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
