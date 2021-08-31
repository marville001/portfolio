import React from "react";
import portfolios from "../Components/allportfolios";
import { useState, useEffect } from "react";
import PortfoliosSection from "../Components/PortfoliosComponents/PortfoliosSection";

const Portfolios =()=> {
  const [menuItems, setMenuItems] = useState([]);

  // const filter = (name) => {
  //   const new_portfolios = portfolios.filter((portfolio) =>
  //     portfolio.category.includes(name)
  //   );
  //   if (name === "All") setMenuItems(portfolios);
  //   else setMenuItems(new_portfolios);
  // };

  useEffect(() => {
    setMenuItems(portfolios);
  }, []);

  return (
    <div className="portfolios container">
      <div className="title">
        <h1>Projects I have done</h1>
      </div>
      <PortfoliosSection />
    </div>
  );
}

export default Portfolios;
