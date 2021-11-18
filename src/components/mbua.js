import React, { useState, useEffect } from "react";


import "./mbua.css";
import Slider from "./slider/slider";
import Menu from "./navigations/mainMenu";

const Mbua = props => {
  const [currentSlider, setCurrentSlider] = useState([]);
  const [currentPage, setCurrentPage] = useState("mbuA");
  const { mbuaName, mbuaTitle, sliderImages, menuItems } = props;
 

  useEffect(() => {
    setCurrentSlider(sliderImages);
  }, [sliderImages]);
 
  
  // const narrowSlider = () => {
  //   const slider = document.getElementsByClassName("slider-wrapper");
  //   slider[0].classList.toggle("large-slider");
  // };
  const getCurrentPage = (page)=>{
    setCurrentPage(page);
  }

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
        <Menu menuItems={menuItems} currentPage={currentPage} getCurrentPage={getCurrentPage}></Menu>
      </div>
    </div>
  );
};

export default Mbua;
