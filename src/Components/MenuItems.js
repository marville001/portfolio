import React from "react";
import { faGithub, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Menu Items
function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li style={{display:"flex"}}>
                  <a style={{display:"inline-block"}} target="_blank" rel="noreferrer" href={item.link1}>
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                  </a>
                  <a style={{display:"inline-block"}} target="_blank" rel="noreferrer" href={item.link2}>
                    <FontAwesomeIcon icon={faTelegramPlane} className="icon gh" />
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
