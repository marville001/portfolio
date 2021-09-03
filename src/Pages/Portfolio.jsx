import React from "react";
import PortfoliosSection from "../Components/PortfoliosComponents/PortfoliosSection";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    y: -50,
  },
  visible: {
    y: [5, -30, 5, 0],
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};
const Portfolios = () => {
  return (
    <div className="portfolios container">
      <motion.div
        className="title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Projects I have done</h1>
      </motion.div>
      <PortfoliosSection />
    </div>
  );
};

export default Portfolios;
