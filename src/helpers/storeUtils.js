import { store } from '../redux/store';
import { Map } from 'immutable';

import { LANGUAGES } from '../constants/common';

import messagesEn from '../languageProvider/locales/en_US.json';
import messagesRu from '../languageProvider/locales/ru_RU.json';
import messagesArm from '../languageProvider/locales/arm_ARM';

import errorsEn from '../languageProvider/errors/en_US';
import errorsRu from '../languageProvider/errors/ru_RU';
import errorsArm from '../languageProvider/errors/arm_ARM';

const localeMessages = {
  1: { ...messagesEn },
  2: { ...messagesRu },
  3: { ...messagesArm }
};

const localeErrorMessages = {
  1: { ...errorsEn },
  2: { ...errorsRu },
  3: { ...errorsArm }
};

// Common -----------------------------------------------------------------------------------------

export function select(sectionName = null) {
  if (!store) {
    return new Map({});
  }

  const currentStore = store.getState();
  if (!sectionName) {
    return currentStore;
  }

  return currentStore[sectionName] || new Map({});
}

// Language ---------------------------------------------------------------------------------------

export function intlMessageValue(messageID) {
  if (!Boolean(messageID)) {
    return '';
  }

  const langID   = langIDValue();
  const messages = localeMessages[langID] || {};
  return messages[messageID];
}

export function intlErrorMessageValue(messageID) {
  if (!Boolean(messageID)) {
    return '';
  }

  const langID = langIDValue();
  const messages = localeErrorMessages[langID];
  return messages[messageID];
}

export function langIDValue() {

  const App = select('App');

  return App.get('langID') || LANGUAGES.en;
}

// Auth Token -------------------------------------------------------------------------------------

export function authTokenValue() {

  const App = select('App');
  const authToken = App.get('authToken');
  if (!Boolean(authToken)) {
    return null;
  };

  return authToken;
}

export function websiteIDValue() {
  const App = select('App');

  return App.get('websiteID');
}

