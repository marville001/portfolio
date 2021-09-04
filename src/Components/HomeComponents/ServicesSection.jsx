import React, { useEffect } from "react";
import Tittle from "../Tittle";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "Website Review",
    description:
      "I make sure your website is performing its best by thoroughly reviewing it before making any changes. I look for potential issues a user might face, big or small, and make suggestions about how improvements could be made to fix that, ensuring your user is always on the right path to achieve their goals.",
  },
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "Business Strategy",
    description:
      "We discuss what you are trying to achieve, and place goals on your website planning how to achieve that. For example, a product might use a small website to collect initial customers which can be grown into a much larger website later on with leads ready-to-go.",
  },
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "User Experience Design",
    description:
      "I design your website to be as easy to use as possible while guiding users towards the end goal. Putting the user’s experience first, whether they’re looking to subscribe, trying to contact you, or just gathering information, will ensure more loyal users increasing long term sales.",
  },
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "Tailored Development",
    description:
      "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product. I focus on making websites easy to work with so your team have full control, while keeping code maintainable for easy updates.",
  },
];

const ServicesSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    console.log("In view", inView);
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          staggerChildren: 0.2,
          when: "beforeChildren",
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref} className="container" id="services">
      <motion.div className="services" animate={animation}>
        <Tittle title="Services" index="02" />

        <div className="services-cards">
          {services.map((service) => (
            <motion.div
              className="service-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img className="service-icon" src={service.icon} alt={service.title} />
              <h2 className="s-title">{service.title}</h2>
              <p className="s-text">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
