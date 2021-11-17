import React, { useState, useEffect } from "react";

import "./mbua.css";
import Slider from "./slider/slider";

const Mbua = props => {
  const [currentSlider, setCurrentSlider] = useState([]);
  const { mbuaName, mbuaTitle, sliderImages } = props;

  useEffect(() => {
    setCurrentSlider(sliderImages);
  }, [sliderImages]);

  const narrowSlider = () => {
    const slider = document.getElementsByClassName("slider-wrapper");
    slider[0].classList.toggle("large-slider");
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
        <div className="slider-wrapper large-slider">
          <Slider currentSlider={currentSlider}></Slider>
        </div>
      </div>
      <div id="mbua-third-column"></div>
      <div id="mbua-fourth-column">
        <button onClick={narrowSlider}>Narrow slider</button>
      </div>
    </div>
  );
};

export default Mbua;
