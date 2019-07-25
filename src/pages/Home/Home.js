import React, { Component } from "react";
import BannersSlider from '../../containers/BannersSlider';
import {
  Desktop,
  Wrapper,
  Wrap,
  Wrap2,
  StyleButton,
  MiddleBar,
  Events,
  AboutEvent,
  Back,
  BannerWrap
} from "./Home.Style";
import white1880 from "../../images/white1880.png";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import food from "../../images/food.png";
import MealsSlider from "../../containers/MealsSlider/MealsSlider";
import EventsSlider from "../../containers/EventsSlider/EventsSlider";

import image1 from '../../img/image1.png'
import image2 from '../../img/image2.png'
import image3 from '../../img/image3.png'
import image4 from '../../img/image4.png'
import image5 from '../../img/image5.png'
import image6 from '../../img/image6.png'
import image7 from '../../img/image7.png'
import image8 from '../../img/image8.png'
import image9 from '../../img/image9.png'
import image10 from '../../img/image10.png'
import image11 from '../../img/image11.png'
import image12 from '../../img/image12.png'
import image13 from '../../img/image13.png'
import image14 from '../../img/image14.png'
import image15 from '../../img/image15.png'
import fish from '../../img/fish.png'
import gold from '../../img/gold.png'


export class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Desktop>
          <img className='pic' src={white1880} />
          <Link className='hope' to='/en/book'>
            <StyleButton className="btn">
              BOOK A TABLE
            </StyleButton>
          </Link>
          <p className='style_p'>SCROLL DOWN</p>
          <a href='#taste'>
            <div className='icon_style'>
              <Icon type='down' className='icon_style' />
            </div>
          </a>
        </Desktop>

        <MiddleBar id='taste'>
          <div>
            <p className='high_shript'>DILICIOUS TASTE</p>
            <p className='small_shrift'>Highest quality of delicious food.</p>
          </div>
          <img src={food} />
        </MiddleBar>
        {/* <BannerWrap><BannersSlider /></BannerWrap> */}

        <MealsSlider />
        <Back>
          <div className="wrap1">
            <h1>CHECK OUT THE MENU</h1>
            <img src={gold} />
          </div>
          <div className='wrap2'>
            <img src={image3} />
          </div>
          <div className="wrap3">
            <img src={image1} />
          </div>
          <div className='wrap4'>
            <img src={image4} />
            <img className='img2' src={image2} />
          </div>
          <div className='wrap5'>
            <img className="img_5" src={image5} />
            <img src={image6} />
          </div>
          <div className='wrap6'>
            <img src={image7} />
            <img className="img_8" src={image8} />
          </div>
          <div className='wrap7'>
            <img src={image9} />
            <img src={image10} />
          </div>
          <div className='wrap8'>
            <img className="img_12" src={image12} />
            <img className="img_11" src={image11} />
            <img className="img_13" src={image13} />
          </div>
          <div className='wrap9'>
            <img className='img_14' src={image14} />
          </div>
          <div className='wrap10'>
            <img src={image15} />
          </div>
        </Back>
        <Wrap2>
          <EventsSlider />
        </Wrap2>
        <Events>
          <p>UPCOMING EVENT</p>
          <div>ZZ TOP</div>
          <p className='eventdate'>July 18th | 19:00</p>
        </Events>
        <AboutEvent>
          <div className='div_style'>ICREDIBLE ZZ TOP | JULY 18</div>
          <p>
            On July 18th 19:00 we have one of greatest artists in blues rock
            genre ZZ Top to perform for you. Don’t miss the opportunity
          </p>
        </AboutEvent>
      </Wrapper>
    );
  }
}

export default Home;
