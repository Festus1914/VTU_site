import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const testimonials = [
  {
    id: 1,
    name: "Abas",
    position: "CEO Aabaxtech.com",
    quote: "Topupmate user interface is simple and amazing. My resellers don't have any issue understanding how to use the platform. It's simply amazing."
  },
  {
    id: 2,
    name: "Sarah",
    position: "CTO TechInnovate",
    quote: "The intuitive design and powerful features have significantly improved our workflow. It's a game-changer for our team."
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, [current]);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setHappyClients(prev => (prev < 500 ? prev + 1 : prev));
    }, 20);

    const projectInterval = setInterval(() => {
      setProjectsCompleted(prev => (prev < 1000 ? prev + 1 : prev));
    }, 10);

    return () => {
      clearInterval(clientInterval);
      clearInterval(projectInterval);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-100 to-white overflow-hidden min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-200 transform -skew-y-6"></div>
      
      <motion.div 
        className="container mx-auto px-4 py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-900 mb-12">What Our Clients Say</h2>
        
        <div className="relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              className="bg-white rounded-lg shadow-xl p-8 max-w-full md:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6">"{testimonials[current].quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[current].name[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-lg">{testimonials[current].name}</p>
                  <p className="text-gray-600">{testimonials[current].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 md:-ml-12 bg-white rounded-full p-2 shadow-md hover:bg-indigo-100 transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-indigo-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 md:-mr-12 bg-white rounded-full p-2 shadow-md hover:bg-indigo-100 transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-indigo-600" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mt-16">
          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-indigo-600">{happyClients}+</h3>
            <p className="text-xl md:text-2xl text-gray-600 mt-2">Happy Clients</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-indigo-600">{projectsCompleted}+</h3>
            <p className="text-xl md:text-2xl text-gray-600 mt-2">Projects Completed</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
