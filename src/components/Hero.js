import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../Assets/mobile1.jpg';
import Navbar from '../components/navbar';

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-24 md:py-32 overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
            id='/'
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Revolutionize Your <span className="text-yellow-300">Payments</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-blue-100 max-w-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Experience seamless transactions with our state-of-the-art payment solution. Simplify your finances, secure your data, and accelerate your business growth.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.button 
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 hover:text-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={HeroImage} 
                  alt="Payment solution interface" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-30 rounded-lg"></div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-50 z-0 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-400 rounded-full opacity-50 z-0 animate-bounce"></div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;