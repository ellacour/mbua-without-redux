import React from "react";
import { Link } from "react-router-dom";

import "./sliderButton.css";
import blackPlus from "../../img/mbuA_+ Graphic.png";

const SliderButtons = props => {
  const { currentWork, currentPage } = props;

  const toggleSliderHandler = event => {
    event.preventDefault();
    const slider = document.getElementsByClassName("slider-wrapper");
    slider[0].classList.toggle("large-slider");
    const sliderPlusButton = document.getElementById("plus-button-slider");
    sliderPlusButton.classList.toggle("active");
  };

  const currentProjectHandler = () => {
    if (currentPage === "mbuA") {
      const slider = document.getElementsByClassName("slider-wrapper");
      slider[0].classList.toggle("large-slider");
    }
  };
  return (
    <div id="Slider-buttons">
      {currentWork && (
        <Link
          onClick={currentProjectHandler}
          to={`/mbua/work/${currentWork.slug}`}
          className="slider-button-work"
        >
          {currentWork.title}
        </Link>
      )}
      {currentPage !== "mbuA" && (
        <button
          id="plus-button-slider"
          className="slider-button"
          onClick={toggleSliderHandler}
        >
          <img className="slider-plus" src={blackPlus} alt="button"></img>
        </button>
      )}
    </div>
  );
};
export default SliderButtons;
