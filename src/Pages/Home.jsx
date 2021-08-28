import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AboutSection from "../Components/HomeComponents/AboutSection";
import ServicesSection from "../Components/HomeComponents/ServicesSection";
import ProjectsSection from "../Components/HomeComponents/ProjectsSection";
import ContactSection from "../Components/HomeComponents/ContactSection";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
