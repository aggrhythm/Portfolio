import React from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import photo from "../assets/resized_image.png"
const KnowMore = () => {
  const { ref: leftRef, inView: leftVisible } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: rightRef, inView: rightVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-4 mb-16 items-center gap-6 md:gap-0 relative">
        
        <div
          ref={leftRef}
          className={`relative md:w-[48%] ml-20 md:-mr-20 z-20 transition-transform duration-700 ${
            leftVisible ? 'animate-fade-in-left' : 'translate-x-[-100%] opacity-0'
          }`}
        >
          {/* Left Section */}
          <p className="text-white text-sm absolute left-0 -top-16 md:top-0 md:relative hover:text-pink-500 transition duration-300">
            More About Me
          </p>
          <h3 className="text-pink-500 text-3xl font-bold absolute left-0 -top-12 md:relative md:top-0 hover:text-white transition duration-300">
            Know More
          </h3>

          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg z-10 mt-16 md:mt-10 relative  hover:scale-105 transition-transform duration-300">
            <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-100 transition duration-300">
              Apart from my professional engagements, I love exploring new cafes, traveling to undiscovered places, and writing poems. When not coding, you'll find me binge-watching web shows or listening to music.
            </p>

            <div className="mt-4">
              <h4 className="text-pink-500 text-md transition duration-300">Position of Responsibility</h4>
              <ul className="text-gray-300 list-decimal marker:text-pink-500 pl-5 text-sm mt-2">
                <li className="hover:text-gray-100 transition duration-300">Vice President, Sahitya - Literary & Debating Society, DTU</li>
                <li className="hover:text-gray-100 transition duration-300">Corporate Coordinator, IEEE DTU</li>
                <li className="hover:text-gray-100 transition duration-300">Open Source Contributor, GSSOC'24</li>
              </ul>
            </div>

            <div className="flex gap-4 text-center mt-6">
            <a
          href="https://github.com/aggrhythm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rhytham-aggarwal-679821250/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={20}/>
        </a>
              <a
                href="https://leetcode.com/u/aggrhythm/"
                className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://www.codechef.com/users/aggrhythm"
                className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef size={20} />
              </a>
              <a
          href="mailto:aggarwalrhythm2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
        >
          <FaEnvelope size={20} />
        </a>
       
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={rightRef}
          className={`md:w-[40%] mt-20 relative z-0 transition-transform duration-700 ${
            rightVisible ? 'animate-fade-in-right' : 'translate-x-[100%] opacity-0'
          }`}
        >
          <div className="relative group">
            {/* Image with Pink Overlay */}
            <img
              src={photo}
              alt="Fun Hobbies"
              className="rounded-lg shadow-lg filter group-hover:blur-0 group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-pink-500 opacity-30 group-hover:opacity-0 transition-opacity duration-500 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="flex justify-center gap-6 text-gray-400 text-md flex-wrap">
          <span className="hover:text-pink-500 transition duration-300 hover:text-lg">Eat</span>
          <span className="hover:text-pink-500 transition duration-300 hover:text-lg">Code</span>
          <span className="hover:text-pink-500 transition duration-300 hover:text-lg">Sleep</span>
          <span className="hover:text-pink-500 transition duration-300 hover:text-lg">Repeat</span>
        </div>
      </div>
    </section>
  );
};

export default KnowMore;


