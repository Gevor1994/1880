import React, { Component } from 'react';
import BottomBar from './BottomBar';
import { NavWrapper } from './TopNav.style';

class TopNav extends Component {

	render() {
		return (
			<NavWrapper id="topnav">
				 <BottomBar />
			</NavWrapper>
		);
	}
}

export default TopNav;
