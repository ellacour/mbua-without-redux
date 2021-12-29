import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./mbua.css";
import MbuaSlider from "./slider/mbuaSlider";
import SliderCounter from "./slider/sliderCounter";
import Menu from "./navigations/mainMenu";
import SliderButtons from "./navigations/sliderButtons";
import InnerPagesRoutes from "./innerpages/innerPagesRoutes";

const Mbua = props => {
  const history = useHistory();
  const { mbuaName, mbuaTitle, mbuaSliderImages, menuItems,currentPage, setCurrentPage } = props;

  const [currentSlider, setCurrentSlider] = useState([]);
  const [currentWork, setCurrentWork] = useState("");
  const [currentSlide, setCurrentSlide] = useState(1);
 
  
  useEffect(() => {
    history.location.pathname ==="/mbua" && setCurrentPage("mbuA");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentSlider(mbuaSliderImages);
  }, [mbuaSliderImages]);

  useEffect(() => {
    setCurrentSlide(1);
  }, [currentSlider]);


  const getCurrentWork = work => {
    setCurrentWork(work);
  };

  const getCurrentSlide = () => {
    currentSlide < currentSlider.length && setCurrentSlide(prevState => prevState+1);
    currentSlide >= currentSlider.length && setCurrentSlide(1);
  };

  return (
    <div id="mbua">
      <div id="mbua-first-column">
        <h1 className="title ">
          {mbuaName}
          <span className="italic-text">{mbuaTitle}</span>
        </h1>
        <SliderButtons
          currentPage={currentPage}
          currentWork={currentWork}
        />
      </div>
      <div id="mbua-second-column">
        <div
          className={`slider-wrapper ${currentPage === "mbuA" &&
            "large-slider"}`}
        >
          <MbuaSlider
            currentSlider={currentSlider}
            currentPage={currentPage}
            getCurrentSlide={getCurrentSlide}
          ></MbuaSlider>
        </div>
      </div>
      <div id="mbua-third-column">
        <InnerPagesRoutes
          setCurrentSlider={setCurrentSlider}
          setCurrentWorkContent={getCurrentWork}
          currentWorkContent={currentWork}
          currentPage={currentPage}
        ></InnerPagesRoutes>
      </div>
      <div id="mbua-fourth-column">
        <SliderCounter
          currentSlide={currentSlide}
          totalSlides={currentSlider.length}
        />
        <Menu
          menuItems={menuItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCurrentSlider={setCurrentSlider}
          mbuaSliderImages={mbuaSliderImages}
        ></Menu>
      </div>
    </div>
  );
};

export default Mbua;
