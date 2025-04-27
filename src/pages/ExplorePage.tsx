import React from 'react';
import { Search } from 'lucide-react';

export function ExplorePage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const trends = [
    { category: 'Technology', topic: '#ReactJS', tweets: '125K' },
    { category: 'Programming', topic: '#TypeScript', tweets: '89K' },
    { category: 'Web Development', topic: '#TailwindCSS', tweets: '56K' },
    { category: 'Tech News', topic: 'ChatGPT', tweets: '234K' },
    { category: 'Programming', topic: '#JavaScript', tweets: '167K' },
  ];

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
          <div className="flex items-center p-3">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent ml-2 outline-none w-full dark:text-white"
            />
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {trends.map((trend, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer">
            <div className="text-sm text-gray-500">{trend.category}</div>
            <div className="font-bold dark:text-white">{trend.topic}</div>
            <div className="text-sm text-gray-500">{trend.tweets} Tweets</div>
          </div>
        ))}
      </div>
    </div>
  );
}