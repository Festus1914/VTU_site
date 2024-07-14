import React from 'react';
import { motion } from 'framer-motion';
import { FaRegIdCard, FaBell, FaCog } from 'react-icons/fa';

const ExploreSection = () => {
  const exploreItems = [
    {
      icon: <FaRegIdCard />,
      title: 'Account Registration',
      description: 'Set up your account quickly and easily to access all our features and personalized support.',
    },
    {
      icon: <FaBell />,
      title: 'Community Hub',
      description: 'Join our thriving community of users to share insights, get tips, and grow your business network.',
    },
    {
      icon: <FaCog />,
      title: 'Knowledge Base',
      description: 'Access our comprehensive resources for troubleshooting, best practices, and expert advice.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
        id='explore'
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Platform
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the tools and resources to enhance your experience
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {exploreItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl text-white">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
              <div className="bg-gray-50 p-4 text-center">
                <motion.button
                  className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;