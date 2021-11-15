import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tittle from "../Tittle";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";
import project1 from "../../img/Project1.png"
import faceDetectorImg from "../../img/portImages/faceDetector.png"
import covidTracker from "../../img/portImages/covidTracker.png"
import budgetApp from "../../img/portImages/budgetApp.png"
import agencySite from "../../img/portImages/agencySite.png"
import ashop from "../../img/portImages/ashop.png"
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
          <ProjectCard
            name={"OctoProfile"}
            description={"A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size."}
            img={project1}
            github={"https://github.com/marville001"}
            web={"hhjhj"}
            // bchiang7/octoprofile
            langs={["React.Js", "Node.Js", "Express.Js","PostGresDB"]}
          />

          <ProjectCard
            name={"Face Detector"}
            description={"A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size."}
            img={faceDetectorImg}
            github={"https://github.com/marville001/octoprofile"}
            web={"hhjhj"}
            langs={["React.Js", "Node.Js", "Express.Js","PostGresDB"]}
          />

          <ProjectCard
            name={"Covid19 Tracker"}
            description={"A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size."}
            img={covidTracker}
            github={"https://github.com/marville001/octoprofile"}
            web={"hhjhj"}
            langs={["React.Js", "Covid19 API"]}
          />
          
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
