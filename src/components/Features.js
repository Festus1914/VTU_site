import React from 'react';
import { motion } from 'framer-motion';

const features = [
  'Airtime Purchase', 'Data Purchase', 'Cable TV Subscription', 'Electricity Bill',
  'Exam Pin', 'Recharge Card', 'Data Card', 'Smile Topup',
  'Alpha Topup', 'Airtime Swap', 'Referral System', 'NIN Verification',
  'BVN Verification', 'Bank Withdrawal', 'Contact List', 'Finger Print Login',
  'Payment Gateway', 'API Integration', 'Standalone', 'Affiliate',
  'Android App', 'iOS App', 'Web View App', 'Native App'
];

const FeatureCard = ({ feature }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {feature}
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
        id="features"
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FEATURES
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some Software Features
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;