import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    role: "Technical Intern",
    location: "Tese, Hong Kong",
    duration: "September 2024 - Present",
    description:
      "Contributed as the sole intern, primarily responsible for frontend development, creating components with React, TypeScript, and Tailwind CSS.",
  },
  {
    role: "Web Developer",
    location: "IQAC, DTU",
    duration: "May 2024 - Oct 2024",
    description:
      "Enhanced the IQAC (Internal Quality Assurance Cell) website functionality and increased user satisfaction.",
  },
  {
    role: "Research Intern",
    location: "Robotics & Machine Learning Lab, DTU",
    duration: "June 2024 - July 2024",
    description:
      "Developed transformer-based models for Deepfake detection, enhancing accuracy using advanced deep learning techniques.",
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const target = document.querySelector("#experience-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="experience-section"
      className="relative max-w-6xl mx-auto min-h-screen pt-28 pb-10"
    >
      <div className="absolute top-0 bottom-0 w-1 bg-pink-500 left-1/2 transform -translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex items-center justify-between w-full mb-10 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`w-1/2 px-4 text-gray-400 text-sm opacity-0 ${
              isVisible
                ? `animate-fadeInLeft`
                : ""
            } ${index % 2 === 0 ? "text-left" : "text-right"}`}
            style={{
              animationDelay: `${index === 0 ? "1s" : index * 0.2 + 1.3}s`,
            }}
          >
            {exp.duration}
          </div>

          <div
            className={`w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center border-4 ml-6 mr-6 border-white z-10 opacity-0 ${
              isVisible
                ? `animate-fadeInCircle`
                : ""
            } hover:bg-white hover:border-pink-500 hover:text-pink-500 transform transition-all duration-300`}
            style={{
              animationDelay: `${index === 0 ? "1s" : index * 0.2 + 1.3}s`,
            }}
          >
            <MapPinIcon className="w-8 h-8" />
          </div>

          <div
            className={`w-1/2 bg-white rounded-lg shadow-lg p-8 relative opacity-0 ${
              isVisible
                ? `animate-fadeInBox`
                : ""
            } ${index % 2 === 0 ? "text-left ml-0" : "text-right mr-0"} hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 ease-in-out`}
            style={{
              animationDelay: `${index === 0 ? "0.6s" : index * 0.2 + 0.6}s`,
            }}
          >
            <div
              className={`absolute w-0 h-0 border-solid border-t-[8px] border-t-transparent border-b-[16px] border-b-transparent ${
                index % 2 === 0
                  ? "border-l-[20px] border-l-white -right-5 top-6"
                  : "border-r-[20px] border-r-white -left-5 top-6"
              }`}
            ></div>
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-pink-600 font-semibold">{exp.location}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
