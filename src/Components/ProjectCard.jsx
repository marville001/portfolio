import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({name, img, description, github, web, langs}) => {
    const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
        },
      });
    }
  }, [inView, animation]);
    return (
        <motion.div ref={ref} className="project-card"
        initial={{ opacity: 0, y: 50 }}
        animate={animation}
        >
            <div className="project-content">
                <div>
                    <p class="project-overline">Featured Project</p>
                    <h3 class="project-title">
                        <a href="https://octoprofile.now.sh" rel="noopener noreferrer" target="_blank">{name}</a>
                    </h3>
                    <div class="project-description">
                        <p>{description}</p>
                    </div>
                    <ul class="project-tech-list">
                      {langs?.map((lang, i)=>(
                        <li>{lang}</li>
                      ))}
                      </ul>
                    <div class="project-links">
                        <a href={github} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href={web} aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                    </div>
                </div>
            </div>
            <div className="project-image">
                <a href="#sss">
                    <img src={img} alt="Project Name" />
                </a>
            </div>
        </motion.div>
    )
}

export default ProjectCard
