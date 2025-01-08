// Initialize Charts
document.addEventListener('DOMContentLoaded', () => {
    // Trends Chart
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Identifications',
                data: [12, 19, 15, 25, 22, 30],
                borderColor: 'rgb(59, 130, 246)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Mock Camera Feed Updates
    setupMockCameraFeeds();

    // Setup Alert System
    setupAlertSystem();
});

// Mock Camera Feed Updates
function setupMockCameraFeeds() {
    const cameras = document.querySelectorAll('.aspect-video');
    cameras.forEach(camera => {
        // Simulate camera feed by changing background color slightly
        setInterval(() => {
            const gray = Math.floor(Math.random() * 10) + 195; // Random gray between 195-205
            camera.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
        }, 1000);
    });
}

// Alert System
function setupAlertSystem() {
    // Simulate random alerts
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance of alert
            showAlert();
        }
    }, 30000); // Check every 30 seconds
}

// Show Alert Modal
function showAlert() {
    const modal = document.getElementById('alertModal');
    modal.classList.remove('hidden');
}

// Close Alert Modal
function closeAlertModal() {
    const modal = document.getElementById('alertModal');
    modal.classList.add('hidden');
}

// Notification System
function showNotification(message, type = 'info') {
    const notificationDiv = document.getElementById('notification');
    const notification = document.createElement('div');
    
    const baseClasses = 'p-4 rounded-lg shadow-lg mb-4 transition-opacity duration-500';
    const typeClasses = {
        'success': 'bg-green-500 text-white',
        'error': 'bg-red-500 text-white',
        'info': 'bg-blue-500 text-white',
        'warning': 'bg-yellow-500 text-white'
    };

    notification.className = `${baseClasses} ${typeClasses[type]}`;
    notification.textContent = message;

    notificationDiv.appendChild(notification);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notificationDiv.removeChild(notification);
        }, 500);
    }, 5000);
}

// Search Functionality
document.querySelector('.bg-blue-600').addEventListener('click', function() {
    showNotification('Searching database...', 'info');
    // Simulate search delay
    setTimeout(() => {
        showNotification('Search completed', 'success');
    }, 2000);
});

// Real-time Updates
function setupRealTimeUpdates() {
    // Simulate real-time stat updates
    setInterval(() => {
        // Update random stats
        const stats = document.querySelectorAll('.text-3xl');
        const randomStat = stats[Math.floor(Math.random() * stats.length)];
        const currentValue = parseInt(randomStat.textContent);
        randomStat.textContent = currentValue + Math.floor(Math.random() * 3) - 1;
    }, 5000);
}

// Initialize real-time updates
setupRealTimeUpdates();
