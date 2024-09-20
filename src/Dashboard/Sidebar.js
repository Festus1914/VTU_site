import React, { useState } from 'react';
import { Home, User, History, MoreHorizontal, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sidebar Component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden p-2 text-gray-700 focus:outline-none hover:bg-gray-200 rounded transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 w-64 bg-gray-800 h-screen p-6 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-20`}
      >
        {/* Sidebar Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Sidebar Links */}
        <ul>
          {[
            { to: '/dashboard', label: 'Home', icon: <Home className="mr-3" /> },
            { to: '/profile', label: 'Profile', icon: <User className="mr-3" /> },
            { to: '/history', label: 'History', icon: <History className="mr-3" /> },
            { to: '/more', label: 'More', icon: <MoreHorizontal className="mr-3" /> },
          ].map(({ to, label, icon }) => (
            <li key={label} className="mb-4">
              <Link 
                to={to} 
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-colors"
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
