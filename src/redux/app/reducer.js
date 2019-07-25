import { Map } from 'immutable';
import { merge, cloneDeep } from 'lodash';
import actions from './actions';

import { defaultTheme } from '../../config';
import themes from '../../config/themes';
import config from '../../languageProvider/config';

const initState = new Map({

  appStarted: false,

  websiteCasinoID : null,
  authToken       : '',
  theme           : themes[defaultTheme],
  loading         : false,

  userInfo: {
    userID   : null,
    userName : 'Guest',
    balance  : 0,
  },

  blockedProfileFields: [],

  langID   : config.defaultLanguage,

  apiData: {
    api_project : null,
    api_key     : null,
    api_version : null,
    api_host    : null,
  },
  registerData: {},
});

export default function appReducer(state = initState, action) {

  switch (action.type) {

    case actions.APP_STARTED: {
      return state.set('appStarted', true);
    }

    case actions.AUTH_TOKEN_SET: {
      const { authToken } = action.payload;
      return state.set('authToken', authToken);
    }

    case actions.WEBSITE_ID_SET: {
      const { websiteID } = action.payload;
      return state.set('websiteID', websiteID);
    }

    case actions.WEBSITE_CASINO_ID_SET: {
      const { websiteCasinoID } = action.payload;
      return state.set('websiteCasinoID', websiteCasinoID);
    }

    case actions.APP_LOADER_SET: {
      const { loading } = action.payload;
      return state.set('loading', loading);
    }

    case actions.USER_INFO_SET: {
      const { userInfo } = action.payload;
      return state.set('userInfo', userInfo);
    }

    case actions.USER_INFO_MERGE: {
      const { userInfo } = action.payload;
      const oldInfo = cloneDeep(state.get('userInfo'));
      const newInfo = merge(oldInfo, userInfo);
      return state.set('userInfo', newInfo);
    }

    case actions.USER_GUEST_SET: {
      const authToken = initState.get('authToken');
      const userInfo  = initState.get('userInfo');
      return state.set('authToken', authToken).set('userInfo', userInfo);
    }

    case actions.API_DATA_SET: {
      return state.set('apiData', action.payload);
    }

    case actions.CHANGE_LANGUAGE: {
      return state.set('langID', action.payload);
    }

    case actions.USER_LOAD_BLOCKED_PROFILE_FIELDS_SUCCESS: {
      return state.set('blockedProfileFields', action.payload);
    }

    case actions.USER_SET_REG_DATA: {
      return state.set('registerData', action.payload);
    }
    
    default:
      return state;
  }
}
