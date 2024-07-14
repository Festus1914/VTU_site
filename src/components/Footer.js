import React from 'react';
import Logo from '../Assets/dayemdot_logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <img src={Logo} alt='Logo' className="h-20 w-20 mr-2" />
                <span className="text-2xl font-bold text-gray-800">Dayemdot</span>
            </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The Only Software You Would Ever Need To Launch And Run A Successfully VTU & Bill Payment Platform
            </p>
          </div>

          {/* Quick Links Sections */}
          {['About', 'Our Site', 'Contacts'].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">{section}</h3>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Features', 'Contact', 'Privacy Policy', 'Explore']
                  .slice(index * 2, index * 2 + 3)
                  .map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {/* Contacts Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+(234) 8035289133' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'dayemdottech@gmail.com' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'support@topupmate.com' }
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2024 Dayemdot - All Rights Reserved</p>
            <p className="text-sm text-gray-600">A Product Of <a href="#" className="text-blue-600 hover:underline">Dayemdot  Technology</a></p>
          </div>
          <a href="#top" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;