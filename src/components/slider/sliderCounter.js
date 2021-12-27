import React, { useState, useEffect } from "react";

const SliderCounter = props => {
  const [numberOfSlides, setNumberOfSlides] = useState("");
  const { currentSlide, totalSlides } = props;
  
  useEffect(() => {
    setNumberOfSlides(totalSlides);
  },[totalSlides]);

  return currentSlide && numberOfSlides ? (
    <div id="slider-counter">
     { `${currentSlide}|${numberOfSlides} `}
    </div>
  ) : (
    <div></div>
  );
};

export default SliderCounter;
