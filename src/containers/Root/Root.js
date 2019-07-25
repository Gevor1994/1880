import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from '../../router/routes';
import TopNav from '../TopNav';
import Footer from '../Footer';
import RootWrapper, { ContentWrapper, Main } from './Root.style.js';


class RootContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    const wrap = document.getElementById('main');
    const nav = document.getElementById('topnav');
    const bb = wrap ? wrap.getBoundingClientRect() : null;
    let isFixed = false;

    if (!bb) return;
    if (bb.y !== 0 && bb.y < 0) {
      nav.classList.add('fix-head');
      isFixed = true;
    } else if (nav.classList.contains('fix-head')) {
      nav.classList.remove('fix-head');
    }
    this.setState({ isFixed });
  }


  render() {
    const {
      location,

    } = this.props;
    const { isFixed } = this.state;

    return (
      <RootWrapper id="rootContainer">
        <TopNav isFixed={isFixed} />
        <Main id="main">
          <ContentWrapper>
            <Routes />
          </ContentWrapper>
          <Footer />
        </Main>
      </RootWrapper>
    );
  }
}

export default connect(
  ({ App }) => ({
    appStarted: App.get('appStarted'),
    userInfo: App.get('userInfo'),
    loading: App.get('loading'),

  }), null)(RootContainer);
