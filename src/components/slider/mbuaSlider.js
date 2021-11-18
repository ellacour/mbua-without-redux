import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./mbuaSlider.css";

const MbuaSlider = props => {
  const { currentPage } = props;
  const sliderImg = props.currentSlider;

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

  const toggleSlider = () => {
    const slider = document.getElementsByClassName("slider-wrapper");
    slider[0].classList.toggle("large-slider");
  };

  const sliders = () => {
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
    <div>
      { currentPage !== "mbuA" && <button className="slider-toggle-button" onClick={toggleSlider}>
        Toggle slider
      </button>}
      <Slider {...settings}>{sliders()}</Slider>
    </div>
  ) : (
    <div>please wait</div>
  );
};

export default MbuaSlider;
