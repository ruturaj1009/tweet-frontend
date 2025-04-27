import React from 'react';

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'liked your Tweet',
      time: '2h',
    },
    {
      id: 2,
      type: 'retweet',
      user: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'retweeted your Tweet',
      time: '4h',
    },
  ];

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4">
        <h1 className="text-xl font-bold dark:text-white">Notifications</h1>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <div className="flex items-start space-x-4">
              <img src={notification.avatar} alt={notification.user} className="h-12 w-12 rounded-full" />
              <div>
                <span className="font-bold dark:text-white">{notification.user}</span>
                <span className="ml-2 text-gray-500">{notification.content}</span>
                <div className="text-sm text-gray-500 mt-1">{notification.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}