import React from "react";
import Tittle from "../Tittle";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <div className="container" id="portfolio">
      <div className="projects">
        <Tittle title="My Projects" index="03" />
        <div className="projects-cards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="view-more-container">
      <Link className="view-more" to="/portfolios">View More</Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
