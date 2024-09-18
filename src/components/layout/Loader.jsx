// components/LoadingSpinner.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center  justify-center h-screen w-screen bg-gray-100">
      <div className="relative">
        <div className="w-20 h-20 border-8 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;