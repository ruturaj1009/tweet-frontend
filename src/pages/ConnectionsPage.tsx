import React from 'react';
import { Search, UserPlus } from 'lucide-react';

interface User {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  isFollowing?: boolean;
}

export function ConnectionsPage() {
  const [activeTab, setActiveTab] = React.useState<'followers' | 'following' | 'suggested'>('followers');
  const [searchQuery, setSearchQuery] = React.useState('');

  const users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      handle: '@johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Software Developer | React Enthusiast',
      isFollowing: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      handle: '@janesmith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'UI/UX Designer | Creative Thinker',
    },
  ];

  const tabs = [
    { id: 'followers', label: 'Followers' },
    { id: 'following', label: 'Following' },
    { id: 'suggested', label: 'Suggested' },
  ];

  const handleFollow = (userId: number) => {
    // Handle follow/unfollow logic
    console.log('Toggle follow for user:', userId);
  };

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-10">
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <h1 className="text-xl font-bold mb-4 dark:text-white">Connect</h1>
          <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search people"
              className="flex-1 bg-transparent outline-none dark:text-white"
            />
          </div>
        </div>
        <div className="flex border-b border-gray-200 dark:border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-4 text-sm font-semibold relative ${
                activeTab === tab.id
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {users.map((user) => (
          <div key={user.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="font-bold dark:text-white hover:underline cursor-pointer">
                    {user.name}
                  </div>
                  <div className="text-gray-500">{user.handle}</div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{user.bio}</p>
                </div>
              </div>
              <button
                onClick={() => handleFollow(user.id)}
                className={`px-4 py-1.5 rounded-full font-bold transition-colors ${
                  user.isFollowing
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100'
                    : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}