import React from "react";

const Popup = ({ title, image, details, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] border-2 border-gray-800 text-white p-8 rounded-xl w-[50%] max-w-4xl sm:w-[70%] md:w-[60%] lg:w-[50%] relative">
        <button 
          className="absolute top-6 right-6 text-3xl text-white hover:text-pink-700 transition duration-200" 
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-2 text-white">{title}</h2>
        <div className="flex mt-6 items-center space-x-6">

          {image && (
            <div className="w-1/3 overflow-hidden shadow-lg">
              <img src={image} alt={title} className="object-cover" />
            </div>
          )}
        
          <div className="flex-1 text-sm">
            <p className="text-gray-400 mb-4">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
