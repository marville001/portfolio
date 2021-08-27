import React from "react";
import Tittle from "../Tittle";
import ServiceCard from "../ServiceCard";

const services = [
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "Website Review",
    description:
      "I make sure your website is performing its best by thoroughly reviewing it before making any changes. I look for potential issues a user might face, big or small, and make suggestions about how improvements could be made to fix that, ensuring your user is always on the right path to achieve their goals.",
  },
];

const ServicesSection = () => {
  return (
    <div className="container">
      <div className="services">
        <Tittle title="Services" index="02" />

        <div className="services-cards">
          {services.map((service) => (
            <ServiceCard  service={service}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
