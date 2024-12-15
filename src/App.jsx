import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Timeline from "./components/history";
import ProjectsGrid from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <div id="aboutme" classname="bg-black h-[10px]"></div>
      <AboutMe/>
      <h2 id="history" className="text-5xl text-bg-black font-bold ml-36 text-white mt-28 scroll-offset ">
        Experience
      </h2>
     <Timeline/>
     <h1 id="projects" className="text-5xl text-bg-black ml-40 font-bold mt-28 ml-36 text-white scroll-offset " >
          Projects
        </h1>
     <ProjectsGrid/>
     <Contact/>
     <footer className="mt-4 mb-4 text-center text-gray-400 text-sm flex flex-col items-center">
  <p>
    Developed & Designed with{" "}
    <span className="text-pink-500 text-lg inline-block animate-pulse">
      🩷
    </span>{" "}
    by{" "}
    <a
      href="https://github.com/aggrhythm"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-gray-300 hover:text-pink-500 transition-all duration-300"
    >
      Rhytham Aggarwal
    </a>
  </p>
</footer>
    </div>
    
  );
}

export default App;
