import { useState, useEffect, useRef } from "react";
import { FaReact, FaPython, FaGit, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import Popup from "./popup";
import image1 from "../assets/hive_logo.png"
import image2 from "../assets/shefi_logo.jpg"
import image3 from "../assets/googlelogo.webp"
import image4 from "../assets/amazonlogo.webp"
import image5 from "../assets/leetcodelogo.webp"
import image6 from "../assets/ieeelogo.webp"


const AboutMe = () => {
  const [headingText, setHeadingText] = useState("About Me");
  const [showIcons, setShowIcons] = useState(false); 
  const aboutMeRef = useRef(null);
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowIcons(true); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutMeRef} className="min-h-screen w-full flex flex-col lg:flex-row mt-20 mb-20 items-center justify-between bg-black text-white py-10 px-10">    
    <div className="lg:w-[80%] md:w-[90%] sm:w-full w-full p-8 border border-white rounded-lg shadow-lg">

        <h1
          className="text-2xl sm:text-4xl  font-bold mb-4 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {headingText}
        </h1>

        <p className="text-sm sm:text-md text-pink-500">
          B.Tech in Computer Science Engineering from{" "}
          <span>Delhi Technological University |  2022-2026</span>
        </p>
        <p className="text-sm sm:text-md mb-8 text-gray-200">
          I'm a CSE undergrad with a passion for crafting dynamic websites and diving deep into the world of machine learning. Alongside this, I'm sharpening my problem-solving skills in data structures and algorithms, mainly in C++. Hackathons? Count me in. Networking? I’m all for it. On the right, you'll find the tech stack I'm fluent in.
          <br />
          <p className="text-sm sm:text-md mt-2 text-gray-500 font-bold italic border-l-4 border-pink-500 pl-4">
            "I code, I solve, I innovate – and yes, I probably broke something along the
            way."
          </p>
        </p>


        <div>
          <h2 className="text-xl sm:text-3xl mb-6 border-b border-gray-400 pb-2">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  "I have solved over 600 questions in DSA using C++, showcasing my problem-solving skills and deep understanding of data structures and algorithms. Actively involved in competitive programming, I participate in contests on platforms like CodeChef, CodeForces, and LeetCode. My efforts have been recognized with significant global rankings, such as achieving rank 91 in the LeetCode Starters 156 contest, which had over 30,000 participants."
                )
              }
            />
               <AchievementCard
              title="Shefi Scholar"
              description="Full scholarship of $800 to join the SheFi Scholars Program!"
              onSeeMore={() =>
                openPopup(
                  "Shefi Scholar",
                  image2,
                  "I received a full scholarship to join the SheFi Scholars Program, powered by Celo. This program was all about empowering women in Web3. As a SheFi Scholar, I dived deeper into Web3 concepts, sharing my learning journey, and contributing to this incredible community by spreading awareness and building my personal brand in the decentralized world."
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
     
      <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 lg:mt-0 lg:w-[20%] lg:flex-col">
  <TechIcon icon={<FaReact />} color="#61DAFB" label="React" size="40px" show={showIcons} delay="0s" />
  <TechIcon icon={<FaPython />} color="#3776AB" label="Python" size="40px" show={showIcons} delay="0.2s" />
  <TechIcon icon={<SiCplusplus />} color="#00599C" label="C++" size="40px" show={showIcons} delay="0.4s" />
  <TechIcon icon={<SiTailwindcss />} color="#06B6D4" label="TailwindCSS" size="40px" show={showIcons} delay="0.6s" />
  <TechIcon icon={<FaFigma />} color="#F24E1E" label="Figma" size="40px" show={showIcons} delay="0.8s" />
  <TechIcon icon={<FaGit />} color="#F05033" label="Git" size="40px" show={showIcons} delay="1s" />
  <TechIcon icon={<SiJavascript />} color="#F7DF1E" label="JavaScript" size="40px" show={showIcons} delay="1.2s" />
  <TechIcon icon={<SiTypescript />} color="#3178C6" label="TypeScript" size="40px" show={showIcons} delay="1.4s" />
</div>




    </div>
  );
};

const AchievementCard = ({ title, description, onSeeMore }) => {
  return (
    <div
      className="p-2 sm:p-4 bg-gray-900 border border-gray-600 rounded-lg 
      transition-all duration-300 cursor-pointer 
      hover:translate-x-[-8px] hover:translate-y-[-8px] hover:bg-black
      hover:border-pink-500 group "
    >
      <h3 className="text-sm sm:text-xl font-semibold text-gray-300 group-hover:text-pink-500">
        {title}
      </h3>
      <p className="text-xs sm:text-md text-gray-300 mt-2">{description}</p>
      <button
        onClick={onSeeMore}
        className="mt-2 text-xs sm:text-sm text-gray-500 hover:underline"
      >
        Click to know more
      </button>
    </div>
  );
};

const TechIcon = ({ icon, color, label, size, show, delay }) => {
  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer group ${show ? `animate-fadeIn` : ''}`}
      style={{
        animationDelay: delay, 
      }}
    >
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
      <div className="text-sm mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <span className="bg-black text-gray-100 px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};






export default AboutMe;
