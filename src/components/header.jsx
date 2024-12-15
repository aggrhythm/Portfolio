import React from "react";
import "../index.css";
import logo from "/RAlogo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between items-center px-10 py-4 shadow-lg">
      <div className="flex items-center space-x-2">
        <a href="#home" className="group relative">
          <div className="w-12 h-12 relative">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full transition-all duration-300 group-hover:translate-[-5px_-5px] group-hover:opacity-80"
            />
          </div>
        </a>
      </div>

      <div className="flex items-center space-x-8">
        <nav className="flex space-x-8">
          <a href="#aboutme" className="relative text-lg group">
            <span className="underline-effect">About me</span>
          </a>
          <a href="#history" className="relative text-lg group">
            <span className="underline-effect">Experience</span>
          </a>
          <a href="#projects" className="relative text-lg group">
            <span className="underline-effect">Projects</span>
          </a>
          <a href="#contact" className="relative text-lg group">
            <span className="underline-effect">Contact</span>
          </a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1Hr96oEyUoZAQpRiQdCSkic3VVmzMCxUY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-black border-2 border-pink-500 text-pink-500 font-semibold text-sm rounded-md shadow-md hover:shadow-lg hover:bg-pink-500 hover:text-black hover:border-2 hover:border-black hover:scale-105 transition-transform duration-300"
        >
          Resume
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-gray-900 to-black"></div>
    </header>
  );
};

export default Header;



