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
  {
    icon: "https://img.icons8.com/clouds/100/000000/domain.png",
    title: "Business Strategy",
    description:
      "We discuss what you are trying to achieve, and place goals on your website planning how to achieve that. For example, a product might use a small website to collect initial customers which can be grown into a much larger website later on with leads ready-to-go.",
  },{
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
  return (
    <div className="container" id="services">
      <div className="services" >
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
