import React, { Component } from "react";
import sliderPhotoMeals from "../../images/sliderPhotoMeals.png";
import sliderPhotoEvents from "../../images/sliderPhotoEvents.png";
import { Slide } from "react-slideshow-image";
import { Wrap } from "./EventSlider.style";

const properties = {
  duration: 3000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true
};

class EventsSlider extends React.Component {
  render() {
    return (
      <Wrap>
        <Slide {...properties}>
          <div className='each-slide'>
            <div style={{ backgroundImage: `url(${sliderPhotoMeals}) `, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            </div>
          </div>
          <div className='each-slide'>
            <div style={{ backgroundImage: `url(${sliderPhotoEvents})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            </div>
          </div>
        </Slide>
      </Wrap>
    );
  }
}

export default EventsSlider;

