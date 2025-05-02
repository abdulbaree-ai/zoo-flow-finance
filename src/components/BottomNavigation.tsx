
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BarChartIcon, PlusIcon, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg z-10">
      <div className="flex justify-around items-center h-16 px-4">
        <Link to="/" className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}>
          <HomeIcon size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link to="/transactions" className={`bottom-nav-item ${currentPath.includes('/transactions') ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
          <span className="text-xs mt-1">Transactions</span>
        </Link>
        
        <Link to="/add-transaction" className="bottom-nav-item z-20">
          <div className="bg-zoo-purple rounded-full p-3 transform -translate-y-4">
            <PlusIcon size={24} color="white" />
          </div>
        </Link>
        
        <Link to="/analytics" className={`bottom-nav-item ${currentPath.includes('/analytics') ? 'active' : ''}`}>
          <BarChartIcon size={20} />
          <span className="text-xs mt-1">Analytics</span>
        </Link>
        
        <Link to="/settings" className={`bottom-nav-item ${currentPath.includes('/settings') ? 'active' : ''}`}>
          <Settings size={20} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
