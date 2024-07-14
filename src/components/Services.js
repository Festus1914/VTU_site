import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaMoon, FaBell } from 'react-icons/fa';

const ServicesSection = () => {
  const basicServices = [
    { name: 'Mini Website With Basic Features', price: 'Starting From ₦50k' },
    { name: 'Standard Website With All Features', price: 'Starting From ₦100k' },
    { name: 'Fingerprint Web View Android App & Playstore Upload', price: 'Starting From ₦30k' },
    { name: 'Fingerprint Web View iOS App & Playstore Upload', price: 'Starting From ₦70k' },
    { name: 'Standard Native Android App', price: 'Starting From ₦250k' },
    { name: 'Standard Native iOS App', price: 'Starting From ₦350k' },
  ];

  const valueAddedServices = [
    'Customized Design Starting From ₦30k',
    'Website Landing Page Starting From ₦15k',
    'Web Design And Development',
    'Mobile App Development',
    'Graphic Design',
    'Digital Marketing',
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR SERVICES
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="bg-white rounded-lg shadow-xl p-6 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <FaHome className="text-blue-500 text-2xl" />
                  <FaMoon className="text-blue-500 text-2xl" />
                  <div className="relative">
                    <FaBell className="text-blue-500 text-2xl" />
                    <motion.div
                      className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </div>
                </div>
                <h3 className="font-bold mb-2">Ibrahim (Agent)</h3>
                <p>Account Name: buyusuf31</p>
                <p>Account No: 5000812864</p>
                <p>Bank Name: Wema bank</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-xl p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-bold mb-2">Transactions</h3>
                <p className="text-sm text-gray-600 mb-4">Your last 20 transactions.</p>
                <motion.div
                  className="bg-pink-100 rounded p-3 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold">Account Upgrade</p>
                  <p className="text-sm text-gray-600">₦1000 • 22/06/2022</p>
                </motion.div>
                <motion.div
                  className="bg-blue-100 rounded p-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold">Wallet Credit</p>
                  <p className="text-sm text-gray-600">₦3000 • 21/06/2022</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Bills Payment With Ease</h2>
            <p className="text-xl text-pink-500 mb-4">What we do Best</p>

            <h3 className="text-2xl font-semibold mb-4">Basic Services</h3>
            <ul className="space-y-2 mb-8">
              {basicServices.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{service.name}</span>
                  <span className="ml-2 text-sm text-gray-600">{service.price}</span>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Other Value Added Services</h3>
            <ul className="space-y-2">
              {valueAddedServices.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + basicServices.length) }}
                >
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;