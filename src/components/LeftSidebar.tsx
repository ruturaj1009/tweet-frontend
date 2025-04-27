import {
  Home,
  Search,
  Bell,
  Mail,
  User,
  BookmarkIcon,
  Settings,
  Menu,
  Users,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface LeftSidebarProps {
  className?: string;
  onTweetClick: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
  onSearch?: (query: string) => void;
}

export function LeftSidebar({
  className,
  onTweetClick,
  onPageChange,
  currentPage,
  onSearch,
}: LeftSidebarProps) {
  const menuItems = [
    { icon: <Home size={24} />, label: "Home", id: "home" },
    { icon: <Search size={24} />, label: "Explore", id: "explore" },
    { icon: <Bell size={24} />, label: "Notifications", id: "notifications" },
    { icon: <Mail size={24} />, label: "Messages", id: "messages" },
    { icon: <BookmarkIcon size={24} />, label: "Bookmarks", id: "bookmarks" },
    { icon: <User size={24} />, label: "Profile", id: "profile" },
    { icon: <Users size={24} />, label: "Connect", id: "connections" },
    { icon: <Settings size={24} />, label: "Settings", id: "settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`${className} p-4`}>
        <div className="fixed">
          <div className="mb-8">
            <Menu className="h-8 w-8 text-blue-500" />
          </div>
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full w-full text-left mb-2 transition-colors ${
                  currentPage === item.id ? "font-bold" : ""
                }`}
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {item.icon}
                </span>
                <span className="hidden xl:inline text-lg dark:text-white">
                  {item.label}
                </span>
              </button>
            ))}
            <div className="p-3">
              <ThemeToggle />
            </div>
          </nav>
          <button
            onClick={onTweetClick}
            className="bg-blue-500 text-white rounded-full p-3 w-full mt-4 font-bold hover:bg-blue-600 transition-colors"
          >
            <span className="hidden xl:inline">Tweet</span>
            <span className="xl:hidden">+</span>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 sm:hidden z-10">
        <nav className="flex justify-around p-2">
          {menuItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`p-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full ${
                currentPage === item.id
                  ? "text-blue-500"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Tweet Button */}
      <button
        onClick={onTweetClick}
        className="fixed bottom-20 right-4 sm:hidden bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors z-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </>
  );
}
