import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          A New Era of Digital Experience
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Discover a world of clarity and focus. Our new interface is designed for you.
        </p>
        
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:text-white dark:border-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease dark:bg-indigo-600"></span>
            <span className="relative">Get Started</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0 dark:bg-indigo-600"></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;