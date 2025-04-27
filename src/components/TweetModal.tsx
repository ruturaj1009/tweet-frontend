import React from 'react';
import { Image, Smile, Calendar, MapPin, X } from 'lucide-react';

interface TweetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TweetModal({ isOpen, onClose }: TweetModalProps) {
  const [tweet, setTweet] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tweet.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setTweet('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs  outline outline-gray-600 flex items-center justify-center z-50 p-4">
      <div className="bg-black backdrop-blur-md outline outline-gray-600 rounded-2xl w-full max-w-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose} className="p-2 hover:bg-blue-100 rounded-full">
            <X size={20} />
          </button>
          <button
            onClick={handleSubmit}
            disabled={!tweet.trim() || isSubmitting}
            className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Posting...' : 'Tweet'}
          </button>
        </div>
        <div className="p-4">
          <div className="flex space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Your avatar"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex-1">
              <textarea
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
                placeholder="What's happening?"
                className="w-full resize-none outline-none mb-4 min-h-[150px] text-xl"
                autoFocus
              />
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-blue-50 rounded-full text-blue-500">
                    <Image size={20} />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded-full text-blue-500">
                    <Smile size={20} />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded-full text-blue-500">
                    <Calendar size={20} />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded-full text-blue-500">
                    <MapPin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}