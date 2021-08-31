import React from "react";
// import Categories from "../Components/Categories";
// import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Tittle";
import portfolios from "../Components/allportfolios";
import { useState, useEffect } from "react";

const allCategories = [
  "All",
  "Vanilla Js",
  "React Js",
  "PHP",
  "Node Js",
  "Mongo Db",
  "Postgress",
];

function PortfoliosPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const filter = (name) => {
    const new_portfolios = portfolios.filter((portfolio) =>
      portfolio.category.includes(name)
    );
    if (name === "All") setMenuItems(portfolios);
    else setMenuItems(new_portfolios);
  };

  useEffect(() => {
    setMenuItems(portfolios);
    setCategories(allCategories);
  }, []);

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={"Portfolios"} span={"portfolios"} />
      </div>
      {/* <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div> */}
    </div>
  );
}

export default PortfoliosPage;
