import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { ChatPage } from './ChatPage';

interface Message {
  id: number;
  user: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}

interface MessagesPageProps {
  onChatSelect: (userId: number) => void;
}

export function MessagesPage({ onChatSelect }: MessagesPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedChat, setSelectedChat] = React.useState<number | null>(null);
  const messages: Message[] = [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Hey, how are you?',
      time: '2h',
      unread: true,
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'The project looks great!',
      time: '1d',
    },
  ];

  if (selectedChat) {
    return (
      <div className="relative">
        <button 
          onClick={() => setSelectedChat(null)}
          className="absolute top-4 left-4 z-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <ChatPage userId={selectedChat} />
      </div>
    );
  }

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4">
        <h1 className="text-xl font-bold mb-4 dark:text-white">Messages</h1>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full">
          <div className="flex items-center p-3">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent ml-2 outline-none w-full dark:text-white"
            />
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            onClick={() => {
              setSelectedChat(message.id);
              onChatSelect(message.id);
            }}
          >
            <div className="flex items-start space-x-4">
              <img src={message.avatar} alt={message.user} className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold dark:text-white">{message.user}</span>
                    <span className="text-gray-500">· {message.time}</span>
                  </div>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-gray-500 line-clamp-1">{message.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}