import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import URL from 'url-parse';

// import MainButton from '../../../components/MainButton';
import { isID } from '../../../helpers/commonUtils';

import { Holder, Image, Info, NameHolder, Name, Desc, ButtonsHolder } from './Banner.style';

class Banner extends Component {

  static propTypes = {
    banner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      imageURL: PropTypes.string,
      link: PropTypes.string,
      linkText: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
    }).isRequired,
  };



  render() {
    const { banner } = this.props;
    const { id, name, imageURL, title } = banner;

    const showButton = isID(id);


    return (
      <Holder>
        <Image src={imageURL} />
      </Holder>
    )
  }
}

export default Banner;
