import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tittle from "../Tittle";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.5,
        },
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} className="container" id="portfolio">
      <motion.div
        className="projects"
        initial={{ y: 150, opacity: 0 }}
        animate={animation}
      >
        <Tittle title="My Projects" index="03" />
        <div className="projects-cards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </motion.div>
      <motion.div
        className="view-more-container"
        initial={{ y: 150, opacity: 0 }}
        animate={animation}
      >
        <Link className="view-more" to="/portfolios">
          View More
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
