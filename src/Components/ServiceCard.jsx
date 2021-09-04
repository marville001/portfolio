import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ServiceCard = ({service:{ icon, title, description }}) => {
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
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={animation}
    >
      <img className="service-icon" src={icon} alt={title} />
      <h2 className="s-title">{title}</h2>
      <p className="s-text">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
