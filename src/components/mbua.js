import React, { useState, useEffect } from "react";

import "./mbua.css";
import MbuaSlider from "./slider/mbuaSlider";
import Menu from "./navigations/mainMenu";
import SliderButtons from "./navigations/sliderButtons";
import InnerPagesRoutes from "./innerpages/innerPagesRoutes";

const Mbua = props => {
  const [currentSlider, setCurrentSlider] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const { mbuaName, mbuaTitle, mbuaSliderImages, menuItems } = props;
  const [currentWork, setCurrentWork] = useState("");

  useEffect(() => {
    setCurrentPage("mbuA");
  }, []);

  useEffect(() => {
    setCurrentSlider(mbuaSliderImages);
  }, [mbuaSliderImages]);

  const getCurrentPage = page => {
    setCurrentPage(page);
  };

  const getCurrentWork = work => {
    setCurrentWork(work);
  };

  return (
    <div id="mbua">
      <div id="mbua-first-column">
        <h1 className="title ">
          {mbuaName}
          <span className="italic-text">{mbuaTitle}</span>
        </h1>
        <SliderButtons currentPage={currentPage} currentWork={currentWork} />
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
        {/* <InnerPagesRoutes getCurrentWork={getCurrentWork} currentWork={currentWork} setCurrentSlider={setCurrentSlider}></InnerPagesRoutes> */}
        <InnerPagesRoutes
          setCurrentSlider={setCurrentSlider}
          setCurrentWorkContent={getCurrentWork}
          currentWorkContent={currentWork}
        ></InnerPagesRoutes>
      </div>
      <div id="mbua-fourth-column">
        <Menu
          menuItems={menuItems}
          currentPage={currentPage}
          getCurrentPage={getCurrentPage}
          setCurrentSlider={setCurrentSlider}
          mbuaSliderImages={mbuaSliderImages}
        ></Menu>
      </div>
    </div>
  );
};

export default Mbua;
