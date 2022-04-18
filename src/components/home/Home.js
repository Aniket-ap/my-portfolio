import React from "react";
import HeroSection from "../heroSection/HeroSection";
import Project from "../project/Project";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Skills/>
      <Project/>
    </div>
  );
};

export default Home;
