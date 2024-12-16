import React from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const KnowMore = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-28 mb-16 items-center gap-6 md:gap-0 relative">

        <div className="relative md:w-[45%] ml-10 md:-mr-20 z-20 animate-fade-in-left">
          <p className="text-white text-sm absolute left-0 -top-16 md:top-0 md:relative">
            More About Me
          </p>
          <h3 className="text-pink-500 text-3xl font-bold absolute left-0 -top-12 md:relative md:top-0">
            Know More
          </h3>

          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg z-10 mt-16 md:mt-10 relative">
            <p className="text-gray-300 text-sm leading-relaxed">
              Apart from my professional engagements, I love exploring new cafes, traveling to undiscovered places, and reading historical fiction. When not coding, you'll find me binge-watching documentaries or trying out photography.
            </p>

            <div className="mt-4">
              <h4 className="text-pink-500 text-md">Position of Responsibility</h4>
              <ul className="text-gray-300 list-decimal marker:text-pink-500 pl-5 text-sm mt-2">
                <li>Vice President, Sahitya - Literary & Debating Society, DTU</li>
                <li>Corporate Coordinator, IEEE DTU</li>
                <li>Open Source Contributor, GSSOC'24</li>
              </ul>
            </div>

            {/* Social Icons moved to bottom */}
            <div className="flex gap-4 text-center mt-6">
              <a
                href="https://leetcode.com/u/aggrhythm/"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://www.codechef.com/users/aggrhythm"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-[55%] mt-20 relative z-0 animate-fade-in-right">
          <img
            src="https://via.placeholder.com/700x350"
            alt="Fun Hobbies"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-2 text-center">
        <div className="flex justify-center gap-6 text-gray-400 text-md flex-wrap">
          <span className="hover:text-pink-500 transition duration-300">Eat</span>
          <span className="hover:text-pink-500 transition duration-300">Code</span>
          <span className="hover:text-pink-500 transition duration-300">Sleep</span>
          <span className="hover:text-pink-500 transition duration-300">Repeat</span>
        </div>
      </div>
    </section>
  );
};

export default KnowMore;

