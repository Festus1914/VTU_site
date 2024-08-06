import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Modal from './Modals/SignupModal';
import { AnimatePresence } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        const user = userCredential.user;
        if (user.emailVerified) {
          setMessageType('success');
          setMessage('Logged in successfully.');
          // Delay the redirection to show the success message
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000); // 3 seconds delay
        } else {
          setMessageType('error');
          setMessage('Please verify your email before logging in.');
          auth.signOut();
        }
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 mt-10">
          <div className="text-center mb-8">
            <FaMobileAlt className="mx-auto text-4xl text-blue-600" />
            <h1 className="mt-4 text-2xl font-bold text-gray-800">VTU Login</h1>
            <p className="mt-2 text-sm text-gray-600">Access Your Account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot" className="text-blue-600 hover:underline">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
            > 
              Sign In
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
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

export default LoginPage;
