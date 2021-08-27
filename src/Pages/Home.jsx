import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AboutSection from "../Components/HomeComponents/AboutSection";
import ServicesSection from "../Components/HomeComponents/ServicesSection";
import ProjectsSection from "../Components/HomeComponents/ProjectsSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection />
    </div>
  );
};

export default Home;
