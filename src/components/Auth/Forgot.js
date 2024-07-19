import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import Modal from '../Auth/Modals/Forgot.Modal';
import { AnimatePresence } from 'framer-motion';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessageType('success');
        setMessage('Password reset email sent successfully.');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessageType('error');
        setMessage(errorMessage);
      });
  };

  const closeModal = () => {
    setMessage(null);
    setMessageType(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="absolute inset-0"></div>
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden z-10">
        <div className="p-8">
          <div className="text-center mb-8">
            <FaMobileAlt className="mx-auto text-4xl text-blue-600" />
            <h1 className="mt-4 text-2xl font-bold text-gray-800">Forgot Password</h1>
            <p className="mt-2 text-sm text-gray-600">Enter your email to reset your password</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Reset Password
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Remember your password? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
      <AnimatePresence>
        {message && (
          <Modal
            showModal={!!message}
            closeModal={closeModal}
            message={message}
            messageType={messageType}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForgotPasswordPage;
