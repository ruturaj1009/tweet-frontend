import React from 'react';
import { Calendar } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="bg-gray-300 dark:bg-gray-700 h-48"></div>
      <div className="relative px-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="absolute -top-16 border-4 border-white dark:border-black h-32 w-32 rounded-full"
        />
        <div className="pt-20">
          <h1 className="text-xl font-bold dark:text-white">John Doe</h1>
          <div className="text-gray-500">@johndoe</div>
          <div className="flex items-center mt-2 text-gray-500">
            <Calendar size={16} className="mr-2" />
            <span>Joined March 2024</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <div>
              <span className="font-bold dark:text-white">520</span>
              <span className="text-gray-500 ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold dark:text-white">1.2K</span>
              <span className="text-gray-500 ml-1">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 mt-4">
        <div className="flex">
          <button className="flex-1 py-4 font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 relative">
            Tweets
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
          </button>
          <button className="flex-1 py-4 font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
            Replies
          </button>
          <button className="flex-1 py-4 font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
            Media
          </button>
          <button className="flex-1 py-4 font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
            Likes
          </button>
        </div>
      </div>
    </div>
  );
}