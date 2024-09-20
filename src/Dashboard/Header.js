import React from 'react';
import { Phone, AlertCircle, Eye, EyeOff } from 'lucide-react';
import Avatar from './Avatar'; // Adjust the import path as necessary
import NotificationBadge from './NotificationBadge'; 

const Header = ({ userName, notifications, showBalance, toggleBalanceVisibility }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-b-3xl shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar fallback={userName.charAt(0)} />
          <div>
            <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
            <p className="text-sm">Manage your account and explore the services.</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="relative">
            <Phone size={20} />
            {notifications > 0 && <NotificationBadge count={notifications} />}
          </button>
          <button className="relative">
            <AlertCircle size={20} />
            {notifications > 0 && <NotificationBadge count={notifications} />}
          </button>
          <button onClick={toggleBalanceVisibility} className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center space-x-1">
            {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>{showBalance ? 'Hide' : 'Show'} Balance</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;