import { PROTOCOLS, LANGUAGES } from './constants/common';
// import { getDomain } from './helpers/getDomain';

export const siteConfig = {
	siteName   : '1880 Bar & More',
	footerText : '1880 Bar & More',
};


export const host = window.location.hostname;

// export const DEV_API_PATH         = process.env.REACT_APP_DEV_API_PATH    || 'https://api.bmakers.site/v1/';
// export const DEV_SOCKET_PATH      = process.env.REACT_APP_DEV_SOCKET_PATH || 'https://wsapi.bmakers.site';
export const DEV_MAIN_SITE_PATH   = `http://${host}:3001`;
// export const DEV_CASINO_PROTOCOL  = PROTOCOLS.http;

// export const PROD_API_PATH        = `https://api.${getDomain()}/v1`;
// export const PROD_SOCKET_PATH     = `https://wsapi.${getDomain()}`;
export const PROD_MAIN_SITE_PATH  = `https://www.1880.am`;
// export const PROD_CASINO_PROTOCOL = PROTOCOLS.https;

// export const SOCKET_URL           = process.env.REACT_APP_MODE === 'development' ? DEV_SOCKET_PATH : PROD_SOCKET_PATH;
// export const API_URL              = process.env.REACT_APP_MODE === 'development' ? DEV_API_PATH : PROD_API_PATH;
// export const MAIN_SITE_URL        = process.env.REACT_APP_MODE === 'development' ? DEV_MAIN_SITE_PATH : PROD_MAIN_SITE_PATH;
export const MAIN_SITE_URL        = DEV_MAIN_SITE_PATH;
// export const CASINO_PROTOCOL      = process.env.REACT_APP_MODE === 'development' ? DEV_CASINO_PROTOCOL : PROD_CASINO_PROTOCOL;

// export const socketConfig = {
// 	apiProtocol : 'http',
// 	apiPort     : 5002,
// 	apiVersion  : 'api/v1',
// };

// export const prodSocketConfig = {
// 	url      : 'wsapi.bet-makers.com',
// 	protocol : 'https',
// };

export const language           = 'en';
// export const casinoID           = 1;
// export const websiteID          = 1; // Default Main Website ID
export const defaultTheme       = 'blue'; // one of ['dark', 'green', 'blue'] - defined in src/config/themes
export const defaultLanguage    = LANGUAGES.en;
export const defaultLocale      = 'en';
export const sliderRotationTime = 5000; // in ms

const config = {
	host,
	// siteConfig,
	// apiConfig,
	language,
	defaultTheme,
};

export default config;
