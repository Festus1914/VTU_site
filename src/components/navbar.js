import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import useScrollPosition from './useScrollPosition';
import Logo from '../Assets/dayemdot_logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollPosition = useScrollPosition();
  const navItems = ['Home', 'About', 'Features', 'Services', 'Explore', 'Contact'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setIsOpen(false);
      }
    }
  };

  const navbarVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
                  src={Logo} 
                  alt="Logo" 
                  className="flex items-center h-12  bg-blue-700"
                />
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8 mr-10 font-bold text-3xl">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`py-2 px-4 text-lg font-bold rounded-lg transition duration-300 
                    ${scrollPosition > 50 ? 'text-gray-800' : 'text-white'} 
                    hover:bg-blue-500 hover:text-white
                    ${item === 'Contact' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
                {item === 'Contact' && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Get in touch with us!
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full ${
                scrollPosition > 50 ? 'text-gray-800' : 'text-white'
              } hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="lg:hidden bg-white/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`block w-full px-3 py-2 rounded-full text-lg font-bold 
                    text-gray-900 hover:bg-blue-500 hover:text-white
                    ${item === 'Contact' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
