'use client';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-12 h-12 border-4 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent 
                      rounded-full animate-spin" />
        {/* Inner spinner */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-6 h-6 border-4 border-t-transparent border-r-green-500 border-b-transparent border-l-green-500 
                      rounded-full animate-spin-slow" />
      </div>
      <p className="mt-4 text-[#ACACAC] animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;