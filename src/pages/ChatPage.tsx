import React from 'react';
import { Image, Send, Smile } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
  isMe: boolean;
}

interface ChatPageProps {
  userId: number;
}

export function ChatPage({ userId }: ChatPageProps) {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      content: "Hey, how are you?",
      sender: "John Doe",
      timestamp: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      content: "I'm good! How about you?",
      sender: "Me",
      timestamp: "10:31 AM",
      isMe: true,
    },
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: message,
      sender: "Me",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="min-h-screen border-x border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4 pl-16">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="John Doe"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="font-bold dark:text-white">John Doe</h1>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl p-3 ${
                msg.isMe
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 dark:text-white'
              }`}
            >
              <p>{msg.content}</p>
              <p className={`text-xs mt-1 ${msg.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400"
          >
            <Image size={20} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400"
          >
            <Smile size={20} />
          </button>
          <button
            type="submit"
            disabled={!message.trim()}
            className="p-2 text-blue-500 hover:text-blue-600 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}