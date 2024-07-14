import React from 'react';
import { motion } from 'framer-motion';
import ServiceImage from '../Assets/app2.png';

const ServicesSection = () => {
  const services = [
    { name: 'Mini Website With Basic Features', price: 'Starting From ₦50k', category: 'Web Development' },
    { name: 'Standard Website With All Features', price: 'Starting From ₦100k', category: 'Web Development' },
    { name: 'Fingerprint Web View Android App & Playstore Upload', price: 'Starting From ₦30k', category: 'Mobile Development' },
    { name: 'Fingerprint Web View iOS App & Playstore Upload', price: 'Starting From ₦70k', category: 'Mobile Development' },
    { name: 'Standard Native Android App', price: 'Starting From ₦250k', category: 'Mobile Development' },
    { name: 'Standard Native iOS App', price: 'Starting From ₦350k', category: 'Mobile Development' },
    { name: 'Customized Design', price: 'Starting From ₦30k', category: 'Design' },
    { name: 'Website Landing Page', price: 'Starting From ₦15k', category: 'Web Development' },
    { name: 'Digital Marketing', price: 'Custom Quote', category: 'Marketing' },
    { name: 'Graphic Design', price: 'Custom Quote', category: 'Design' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div 
      id='services'
      className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Our Services
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <motion.div
            className="w-full lg:w-1/3"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={ServiceImage} alt="Services" className="rounded-2xl shadow-2xl" />
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-20 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold mt-8 mb-4"
              variants={itemVariants}
            >
              Bills Payment With Ease
            </motion.h2>
            <motion.p 
              className="text-xl text-pink-500 mb-4"
              variants={itemVariants}
            >
              What we do Best
            </motion.p>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              Our services are designed to streamline your digital presence and optimize your business operations. From web development to mobile apps, we've got you covered.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-500 rounded-full mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.category}</p>
                <p className="text-blue-500 font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;