import styled from 'styled-components';
import withTheme from './themes/withTheme';
// sizes
// export const sizeUltraSmallMobile = 320;
// export const sizeMicroMobile      = 419;
// export const sizeMobile           = 480;
// export const sizeLargeMobile      = 580;
// export const sizeTablet           = 767;
// export const sizeMiddle           = 1024;
// export const sizeLarge            = 1025;
// export const sizeExtraLarge       = 1470;
// export const mobileHeight         = 820;

// export const maxWidthUltraSmallMobile = `max-width: ${sizeUltraSmallMobile}px`;
// export const maxWidthMicroMobile      = `max-width: ${sizeMicroMobile}px`;
// export const maxWidthMobile           = `max-width: ${sizeMobile}px`;
// export const maxWidthTablet           = `max-width: ${sizeTablet}px`;
// export const maxWidthMiddle           = `max-width: ${sizeMiddle}px`;
// export const maxWidthExtraLarge       = `max-width: ${sizeExtraLarge}px`;
// export const maxWidthLarge            = `max-width: ${sizeLarge}px`;

// export const maxDeviceWidthMobile     = `max-device-width: ${sizeMobile}px`;
// export const maxDeviceWidthTablet     = `max-device-width: ${sizeTablet}px`;
// export const maxDeviceWidthLargeMobile = `max-device-width: ${sizeLargeMobile}px`;

// Screen Sizes
export const xsEdgeMin = 358;
export const xsPlusMin = 412;
export const smMin = 600;
export const mdMin = 992;
export const lgMin = 1200;
export const xsMax = xsEdgeMin - 1;
export const xsEdgeMax = xsPlusMin - 1;
export const xsPlusMax = smMin - 1;
export const smMax = mdMin - 1;
export const mdMax = lgMin - 1;

// Gutters
const xsGutter = 12;
const xsEdgeGutter = 12;
const xsPlusGutter = 12;
const smGutter = 20;
const mdGutter = 28;
const lgGutter = 28;

// Number of Grid Columns
// $zh-grid-colnum: 12 !default;

// Containe Sizes
// $zh-container-xs-margin: 10px !default;
// $zh-container-xsEdge-margin: 12px !default;
// $zh-container-xsPlus-margin: 12px !default;
export const xsContainer = 300;
export const xsEdgeContainer = 336;
export const xsPlusContainer = 390;
export const smContainer = 560;
export const mdContainer = 940;
export const lgContainer = 1148;
// $zh-container-xs-gross: ($zh-container-xs + $zh-container-xs-margin*2) !default;
// $zh-container-xsEdge-gross: ($zh-container-xsEdge + $zh-container-xsEdge-margin*2) !default;
// $zh-container-xsPlus-gross: ($zh-container-xsPlus + $zh-container-xsPlus-margin*2) !default;
// $zh-container-sm-gross: ($zh-container-sm + $zh-gutter-sm) !default;
// $zh-container-md-gross: ($zh-container-md + $zh-gutter-md) !default;
// $zh-container-lg-gross: ($zh-container-lg + $zh-gutter-lg) !default;

// Media Query Ranges
export const mediaxs =              `screen and (max-width: ${xsMax}px)`;
export const mediaxsEdge =          `screen and (min-width: ${xsEdgeMin}px) and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlus =          `screen and (min-width: ${xsPlusMin}px) and (max-width: ${xsPlusMax}px)`;
export const mediasm =              `screen and (min-width: ${smMin}px) and (max-width: ${smMax}px)`;
export const mediamd =              `screen and (min-width: ${mdMin}px) and (max-width: ${mdMax}px)`;
export const medialg =              `screen and (min-width: ${lgMin}px)`;
export const mediaxsEdgeAndUp =     `screen and (min-width: ${xsEdgeMin}px)`;
export const mediaxsPlusAndUp =     `screen and (min-width: ${xsPlusMin}px)`;
export const mediasmAndUp =         `screen and (min-width: ${smMin}px)`;
export const mediamdAndUp =         `screen and (min-width: ${mdMin}px)`;
export const mediaxsEdgeAndDown =   `screen and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlusAndDown =   `screen and (max-width: ${xsPlusMax}px)`;
export const mediasmAndDown =       `screen and (max-width: ${smMax}px)`;
export const mediamdAndDown =       `screen and (max-width: ${mdMax}px)`;

export const Container = withTheme(styled.div`
	display: flex;
	align-items: center;
	width: ${lgContainer}px;
	height: 100%;

	@media ${mediamd} {
		width: ${mdContainer}px;
	}
	@media ${mediasm} {
		width: ${smContainer}px;
	}
	@media ${mediaxsPlus} {
		width: ${xsPlusContainer}px;
	}
	@media ${mediaxsEdge} {
		width: ${xsEdgeContainer}px;
	}
	@media ${mediaxs} {
		width: ${xsContainer}px;
	}
`);

//NavBar

export const topBarHeight = 70;
export const middleBarHeight = 40;
export const bottomBarHeight = 50;
export const footerHeight = 424;

export const middleBarHeightXS = 25;
export const footerHeightXS = 568;