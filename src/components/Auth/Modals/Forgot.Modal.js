// Modal.js
import React from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '0',
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Modal = ({ showModal, closeModal, message, messageType }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal}
    >
      <motion.div
        className={`bg-white rounded-lg shadow-lg p-8 max-w-lg w-full ${messageType === 'success' ? 'border-green-600' : 'border-red-600'} border-t-8`}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <p className={`text-lg font-semibold ${messageType === 'success' ? 'text-green-700' : 'text-red-700'}`}>
            {message}
          </p>
          <button
            onClick={closeModal}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;