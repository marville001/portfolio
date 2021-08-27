import React from "react";
import Tittle from "../Tittle";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="container">
      <div className="projects">
        <Tittle title="My Projects" index="03" />
        <div className="projects-cards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
