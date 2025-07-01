'use client';
import React, { useState } from 'react';

const Page = () => {
    // Sample data for notifications
    const notifications = [
        {
            id: 1,
            title: 'Welcome to your profile!',
            message: 'You have successfully created your account. Start exploring the features.',
            timestamp: '2025-07-01 09:00',
            status: 'unread',
        },
        {
            id: 2,
            title: 'New update available',
            message: 'A new version of the app is now available. Please update to enjoy new features.',
            timestamp: '2025-07-01 11:30',
            status: 'unread',
        },
        {
            id: 3,
            title: 'Profile updated',
            message: 'Your profile has been successfully updated. Review the changes.',
            timestamp: '2025-06-30 14:50',
            status: 'read',
        },
    ];

    const [notificationsList, setNotificationsList] = useState(notifications);

    const handleNotificationClick = (id) => {
        // Mark the notification as read when clicked
        const updatedNotifications = notificationsList.map((notification) =>
            notification.id === id
                ? { ...notification, status: 'read' }
                : notification
        );
        setNotificationsList(updatedNotifications);
    };

    return (
        <div className="md:p-6 p-2">
            <h2 className="text-3xl font-semibold mb-6">Notifications</h2>

            {/* List of notifications */}
            <div className="space-y-4">
                {notificationsList.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-4 border rounded-lg flex items-center justify-between ${notification.status === 'unread' ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-300'}`}
                        onClick={() => handleNotificationClick(notification.id)}
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{notification.title}</h3>
                            <p className="text-gray-700">{notification.message}</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 mt-2">
                            <span className="text-sm text-gray-500">{notification.timestamp}</span>
                            <span
                                className={`text-xs font-semibold px-2 py-1 rounded-full ${notification.status === 'unread' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                                    }`}
                            >
                                {notification.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
