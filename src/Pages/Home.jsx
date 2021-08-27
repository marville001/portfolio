import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AboutSection from "../Components/HomeComponents/AboutSection";
import ServicesSection from "../Components/HomeComponents/ServicesSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
    </div>
  );
};

export default Home;
