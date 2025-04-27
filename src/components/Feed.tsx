import React from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';
import { TweetCard } from './TweetCard';

interface Tweet {
  id: number;
  author: string;
  handle: string;
  content: string;
  time: string;
  avatar: string;
  likes?: number;
  retweets?: number;
}

function ComposeTweet() {
  const [tweet, setTweet] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tweet.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setTweet('');
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 p-4">
      <div className="flex space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Your avatar"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              placeholder="What's happening?"
              className="w-full border-b border-gray-200 dark:border-gray-800 focus:border-blue-500 resize-none outline-none mb-4 min-h-[100px] bg-transparent dark:text-white"
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button type="button" className="p-2 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full text-blue-500">
                  <Image size={20} />
                </button>
                <button type="button" className="p-2 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full text-blue-500">
                  <Smile size={20} />
                </button>
                <button type="button" className="p-2 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full text-blue-500">
                  <Calendar size={20} />
                </button>
                <button type="button" className="p-2 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full text-blue-500">
                  <MapPin size={20} />
                </button>
              </div>
              <button
                type="submit"
                disabled={!tweet.trim() || isSubmitting}
                className="bg-blue-500 text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Posting...' : 'Tweet'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Feed() {
  const [activeTab, setActiveTab] = React.useState<'for-you' | 'following'>('for-you');
  const [tweets, setTweets] = React.useState<Tweet[]>([
    {
      id: 1,
      author: 'John Doe',
      handle: '@johndoe',
      content: 'Just deployed my first React application! 🚀',
      time: '2h',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      likes: 15,
      retweets: 5,
    },
    {
      id: 2,
      author: 'Jane Smith',
      handle: '@janesmith',
      content: 'Learning Tailwind CSS has been a game changer for my development workflow! 💻',
      time: '4h',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      likes: 24,
      retweets: 8,
    },
  ]);

  const handleLike = (tweetId: number) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, likes: (tweet.likes || 0) + 1 }
        : tweet
    ));
  };

  const handleRetweet = (tweetId: number) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, retweets: (tweet.retweets || 0) + 1 }
        : tweet
    ));
  };

  return (
    <div className="border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex">
          <button
            onClick={() => setActiveTab('for-you')}
            className={`flex-1 py-4 text-sm font-semibold relative ${
              activeTab === 'for-you' ? 'text-black dark:text-white' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900'
            }`}
          >
            For you
            {activeTab === 'for-you' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`flex-1 py-4 text-sm font-semibold relative ${
              activeTab === 'following' ? 'text-black dark:text-white' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900'
            }`}
          >
            Following
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>
      </div>
      <ComposeTweet />
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            {...tweet}
            onLike={handleLike}
            onRetweet={handleRetweet}
          />
        ))}
      </div>
    </div>
  );
}