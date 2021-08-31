import React from "react";
// import Categories from "../Components/Categories";
// import MenuItems from "../Components/MenuItems";
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

const Portfolios =()=> {
  const [categories, setCategories] = useState([]);
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
    setCategories(allCategories);
  }, []);

  return (
    <div className="portfolios container">
      <div className="title">
        <h1>My Portfolios</h1>
      </div>
      {/* <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div> */}
    </div>
  );
}

export default Portfolios;
