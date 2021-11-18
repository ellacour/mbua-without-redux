import React, { useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./mbuaSlider.css";

const MbuaSlider = props => {

  const [currentPage, setCurrentPage] = useState(props.currentPage);
  

  const settings = {
    fade: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const sliderImg = props.currentSlider;

  const sliders = () => {
    console.log(currentPage);
    return sliderImg.map(data => {
      return (
        <div
          className={`mbua-slider-img-wrapper ${currentPage === "mbuA" &&
            "largeSlider currentPage"}`}
          key={data.ID}
        >
          <img
            alt={data.title}
            src={data.sizes.large}
            className="mbua-slider-img"
          />
        </div>
      );
    });
  };

  return sliderImg ? (
    <Slider {...settings}>{sliders()}</Slider>
  ) : (
    <div>please wait</div>
  );
};

export default MbuaSlider;
