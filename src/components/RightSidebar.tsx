import React from 'react';
import { Search } from 'lucide-react';

function Trending() {
  const trends = [
    { topic: '#ReactJS', tweets: '125K' },
    { topic: '#TailwindCSS', tweets: '98K' },
    { topic: '#WebDev', tweets: '56K' },
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">What's happening</h2>
      {trends.map((trend, index) => (
        <div 
          key={index} 
          className="mb-4 last:mb-0 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <div className="font-bold">{trend.topic}</div>
          <div className="text-gray-500">{trend.tweets} Tweets</div>
        </div>
      ))}
    </div>
  );
}

export function RightSidebar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="w-1/3 p-4 hidden lg:block">
      <div className="fixed w-80">
        <div className="bg-black-100 outline outline-gray-600 rounded-full mb-4">
          <div className="flex items-center p-3">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent ml-2 outline-none w-full"
            />
          </div>
        </div>
        <Trending />
      </div>
    </div>
  );
}