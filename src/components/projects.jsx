import React from "react";
import image1 from "../assets/tickethiveimg.png";
import image2 from "../assets/rehive.png";
import image3 from "../assets/tutortank.png";
import image4 from "../assets/deeptraceimg.png";
import image5 from "../assets/cloverimg.png";
import image6 from "../assets/delishdinehubimg.png";

const projects = [
  {
    id: 1,
    name: "Ticket Hive",
    description:
      "A Generalized ticketing system with an add on feature of resale with an idea of tokenizing ticket numbers as NFTs, ensuring security and traceability using Hive Blockchain.",
    image: image1,
    link: "https://ticket-hive.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Hive Blockchain", "Firebase","Vite"],
  },
  {
    id: 2,
    name: "ReHive",
    description:
      "A Decentralized referral-driven platform that connects job seekers directly with referrers, bypassing traditional recruitment process. It incentivizes referrals through tokenized rewards managed by smart contracts.",
    image: image2,
    link: "https://re-hive.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Hive Blockchain", "Figma","Vite"],
  },
  {
    id: 3,
    name: "Tutor Tank",
    description:
      "A virtual tutor platform that assesses the learner's understanding level at every step and curates relevant content to enhance the learning experience ensuring personalization",
    image: image3,
    link: "https://the-tutor-tank.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Python", "TensorFlow","Gemini"],
  },
  {
    id: 4,
    name: "DeepTrace",
    techStack: ["React", "Tailwind CSS", "MatPlotlib", "PyTorch","TensorFlow"],
    description:
      "An innovative blockchain-based platform designed to combat the growing issue of deepfake videos while ensuring user privacy by seamlessly integrating ML models & blockchain to deliver a highly accurate solution for deepfake detection.",
    image: image4,
    link: "https://github.com/Divij-Mahajan/DeepTrace",
   
  },
  {
    id: 5,
    name: "Clover",
    description:
      "An intelligent retail platform that leverages accurate demand forecasting, dynamic pricing, and personalized promotions to optimize inventory, maximize profits, and enhance customer engagement.",
    image: image5,
    link: "https://github.com/codeskavy/Clover-Walmart",
    techStack: ["Numpy", "TensorFlow", "Pandas", "MatPlotlib"],
  },
  {
    id: 6,
    name: "Delish Dine Hub",
    description:
      "A beginner-friendly food ordering website design, built using only HTML and CSS, featuring smooth transitions and a visually appealing theme for an enhanced user experience.",
    image: image6,
    link: "https://delishdinehub.vercel.app/",
    techStack: ["HTML","CSS"],
  },
];

const ProjectsGrid = () => {
  return (
    <div
      id="projects"
      className="bg-black min-h-screen flex justify-center items-center px-4 py-10"
    >
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-black rounded-lg p-4 overflow-hidden max-w-xl transform transition-transform duration-300 hover:scale-105 group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-pink-500 opacity-20 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-lg"></div>
                </div>
              </a>
              <div className="mt-6 text-white text-left">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold hover:underline hover:cursor-pointer"
                >
                  {project.name}
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-pink-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mt-3">{project.description}</p>
             
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProjectsGrid;



