import React from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import "./mbuaSlider.css";

const MbuaSlider = props => {
  const { currentPage, getCurrentSlide } = props;
  const sliderImg = props.currentSlider;

  const settings = {
    fade: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    afterChange: getCurrentSlide,
  };

  const sliders = () => {
    return sliderImg.map(data => {
      return (
        <div
          className={`mbua-slider-img-wrapper ${currentPage === "mbua" &&
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
    <div>
      <Slider {...settings}>{sliders()}</Slider>
    </div>
  ) : (
    <div>please wait</div>
  );
};

export default MbuaSlider;
