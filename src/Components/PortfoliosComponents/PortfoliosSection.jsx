import React from "react";
import PortfolioCard from "./PortfolioCard";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120
    }
  },
};

const PortfoliosSection = () => {
  return (
    <motion.div className="portfolios-items" 
    variants={containerVariants}
        initial="hidden"
        animate="visible"
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
