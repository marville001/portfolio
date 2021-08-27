import React from "react";

function ServiceCard({ service: { icon, title, description } }) {
  return (
    <div className="service-card">
      <img className="service-icon" src={icon} alt={title} />
      <h2 className="s-title">{title}</h2>
      <p className="s-text">{description}</p>
    </div>
  );
}

export default ServiceCard;
