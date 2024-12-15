import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import WaveImage from "../assets/wave.png";
import DisplayImage from "../assets/display.jpeg";

const Home = () => {
  return (
    <div
    id="home"
      className="h-screen w-full flex items-start text-white bg-cover bg-center pt-6"
      style={{
        backgroundImage: `url(${WaveImage})`,
        opacity: 0.9,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-start w-full max-w-4xl pt-48 ml-48">
        <div className="flex flex-col items-start mb-2 ml-40">
          <div className="flex gap-4">
            <a
              href="https://github.com/aggrhythm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rhytham-aggarwal-679821250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-3xl hover:cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Profile and Details */}
        <div className="flex items-center gap-8">
          <div className="rounded-full mt-3 overflow-hidden w-32 h-32">
            <img
              src={DisplayImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-6xl font-bold">Rhytham Aggarwal</h1>
            <p className="text-4xl mt-4">
              <span style={{ color: "white"}}>
                <Typewriter
                  words={[
                    "Web Developer",
                    "ML Developer",
                    "Problem Solver",
                    "Software Developer",
                    "Designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
