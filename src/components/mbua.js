import React, { useState, useEffect } from "react";

import "./mbua.css";
import MbuaSlider from "./slider/mbuaSlider";
import Menu from "./navigations/mainMenu";
import InnerPagesRoutes from "./innerpages/innerPagesRoutes";

const Mbua = props => {
  const [currentSlider, setCurrentSlider] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const { mbuaName, mbuaTitle, sliderImages, menuItems } = props;

  useEffect(() => {
    setCurrentPage("mbuA");
  }, []);

  useEffect(() => {
    setCurrentSlider(sliderImages);
  }, [sliderImages]);

  const getCurrentPage = page => {
    setCurrentPage(page);
  };

  return (
    <div id="mbua">
      <div id="mbua-first-column">
        <h1 className="title ">
          {mbuaName}
          <span className="italic-text">{mbuaTitle}</span>
        </h1>
      </div>
      <div id="mbua-second-column">
        <div
          className={`slider-wrapper ${currentPage === "mbuA" &&
            "large-slider"}`}
        >
          <MbuaSlider
            currentSlider={currentSlider}
            currentPage={currentPage}
          ></MbuaSlider>
        </div>
      </div>
      <div id="mbua-third-column">
        <InnerPagesRoutes></InnerPagesRoutes>
      </div>
      <div id="mbua-fourth-column">
        <Menu
          menuItems={menuItems}
          currentPage={currentPage}
          getCurrentPage={getCurrentPage}
        ></Menu>
      </div>
    </div>
  );
};

export default Mbua;
