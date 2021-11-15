import React, { useEffect } from "react";
import PortfoliosSection from "../Components/PortfoliosComponents/PortfoliosSection";

const Portfolios = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="portfolios container">
      <div className="title">
        <h1>Projects I have done</h1>
      </div>
      <PortfoliosSection />
    </div>
  );
};

export default Portfolios;
