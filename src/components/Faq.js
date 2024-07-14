import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const faqData = [
  {
    category: "Account Access",
    icon: "🔐",
    questions: [
      {
        question: "How do I access my dashboard?",
        answer: "Log in through our secure portal at app.ourplatform.com. You'll need to accept our terms of service upon first login."
      },
      {
        question: "Is two-factor authentication available?",
        answer: "Yes, we offer 2FA via SMS, email, or authenticator apps for enhanced security."
      }
    ]
  },
  {
    category: "Support",
    icon: "🛟",
    questions: [
      {
        question: "What are your support hours?",
        answer: "Our support team is available 24/7 via email. Live chat is available on weekdays from 9 AM to 6 PM EST."
      },
      {
        question: "Do you offer phone support?",
        answer: "Phone support is available for enterprise customers. Please contact your account manager for details."
      }
    ]
  },
  {
    category: "Billing",
    icon: "💳",
    questions: [
      {
        question: "How can I check my account balance?",
        answer: "You can view your balance in real-time through our mobile app or web dashboard. We also offer SMS balance checks."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, bank transfers, and select cryptocurrencies including Bitcoin and Ethereum."
      }
    ]
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundColor: isOpen ? "rgba(249, 250, 251, 0.8)" : "transparent",
      transition: { duration: 0.3 }
    });
  }, [isOpen, controls]);

  return (
    <motion.div 
      className="border-b border-gray-200 py-4"
      initial={false}
      animate={controls}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-indigo-600"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Stay Informed</h2>
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Find quick answers to common queries about our platform. If you need further assistance, our support team is always ready to help.
        </p>
      </motion.div>

      <motion.div 
        className="mb-8 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === "All" ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-gray-800 hover:bg-gray-100"}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {faqData.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category.category ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-gray-800 hover:bg-gray-100"}`}
            onClick={() => setActiveCategory(category.category)}
          >
            {category.icon} {category.category}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className="space-y-8 bg-white shadow-xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {faqData.map((category, categoryIndex) => (
          <AnimatePresence key={categoryIndex}>
            {(activeCategory === "All" || activeCategory === category.category) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-3xl mr-2">{category.icon}</span> {category.category}
                </h3>
                {category.questions.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a href="#contact" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default FAQ;