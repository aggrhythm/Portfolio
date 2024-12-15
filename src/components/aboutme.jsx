import React, { useState } from "react";
import { FaReact, FaPython, FaGit, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import Popup from "./popup";
import image1 from "../assets/hive_logo.png"
import image2 from "../assets/mslogo.png"
import image3 from "../assets/googlelogo.webp"
import image4 from "../assets/amazonlogo.webp"
import image5 from "../assets/leetcodelogo.webp"
import image6 from "../assets/ieeelogo.webp"


const AboutMe = () => {
  const [headingText, setHeadingText] = useState("About Me");

  const handleMouseEnter = () => {
    setHeadingText("Still exploring myself :))");
  };

  const handleMouseLeave = () => {
    setHeadingText("About Me");
  };

  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: "",
    image: "",
    details: "",
  });


  const openPopup = (title, image, details) => {
    console.log("Opening popup with:", title, image, details);
    setPopupData({
      isOpen: true,
      title,
      image,
      details,
    });
  };

  const closePopup = () => {
    setPopupData({ ...popupData, isOpen: false });
  };

  return (
    <div className="h-screen w-full flex items-center justify-between bg-black text-white mt-40 px-10 mb-40">

      <div className="w-[80%] ml-8 p-8 border border-white rounded-lg shadow-lg">

        <h1
          className="text-4xl font-bold mb-4 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {headingText}
        </h1>

        <p className="text-md text-pink-500">
          B.Tech in Computer Science Engineering from{" "}
          <span>Delhi Technological University |  2022-2026</span>
        </p>
        <p className="text-md mb-8 text-gray-200">
          I'm a CSE undergrad with a passion for crafting dynamic websites and diving deep into the world of machine learning. Alongside this, I'm sharpening my problem-solving skills in data structures and algorithms, mainly in C++. Hackathons? Count me in. Networking? I’m all for it. On the right, you'll find the tech stack I'm fluent in.
          <br />
          <p className="text-md mt-2 text-gray-500 font-bold italic border-l-4 border-pink-500 pl-4">
            "I code, I solve, I innovate – and yes, I probably broke something along the
            way."
          </p>
        </p>


        <div>
          <h2 className="text-3xl mb-6 border-b border-gray-400 pb-2">Academic Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            <AchievementCard
              title="Upcoming SWE Intern at Microsoft"
              description="Summer 2025"
              onSeeMore={() =>
                openPopup(
                  "Upcoming SWE Intern at Microsoft",
                  image2,
                  "I received a Software Engineering Internship offer from Microsoft after successfully navigating through multiple rigorous rounds of their selection process. The required tech stack primarily included Data Structures and Algorithms, along with core CS fundamentals such as OOPs, DBMS, and OS. The process began with an online assessment that tested my problem-solving skills. This was followed by the first interview round, where I was asked DSA questions and had a detailed discussion about my resume. The final round involved another interview that focused on advanced DSA problems and C++ fundamentals."
                )
              }
            />
            <AchievementCard
              title="Google Girl Hackathon ‘24 Finalist"
              description="Top 45 among 34,000+ participants"
              onSeeMore={() =>
                openPopup(
                  "Google Girl Hackathon '24 Finalist",
                  image3,
                  "Out of 34,000 participants from 3,500+ colleges, I secured a spot among the top 45 finalists in the Google Girl Hackathon '24! This journey included three rigorous rounds: an invitation to online cohorts covering AI/ML fundamentals, an online challenge round testing DSA skills, and the final stage comprising an Ideathon followed by the Grand Finale, where we developed a working prototype and delivered a pitch. It was an honor to present my idea to esteemed Google judges and receive amazing goodies, along with an interview opportunity at Google!"
                )
              }
            />
            <AchievementCard
              title="First Runner-Up - Vihaan 007 Blockchain Track"
              description="Cash Prize of $425"
              onSeeMore={() =>
                openPopup(
                  "First Runner-Up - Vihaan 007 Blockchain Track",
                  image1,
                  "Our team secured 2nd place in the prestigious Vihaan 007 Hive Track, a flagship hackathon by DTU powered by Major League Hacking. Competing against over 600 teams, we were honored to win a cash prize of $425. Our project, Ticket Hive, is designed to revolutionize ticketing systems by leveraging Hive Blockchain Technology and NFTs to create a transparent, secure, and decentralized platform for ticket issuance, transfer, and resale.We successfully integrated frontend development with blockchain technology to deliver an innovative solution for users and event organizers."
                )
              }
            />
            <AchievementCard
              title="Special Mention"
              description=" WIE Hack by IEEE BVCOE"
              onSeeMore={() =>
                openPopup(
                  "Special Mention - WIE Hack by IEEE BVCOE",
                  image6,
                  "Our team achieved 4th place in WIE Hack 5.0 by IEEE BVCOE, competing against 250+ teams in both offline and online modes. There were four challenging rounds- In the Idea Submission Round, we crafted a unique idea within a tight 1-hour deadline. The Prototype Round saw only 50 teams advance, and with just 4 hours, we built a working prototype. In the Business Round, we pitched our business plan in just an hour, while in the Final Round, we competed against the top 8 teams to secure 4th place. Our project, a real-time ML-based AI model, aimed to revolutionize the education system."
                )
              }
            />
            <AchievementCard
              title="Amazon ML Challenge ’24"
              description="Ranked 135 out of 70,000+ participants"
              onSeeMore={() =>
                openPopup(
                  "Amazon ML Challenge '24",
                  image4,
                  "Our team secured 135th place out of over 70,000 participants achieving 50% accuracy. The 48-hour challenge was intense, requiring us to process 130,000 images. Facing system crashes and lacking access to high-speed GPUs, we relied on parallel processing to manage the load. With LLMs excluded, we implemented a unique approach by dividing the images into uniform patches instead of using variable-sized branches. We applied OCR to each patch, storing relevant text in arrays, and numerically recording those with meaningful data. We further trained a regression model using an XGB Classifier, and standardized all extracted quantities to ensure consistency across the dataset."
                )
              }
            />
            <AchievementCard
              title="DSA Achievements"
              description="Solved 600+ problems on LeetCode and achieved significant ranks on CodeChef"
              onSeeMore={() =>
                openPopup(
                  "DSA Achievements",
                  image5,
                  "I have solved over 600 questions in DSA using C++, showcasing my problem-solving skills and deep understanding of data structures and algorithms. Actively involved in competitive programming, I participate in contests on platforms like CodeChef, CodeForces, and LeetCode. My efforts have been recognized with significant global rankings, such as achieving rank 91 in the LeetCode Starters 156 contest, which had over 30,000 participants. This experience has helped me enhance my problem-solving abilities and stay competitive in the global programming community."
                )
              }
            />
            {popupData.isOpen && (
              <Popup
                title={popupData.title}
                image={popupData.image}
                details={popupData.details}
                onClose={closePopup}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mr-16">
        <TechIcon icon={<FaReact />} color="#61DAFB" label="React" size="50px" />
        <TechIcon icon={<FaPython />} color="#3776AB" label="Python" size="50px" />
        <TechIcon icon={<SiCplusplus />} color="#00599C" label="C++" size="50px" />
        <TechIcon icon={<SiTailwindcss />} color="#06B6D4" label="TailwindCSS" size="50px" />
        <TechIcon icon={<FaFigma />} color="#F24E1E" label="Figma" size="50px" />
        <TechIcon icon={<FaGit />} color="#F05033" label="Git" size="50px" />
        <TechIcon icon={<SiJavascript />} color="#F7DF1E" label="JavaScript" size="50px" />
        <TechIcon icon={<SiTypescript />} color="#3178C6" label="TypeScript" size="50px" />
      </div>


    </div>
  );
};

const AchievementCard = ({ title, description, onSeeMore }) => {
  return (
    <div
      className="p-4 bg-gray-900 border border-gray-600 rounded-lg 
      transition-all duration-300 cursor-pointer 
      hover:translate-x-[-8px] hover:translate-y-[-8px] hover:bg-black
      hover:border-pink-500 group "
    >
      <h3 className="text-xl font-semibold text-gray-300 group-hover:text-pink-500">
        {title}
      </h3>
      <p className="text-md text-gray-300 mt-2">{description}</p>
      <button
        onClick={onSeeMore}
        className="mt-2 text-sm text-gray-500 hover:underline"
      >
        Click to know more
      </button>
    </div>
  );
};


const TechIcon = ({ icon, color, label, size }) => {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer group">
      <div
        className="transition-all duration-300"
        style={{
          fontSize: size,
          color: "white",
        }}
      >
        <span
          className="transition-colors duration-300 group-hover:text-[var(--hover-color)]"
          style={{
            "--hover-color": color,
          }}
        >
          {icon}
        </span>
      </div>
      <div
        className="text-sm mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
      >
        <span className="bg-black text-gray-100 px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};





export default AboutMe;
