import { isArray, isEmpty, toInteger, last } from 'lodash';
import { MAIN_SITE_URL, defaultLanguage, defaultLocale } from '../config';
import { LANGUAGES } from '../constants/common';

import Base64 from './Base64';
import { isID } from './commonUtils';

export const rootURL = window.location.origin;

export function redirectDirectly(url) {
  window.location.href = url;
}

export function redirectToMain(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  window.location.href = MAIN_SITE_URL + (extraURL ? '/' + extraURL : '');
}

export function getUserDataFromCasinoHash() {

  const queryString = window.location.search.replace('?', '');
  if (!queryString) {
    return null;
  };

  let hash = null;

  const pairs = queryString.split('&');
  for (let pair of pairs) {
    const nameValue = pair.split('=');
    if (nameValue[0] === 'hash') {
      hash = nameValue[1] || null;
      break;
    };
  };

  if (!hash) {
    return null;
  };

  const decodedString = Base64.decode(hash);
  try {
    const userData = JSON.parse(decodedString);
    return userData;

  } catch(err) {
    console.log(err);
  };

  return null;
};

export function getMainURL(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  return MAIN_SITE_URL + (extraURL ? '/' + extraURL : '');
};

export function getGameID(pathname = '') {
  if (!pathname) {
    return null;
  };

  const parts = pathname.split('/');
  if (!isArray(parts) || isEmpty(parts)) {
    return null;
  };

  const gameID = toInteger( last(parts) );
  if (!isID(gameID)) {
    return null;
  };

  return gameID;
}

export function getLangID(pathname = '') {
  if (!pathname) {
    return defaultLanguage;
  };

  const parts = pathname.split('/');
  if (!isArray(parts) || isEmpty(parts)) {
    return defaultLanguage;
  };

  const locale = String(parts[1]).toLowerCase();
  switch (locale) {
    case 'en':
      return LANGUAGES.en;

    case 'arm':
      return LANGUAGES.arm;

    case 'ru':
      return LANGUAGES.ru;

    default:
      return defaultLanguage;
  }
}

export function makeLocalURLwithLocale(localURL, langID) {

  let locale = defaultLocale;
  switch (langID) {
    case LANGUAGES.en:
      locale = 'en';
      break;

    case LANGUAGES.arm:
      locale = 'arm';
      break;

    case LANGUAGES.ru:
      locale = 'ru';
      break;

    default:
  };

  const briefURL = String(localURL)
    .replace(/^\/en/, '')
    .replace(/^\/ru/, '')
    .replace(/^\/arm/, '')
    .replace(/^\/{1}/, '');

  return `/${locale}/${briefURL}`;
}

export function redirectLocal(localURL = null) {
  const extraURL = Boolean(localURL) ? String(localURL).replace(/^\/{1}/, '') : '';
  window.location.href = rootURL + (extraURL ? '/' + extraURL : '');
}

export function checkIsRefreshToken() {
  const queryParams = window.location.search;
  return queryParams.includes('refresh_token');
}

export function checkIsHomePage() {
  const locationPath = window.location.pathname;
  if (
    locationPath === '/ru'  || 
    locationPath === '/arm'  ||
    locationPath === '/en'  || 
    locationPath === '/ru/' || 
    locationPath === '/arm/' || 
    locationPath === '/en/') {
     return true
  }
  return false
}