import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
        
        {/* Inner ring with animation */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin">
          {/* Optional: Add a subtle glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>
        
        {/* Optional: Add loading text */}
        <p className="mt-4 text-gray-300 text-center font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
