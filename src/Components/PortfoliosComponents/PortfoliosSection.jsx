import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PortfolioCard from "./PortfolioCard";

const PortfoliosSection = () => {
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
    <motion.div
      ref={ref}
      className="portfolios-items"
      initial={{ y: 100, opacity: 0 }}
      animate={animation}
    >
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </motion.div>
  );
};

export default PortfoliosSection;
