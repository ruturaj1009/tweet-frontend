import React from 'react';
import { LeftSidebar } from './components/LeftSidebar';
import { Feed } from './components/Feed';
import { RightSidebar } from './components/RightSidebar';
import { TweetModal } from './components/TweetModal';
import { ThemeProvider } from './context/ThemeContext';
import { ExplorePage } from './pages/ExplorePage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagesPage } from './pages/MessagesPage';
import { UpdateProfilePage } from './pages/UpdateProfilePage';
import { ChatPage } from './pages/ChatPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ConnectionsPage } from './pages/ConnectionsPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isTweetModalOpen, setIsTweetModalOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedChat, setSelectedChat] = React.useState<number | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <LoginPage onLogin={() => setIsAuthenticated(true)} />
        </div>
      </ThemeProvider>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'explore':
        return <ExplorePage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'messages':
        return <MessagesPage onChatSelect={setSelectedChat} />;
      case 'settings':
        return <UpdateProfilePage />;
      case 'search':
        return <SearchResultsPage />;
      case 'connections':
        return <ConnectionsPage />;
      default:
        return <Feed />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark pb-16 sm:pb-0">
        <div className="container mx-auto flex">
          <LeftSidebar 
            className="w-20 xl:w-1/4 hidden sm:block" 
            onTweetClick={() => setIsTweetModalOpen(true)}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
            onSearch={(query: string) => {
              setSearchQuery(query);
              setCurrentPage('search');
            }}
          />
          <main className="min-h-screen w-full sm:w-[600px] mx-auto">
            {renderPage()}
          </main>
          <RightSidebar />
        </div>
        <TweetModal 
          isOpen={isTweetModalOpen}
          onClose={() => setIsTweetModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;