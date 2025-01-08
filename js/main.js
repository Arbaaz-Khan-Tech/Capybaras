// Notification System
function showNotification(message, type = 'info') {
    const notificationDiv = document.getElementById('notification');
    const notification = document.createElement('div');
    
    // Set notification styles based on type
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

// Form Handling
document.addEventListener('DOMContentLoaded', () => {
    // Aadhar Form Submission
    const aadharForm = document.querySelector('#aadhar form');
    if (aadharForm) {
        aadharForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Verification process initiated', 'info');
            // Add actual verification logic here
        });
    }

    // Search Form Handling
    const searchButton = document.querySelector('#search button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchInput = document.querySelector('#search input').value;
            if (searchInput.trim()) {
                showNotification('Searching database...', 'info');
                // Add actual search logic here
            } else {
                showNotification('Please enter search criteria', 'warning');
            }
        });
    }
});

// Sample function to demonstrate notifications
function testNotifications() {
    showNotification('Welcome to Missing Person Detection System', 'info');
    setTimeout(() => {
        showNotification('Successfully verified Aadhar details', 'success');
    }, 2000);
    setTimeout(() => {
        showNotification('Error connecting to server', 'error');
    }, 4000);
    setTimeout(() => {
        showNotification('Please update your contact information', 'warning');
    }, 6000);
}

// Uncomment to test notifications
// testNotifications();
