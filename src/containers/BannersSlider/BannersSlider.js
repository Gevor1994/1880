import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Carousel } from 'antd';
import sliderPhotoMeals from '../../images/sliderPhotoMeals.png';
import sliderPhotoEvents from '../../images/sliderPhotoEvents.png';
import Banner from './Banner';
import { Wrapper, LoaderContainer } from './BannersSlider.style';
import { intlMessageValue } from '../../helpers/storeUtils';

const bannersList = [
  {
    id: 1,
    imageURL: sliderPhotoMeals,
  },
  {
    id: 2,
    imageURL: sliderPhotoEvents,
  },
];

const UI = {
  loading: false,
  loaded: false,
  rotationTime: 5000,
};

const emptyBanner = {
  id: 0,
  imageURL: null,
};

class BannersSlider extends Component {

  render() {
    const { className } = this.props;
    const { rotationTime } = UI;


    const resultList = !isEmpty(bannersList)
      ? bannersList
      : [emptyBanner];

    const banners = resultList.map(item => {
      return (
        <Banner
          key={item.id}
          banner={item}
        />
      );
    });

    return (
      <Wrapper className={className}>
        <Carousel
          autoplay={true}
          autoplaySpeed={rotationTime}
          dots={false}
        >
          {banners}
        </Carousel>
      </Wrapper>
    )
  }
}

export default connect(
  ({ App }) => ({
    appStarted: App.get('appStarted'),
  }), null)(BannersSlider);
