import React from "react";
import { Link } from "react-router-dom";

import "./mainMenu.css";

const Menu = props => {
  const { menuItems, currentPage, getCurrentPage} = props;
 

  const AUTHORISED = ["mbuA", "work", "profile", "feed", "contact", "ftp"];

  let menu = <p>No items</p>;

  const menuClicksHandler = (page) => {
    getCurrentPage(page);
  };


  if (menuItems.length > 0) {
    const filteredMenuItems = menuItems.filter(menuItem =>
      AUTHORISED.includes(menuItem.title)
    );
    menu = (
      <ul id="main-menu-items">
        {filteredMenuItems.map(menuItem =>
          menuItem.title === "mbuA" ? (
            <li
              className={`main-menu-item ${currentPage === menuItem.title &&
                "active"}`}
              key={menuItem.ID}
              id={menuItem.ID}
            >
              <Link
                to={`/mbua`}
                onClick={()=> menuClicksHandler(menuItem.title)}
                className="main-menu-link"
              >
                {menuItem.title}
              </Link>
            </li>
          ) : (
            <li
              className={`main-menu-item ${currentPage === menuItem.title &&
                "active"}`}
              key={menuItem.ID}
              id={menuItem.ID}
              onClick={()=> menuClicksHandler(menuItem.title)}
            >
              <Link
                to={`/mbua/${menuItem.title}`}
                onClick={menuClicksHandler}
                className="main-menu-link"
              >
                {menuItem.title}
              </Link>
            </li>
          )
        )}
      </ul>
    );
  }

  return <div id="main-menu">{menu}</div>;
};

export default Menu;
