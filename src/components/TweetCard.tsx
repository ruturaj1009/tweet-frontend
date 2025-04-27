import React, { useState } from 'react';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

interface TweetProps {
  id: number;
  author: string;
  handle: string;
  content: string;
  time: string;
  avatar: string;
  likes?: number;
  retweets?: number;
  onLike: (id: number) => void;
  onRetweet: (id: number) => void;
}

export function TweetCard({ id, author, handle, content, time, avatar, likes, retweets, onLike, onRetweet }: TweetProps) {
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    // Handle comment submission
    console.log('New comment:', comment);
    setComment('');
    setShowCommentBox(false);
  };

  return (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
      <div className="flex space-x-3">
        <img
          src={avatar}
          alt={author}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold hover:underline cursor-pointer dark:text-white">{author}</span>
            <span className="text-gray-500">{handle}</span>
            <span className="text-gray-500">· {time}</span>
          </div>
          <p className="mt-1 dark:text-white">{content}</p>
          <div className="flex justify-between mt-3 max-w-md">
            <button 
              onClick={() => setShowCommentBox(!showCommentBox)}
              className="text-gray-500 hover:text-blue-500 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
            </button>
            <button 
              onClick={() => onRetweet(id)}
              className="text-gray-500 hover:text-green-500 flex items-center space-x-2"
            >
              <Repeat2 size={20} />
              {retweets && <span>{retweets}</span>}
            </button>
            <button 
              onClick={() => onLike(id)}
              className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
            >
              <Heart size={20} />
              {likes && <span>{likes}</span>}
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <Share size={20} />
            </button>
          </div>

          {showCommentBox && (
            <form onSubmit={handleComment} className="mt-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tweet your reply"
                className="w-full border border-gray-200 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                rows={2}
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={!comment.trim()}
                  className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  Reply
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}