import React from "react";
import { Link } from "react-router-dom";
import "./sliderButton.css"

const SliderButtons = props => {
  const { currentWork, currentPage } = props;

  const toggleSlider = (event) => {
    event.preventDefault();
    const slider = document.getElementsByClassName("slider-wrapper");
    slider[0].classList.toggle("large-slider");
  };

  return (
    <div id="Slider-buttons">
      {currentWork && (
        <Link
          to={`/mbua/work/${currentWork.slug}`}
          className="slider-button-work"
        >
          {currentWork.title}
        </Link>
      )}
      {currentPage !== "mbuA" && (
        <a className="slider-button-toggle" href="/" onClick={toggleSlider} >Show more</a>
      )}
    </div>
  );
};
export default SliderButtons;
