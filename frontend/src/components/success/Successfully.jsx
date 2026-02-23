import React from 'react';
import { useNavigate } from 'react-router';

const Successfully = ({ message = "Your submission was successful!", onReturn }) => {
    const Navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all hover:scale-105">
        
        {/* Animated Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4">
            <svg 
              className="w-16 h-16 text-green-500 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                d="M5 13l4 4L19 7"
                className="animate-[draw_0.6s_ease-in-out]"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">Great Job!</h2>
        <p className="text-gray-600 mb-8">{message}</p>

        <button
          onClick={()=>Navigate("/")}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
        >
          Back to Dashboard
        </button>
        
        <p className="mt-4 text-sm text-gray-400">
          A confirmation email has been sent to your inbox.
        </p>
      </div>
    </div>
  );
};

export default Successfully;