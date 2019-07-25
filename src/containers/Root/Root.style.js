import styled from 'styled-components';
import withTheme from '../../config/themes/withTheme';
import { bottomBarHeight, topBarHeight, middleBarHeight, footerHeight, footerHeightXS, mediasmAndDown } from '../../config/style-config';


const head = bottomBarHeight + topBarHeight + middleBarHeight;
const headAndFooter = head + footerHeight;
const headAndFooterXS = head + footerHeightXS;

const RootWrapper = withTheme(styled.div`
	width: 100%;
	box-sizing: border-box;
	overflow-x: hidden;

	.has-success.has-feedback,
	.has-warning.has-feedback,
	.has-error.has-feedback,
	.is-validating.has-feedback {
		&:after {
			top: 5px;
		}
	}
	&.homePage {
		padding-bottom: 75px;
	}

	.fix-head {
		position: sticky;
		top: 0;
	}
`);

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: auto;
	width: 100%;
`;

export const Main = styled.div`
	position: relative;
	height: auto;
	width: 100%;
`;

export default RootWrapper;
