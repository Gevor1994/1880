const actions = {

  APP_START                : 'APP_START',
  APP_STARTED              : 'APP_STARTED',

  AUTH_TOKEN_SET           : 'AUTH_TOKEN_SET',
  WEBSITE_ID_SET           : 'WEBSITE_ID_SET',
  WEBSITE_CASINO_ID_SET    : 'WEBSITE_CASINO_ID_SET',
  APP_LOADER_SET           : 'APP_LOADER_SET',

  USER_LOGIN               : 'USER_LOGIN',
  USER_LOGOUT              : 'USER_LOGOUT',

  USER_SET_REG_DATA        : 'USER_SET_REG_DATA',

  USER_INFO_UPDATE         : 'USER_INFO_UPDATE',
  USER_INFO_SET            : 'USER_INFO_SET',
  USER_INFO_MERGE          : 'USER_INFO_MERGE',
  USER_NOTIFICATION_UPDATE : 'USER_NOTIFICATION_UPDATE',
  USER_SET_CURRENCY        : 'USER_SET_CURRENCY',

  USER_LOAD_BLOCKED_PROFILE_FIELDS: 'USER_LOAD_BLOCKED_PROFILE_FIELDS',
  USER_LOAD_BLOCKED_PROFILE_FIELDS_SUCCESS: 'USER_LOAD_BLOCKED_PROFILE_FIELDS_SUCCESS',

  USER_GUEST_SET           : 'USER_GUEST_SET',

  API_DATA_RELOAD          : 'API_DATA_RELOAD',
  API_DATA_SET             : 'API_DATA_SET',

  USER_REGISTER            : 'USER_REGISTER',
  USER_FORGOT_PASSWORD     : 'USER_FORGOT_PASSWORD',
  USER_RESET_PASSWORD      : 'USER_RESET_PASSWORD',

  USER_CHANGE_PASSWORD     : 'USER_CHANGE_PASSWORD',

  USER_CHANGE_LANGUAGE     : 'USER_CHANGE_LANGUAGE',
  CHANGE_LANGUAGE          : 'CHANGE_LANGUAGE',

  APP_LOAD_WEBSITE_SCRIPTS : 'APP_LOAD_WEBSITE_SCRIPTS',

  appStart: (isRefreshToken = false) => ({
    type: actions.APP_START,
    payload: {
      isRefreshToken,
    }
  }),

  appStarted: () => ({
    type: actions.APP_STARTED,
  }),

  authTokenSet: authToken => ({
    type: actions.AUTH_TOKEN_SET,
    payload: {
      authToken,
    }
  }),

  websiteIDSet: websiteID => ({
    type: actions.WEBSITE_ID_SET,
    payload: {
      websiteID,
    }
  }),

  websiteCasinoIDSet: websiteCasinoID => ({
    type: actions.WEBSITE_CASINO_ID_SET,
    payload: {
      websiteCasinoID,
    }
  }),

  loaderSet: loading => ({
    type: actions.APP_LOADER_SET,
    payload: {
      loading,
    }
  }),

  userLogin: (email, password, remember, gameID = null) => ({
    type: actions.USER_LOGIN,
    payload: {
      email,
      password,
      remember,
      gameID,
    }
  }),

  userLogout: (emitToSocket = true) => ({
    type: actions.USER_LOGOUT,
    payload: {
      emitToSocket,
    }
  }),

  userSetRegData: data => ({
    type: actions.USER_SET_REG_DATA,
    payload: data,
  }),

  userInfoUpdate: info => ({
    type: actions.USER_INFO_UPDATE,
    payload: info
  }),

  userInfoSet: userInfo => ({
    type: actions.USER_INFO_SET,
    payload: {
      userInfo,
    }
  }),
  userInfoMerge: userInfo => ({
    type: actions.USER_INFO_MERGE,
    payload: {
      userInfo,
    }
  }),

  userNotificationUpdate: updates => ({
    type: actions.USER_NOTIFICATION_UPDATE,
    payload: updates
  }),

  userGuestSet: () => ({
    type: actions.USER_GUEST_SET,
  }),

  apiDataReload: () => ({
    type: actions.API_DATA_RELOAD,
  }),

  apiDataSet: apiData => ({
    type: actions.API_DATA_SET,
    payload: apiData,
  }),

  userRegister: (userData) => ({
    type: actions.USER_REGISTER,
    payload: userData,
  }),

  userForgotPassword: (userData) => ({
    type: actions.USER_FORGOT_PASSWORD,
    payload: userData,
  }),

  userResetPassword: (hash) => ({
    type: actions.USER_RESET_PASSWORD,
    payload: {
      hash,
    },
  }),

  userChangePassword: (oldPassword, newPassword) => ({
    type: actions.USER_CHANGE_PASSWORD,
    payload: {
      oldPassword,
      newPassword
    }
  }),

  userChangeLanguage: langID => ({
    type: actions.USER_CHANGE_LANGUAGE,
    payload: langID
  }),

  changeLanguage: langID => ({
    type: actions.CHANGE_LANGUAGE,
    payload: langID
  }),

  userSetCurrency: currencyID => ({
    type: actions.USER_SET_CURRENCY,
    payload: currencyID
  }),

  userLoadBlockedProfileFields: () => ({
    type: actions.USER_LOAD_BLOCKED_PROFILE_FIELDS
  }),

  userLoadBlockedProfileFieldsSuccess: fields => ({
    type: actions.USER_LOAD_BLOCKED_PROFILE_FIELDS_SUCCESS,
    payload: fields
  }),

  appLoadWebsiteScripts: () => ({
    type: actions.APP_LOAD_WEBSITE_SCRIPTS,
  }),
};

export default actions;
