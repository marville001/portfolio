import React, { useEffect } from "react";
import PortfoliosSection from "../Components/PortfoliosComponents/PortfoliosSection";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolios = () => {
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
        },
      });
    }
  }, [inView, animation]);
  return (
    <motion.div ref={ref} className="portfolios container"
        initial={{ y: 100, opacity: 0 }}
        animate={animation}
    >
      <div
        className="title"
        
      >
        <h1>Projects I have done</h1>
      </div>
      <PortfoliosSection />
    </motion.div>
  );
};

export default Portfolios;
