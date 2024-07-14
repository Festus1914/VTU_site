import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    { icon: <FaRocket />, title: 'Fast Transactions', description: 'Experience lightning-fast top-ups with our optimized system.' },
    { icon: <FaShieldAlt />, title: 'Secure Platform', description: 'Your data and transactions are protected with state-of-the-art security.' },
    { icon: <FaGlobe />, title: 'Global Coverage', description: 'Top up mobile credits across multiple countries and carriers.' },
    { icon: <FaUsers />, title: 'User-Friendly', description: 'Intuitive interface designed for ease of use for all customers.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      id="about"
      className="bg-gray-50 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Our Virtual Top Up Service</h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We are dedicated to providing a seamless and efficient mobile credit top-up experience for users worldwide. Our platform connects you to a vast network of mobile operators, allowing instant recharges anytime, anywhere.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="text-4xl text-blue-500 mb-4"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatDelay: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-blue-600 text-white p-8 rounded-lg shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-lg mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            To revolutionize the way people recharge their mobile credits by providing a fast, secure, and accessible platform that connects users to mobile operators worldwide.
          </motion.p>
          <motion.h3 
            className="text-2xl font-semibold mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Why Choose Us?
          </motion.h3>
          <motion.ul 
            className="list-disc list-inside space-y-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              'Extensive network of mobile operators across multiple countries',
              '24/7 customer support to assist you with any queries',
              'Competitive rates and transparent pricing',
              'Regular promotions and loyalty rewards for our valued customers'
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
