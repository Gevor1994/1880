import React, { Component } from "react";
import sliderPhotoMeals from "../../images/sliderPhotoMeals.png";
import sliderPhotoEvents from "../../images/sliderPhotoEvents.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-slideshow-image";
import "react-awesome-slider/dist/styles.css";
import { Wrap } from "./MealsSlider.style";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

class MealsSlider extends React.Component {
  render() {
    return (
      <Wrap>
        <Slide {...properties}>
          <div className='each-slide'>
            <div
              style={{
                backgroundImage: `url(${sliderPhotoMeals})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className='each-slide'>
            <div
              style={{
                backgroundImage: `url(${sliderPhotoEvents})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />
          </div>
        </Slide>
      </Wrap>
    );
  }
}

export default MealsSlider;
