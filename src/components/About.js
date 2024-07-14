import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    { icon: <FaRocket />, title: 'Fast Transactions', description: 'Experience lightning-fast top-ups with our optimized system.' },
    { icon: <FaShieldAlt />, title: 'Secure Platform', description: 'Your data and transactions are protected with state-of-the-art security.' },
    { icon: <FaGlobe />, title: 'Global Coverage', description: 'Top up mobile credits across multiple countries and carriers.' },
    { icon: <FaUsers />, title: 'User-Friendly', description: 'Intuitive interface designed for ease of use for all customers.' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const parallaxVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <motion.div 
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <div className="container mx-auto px-4 py-24">
        <motion.div variants={parallaxVariants}>
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">About Our Virtual Top Up Service</h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            We are dedicated to providing a seamless and efficient mobile credit top-up experience for users worldwide. Our platform connects you to a vast network of mobile operators, allowing instant recharges anytime, anywhere.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="text-5xl text-blue-500 mb-6"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatDelay: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative bg-blue-600 text-white p-12 rounded-3xl shadow-2xl overflow-hidden"
          variants={parallaxVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30"
            initial={{ scale: 0, borderRadius: '100%' }}
            animate={{ scale: 2, borderRadius: '0%' }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              To revolutionize the way people recharge their mobile credits by providing a fast, secure, and accessible platform that connects users to mobile operators worldwide.
            </motion.p>
            <motion.h3 
              className="text-3xl font-semibold mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Why Choose Us?
            </motion.h3>
            <motion.ul 
              className="list-none space-y-4"
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
                  className="flex items-center"
                >
                  <motion.div
                    className="w-2 h-2 bg-yellow-300 rounded-full mr-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 300, damping: 10 }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;