import React from 'react';
import { Search, Users, MessageSquare } from 'lucide-react';
import { TweetCard } from '../components/TweetCard';

interface SearchResult {
  type: 'tweet' | 'user';
  id: number;
  content?: string;
  author: string;
  handle: string;
  avatar: string;
  time?: string;
  likes?: number;
  retweets?: number;
  followers?: number;
  following?: number;
}

export function SearchResultsPage() {
  const [activeTab, setActiveTab] = React.useState<'top' | 'latest' | 'people' | 'media'>('top');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const results: SearchResult[] = [
    {
      type: 'tweet',
      id: 1,
      content: 'Just learned about the new React 18 features! 🚀',
      author: 'John Doe',
      handle: '@johndoe',
      time: '2h',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      likes: 15,
      retweets: 5,
    },
    {
      type: 'user',
      id: 2,
      author: 'Jane Smith',
      handle: '@janesmith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      followers: 1200,
      following: 800,
    },
  ];

  const tabs = [
    { id: 'top', label: 'Top' },
    { id: 'latest', label: 'Latest' },
    { id: 'people', label: 'People' },
    { id: 'media', label: 'Media' },
  ];

  const handleLike = (id: number) => {
    // Handle like action
    console.log('Liked tweet:', id);
  };

  const handleRetweet = (id: number) => {
    // Handle retweet action
    console.log('Retweeted:', id);
  };

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-10">
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Twitter"
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
        {results.map((result) => (
          result.type === 'tweet' ? (
            <TweetCard
              key={result.id}
              id={result.id}
              author={result.author}
              handle={result.handle}
              content={result.content!}
              time={result.time!}
              avatar={result.avatar}
              likes={result.likes}
              retweets={result.retweets}
              onLike={handleLike}
              onRetweet={handleRetweet}
            />
          ) : (
            <div key={result.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={result.avatar}
                    alt={result.author}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold dark:text-white">{result.author}</div>
                    <div className="text-gray-500">{result.handle}</div>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}