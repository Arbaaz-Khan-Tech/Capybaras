import React from 'react';

const Notifications = ({ notifications }) => {
    return (
        <div className="space-y-4">
            {notifications.map((notification, index) => (
                <div key={index} className={`p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-100 text-green-800' : notification.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                    <strong>{notification.title}</strong>
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Notifications;