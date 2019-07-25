import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';
// import { push } from 'react-router-redux';

import actions from './actions';
// import currencyActions from '../currency/actions';
// import modalLoginActions from '../modals/login/actions';
// import modalRegisterActions from '../modals/register/actions';
// import modalForgotActions from '../modals/forgotPassword/actions';
// import modalEditProfileActions from '../modals/editProfile/actions';
// import modalProfileActions from '../modals/profile/actions';
// import gamesGridsActions from '../games/grids/actions';
// import sessionsActions from '../sessions/actions';
// import commonActions from '../common/actions';
// import socketActions from '../socket/actions';
// import { emitEventMessage } from '../../sockets/socket';

// import authAPI from '../../helpers/api/auth';
// import { storeData as localStoreData } from '../../helpers/localStorageUtils';
// import {
//   storeData as sessionStoreData,
//   restoreData as sessionRestoreData,
//   clearData as sessionClearData,
// } from '../../helpers/sessionStorageUtils';
// import { getGameID, makeLocalURLwithLocale } from '../../helpers/locationUtils';
// import { getServerError } from '../../helpers/commonUtils';
// import { showError, showSuccess } from '../../helpers/notifications';

// import { GAME_ERRORS, GAMES_GRID_MODE } from '../../constants/games';
// import { PROFILE_MODAL_TABS } from '../../constants/profile';

// import {
//   makeRequestStartGame,
//   makeRequestGamesDefaultGrid,
//   makeRequestGamesList,
// } from '../common';

// import { adaptBlockedFields, adaptUser, prepareUserProfile } from './utils';
// import { createDefaultGridLayout, createGamesGridLayout } from '../games/grids/utils';

// import { 
//   clearLocalStorage,
//   clearSessionStorage,
//   performUserLogin,
//   performApiDataReload,
//   performGameCategoriesLoad,
//   getStoreData,
//   performLoadingWebsiteScript,
// } from './functions';

function* appStart() {

	yield takeEvery(actions.APP_START, function*(action) {

    const { isRefreshToken } = action.payload;

		yield put(actions.loaderSet(true));

    // yield put(commonActions.gameCategoriesListReload());
    // yield put(commonActions.casinoProvidersListReload());
    // yield put(currencyActions.listReload());

    // yield call(performUserLogin, isRefreshToken);
		// yield call(performGameCategoriesLoad);

    // const { websiteID } = yield select(getStoreData);
    // localStoreData('websiteID', websiteID);

    // // Loading and preparing default grid
    // const defaultGrid       = yield call(makeRequestGamesDefaultGrid);
    // const defaultGridLayout = yield call(createDefaultGridLayout, defaultGrid);

    // yield put(gamesGridsActions.defaultGridSet(defaultGrid));
    // yield put(gamesGridsActions.defaultGridLayoutSet(defaultGridLayout));

    // const defaultGridUI = {
    //   hasMore       : true,
    //   gamesPerBlock : defaultGridLayout.length,
    // };

    // yield put(gamesGridsActions.defaultGridUISet(defaultGridUI));

    // // Loading partial games list
    // const params = {
    //   page    : 1,
    //   limit   : defaultGridUI.gamesPerBlock,
    //   sort_by : 'play_count',
    // };

    // const { list: gamesList } = yield call(makeRequestGamesList, params);

    // // Preparing layout for first block
    // const pageLayout = yield call(createGamesGridLayout, gamesList, GAMES_GRID_MODE.byDefault, defaultGrid);

    // yield put(gamesGridsActions.defaultGridGamesSet(gamesList));
    // yield put(gamesGridsActions.defaultGridPageSet(1, pageLayout));

    // // Starting game if we are on Game Page
    // const { pathname } = yield select(getStoreData);

    // const isGame = pathname && pathname.includes('/games');
    // const isDemo = pathname && pathname.includes('/demo');

    // if (isGame) {

    //   const gameID = getGameID(pathname);

    //   const data = {
    //     casinoGameID: gameID,
    //     isDemo,
    //   };
    //   try {
    //     const resStart = yield call(makeRequestStartGame, data);
    //     yield put(sessionsActions.dataSet(resStart));

    //   } catch (error) {
    //     const serverErrorMessage = getServerError(error);
    //     if (serverErrorMessage === GAME_ERRORS.insufficientBalance || serverErrorMessage === GAME_ERRORS.invalidCurrency) {
    //       yield put(modalProfileActions.uiSet({
    //         visible: true,
    //         currentTab: PROFILE_MODAL_TABS.deposit
    //       }));
    //     }
    //     showError('startGame', 'Starting game failed', error);
    //     yield put(sessionsActions.dataReset());
    //   }
    // };

    // finish
		yield put(actions.appStarted());
		yield put(actions.loaderSet(false));
	});
}

// function* userLogin() {

// 	yield takeEvery(actions.USER_LOGIN, function*(action) {

//     const { langID, pathname } = yield select(getStoreData);

//     yield put(modalLoginActions.uiSet({ loading: true }));

//     const { email, password, remember, gameID } = action.payload;
//     const loginData = {
//       email,
//       password,
//     };

//     let userInfo = yield call(adaptUser, { language_id: langID });
//     try {
//       const res = yield call(authAPI.userLogin, loginData);
//       if (res) {
//         const authToken = res.access_token;
//         userInfo  = yield call(adaptUser, res.user);

//         if (remember) {
//           yield call(localStoreData, 'authToken', authToken);
//           yield call(localStoreData, 'userID', userInfo.userID);

//         } else {
//           yield call(sessionStoreData, 'authToken', authToken);
//           yield call(sessionStoreData, 'userID', userInfo.userID);
//         }

//         yield put(actions.authTokenSet(authToken));
//         yield put(actions.userInfoSet(userInfo));

//         yield put(socketActions.reconnect(authToken));
//         yield put(modalLoginActions.reset());
//         yield put(actions.changeLanguage(userInfo.langID));
// 				yield call(localStoreData, 'langID', userInfo.langID);

//         if (gameID) {
//           yield put(sessionsActions.startGame(gameID, false));
//         };
//       };

//     } catch(error) {
//       console.log(error);
//       showError('login', 'Log In failed', error);
//     };

//     yield put(modalLoginActions.uiSet({ loading: false }));
//     if (pathname.includes('/login')) {
//       const rootURL = makeLocalURLwithLocale('/', userInfo.langID);
//       yield put(push(rootURL));

//     } else {
//       const pageURL = makeLocalURLwithLocale(pathname, userInfo.langID);
//       yield put(push(pageURL));
//     };
// 	});
// }

// function* userLogout(action) {

// 	yield takeEvery(actions.USER_LOGOUT, function*(action) {

//     const { pathname, langID, authToken } = yield select(getStoreData);
//     const { emitToSocket } = action.payload;

//     const isGame = pathname && pathname.includes('/games');
//     const isDemo = pathname && pathname.includes('/demo');

//     // If not emit to socket this means we got signal from socket about event "Logout" was happened on another device
//     // For more information see: "/src/sockets/subscribes.js", socket.on('logout')
//     if (emitToSocket) {
//       yield call(emitEventMessage, 'logout', { token: authToken });
//     };

//     yield call(clearLocalStorage);
//     yield call(clearSessionStorage);

//     yield put(actions.authTokenSet(null));
// 		yield put(actions.userInfoMerge({
//       userID    : null,
//       userName  : 'Guest',
//       firstName : 'Guest',
//       lastName  : '',
//       email     : '',
//       balance   : 0,
//     }));
//     yield put(socketActions.reconnect(null));

//     if (isGame && !isDemo) {
//       const gameID  = getGameID(pathname);
//       const gameURL = makeLocalURLwithLocale(`/games/demo/${gameID}`, langID);
//       yield put(push(gameURL));
//     };
// 	});
// }

// function* apiDataReload(action) {
// 	yield takeEvery(actions.API_DATA_RELOAD, function*(action) {
// 		yield call(performApiDataReload);
// 	});
// }

// function* userNotificationUpdate(action) {

// 	yield takeEvery(actions.USER_NOTIFICATION_UPDATE, function*({payload}) {

//     const { userInfo } = yield select(getStoreData);

//     const data = {
//       email_contact       : payload.emailContact,
//       phone_contact       : payload.phoneContact,
//       receive_newsletters : payload.receiveNewsletters,
//     };

//     try {
//       const res = yield call(authAPI.userUpdate, userInfo.userID, data);
//       const updatedInfo  = yield call(adaptUser, res);
//       yield put(actions.userInfoSet(updatedInfo));
//       showSuccess('notificationUpdate', 'userNotifications.success');

//     } catch(error) {
//       showError('notificationUpdate', 'Updating user info failed', error);
//     };
// 	});
// }

// function* userRegister(action) {

// 	yield takeEvery(actions.USER_REGISTER, function*(action) {

//     const { langID, pathname, registerData } = yield select(getStoreData);

//     yield put(modalRegisterActions.uiSet({ loading: true }));

//     const regData = {
//       ...registerData,
//       email               : action.payload.email,
//       password            : action.payload.password,
//       receive_newsletters : action.payload.receiveInfo,
//       lang_id             : langID,
//     };
//     if (registerData && registerData.campaign_id) {
//       regData.affiliate_reference = registerData.campaign_id;
//     }

//     // Check: may be campaign_id is in SessionStore if user has been reloaded page before registration
//     if (!regData.affiliate_reference) {
//       const regParams = sessionRestoreData('registrationParams');
//       if (regParams && regParams.campaign_id) {
//         regData.affiliate_reference = regParams.campaign_id;
//       }
//       sessionClearData('registrationParams');
//     }

//     const response = {
//       isError   : false,
//       messageID : '',
//     };

//     try {
//       const res = yield call(authAPI.userRegister, regData);
//       if (res) {
//         yield put(modalRegisterActions.uiSet({ visible: false }));
//         yield put(actions.userLogin(regData.email, regData.password, false));
//       };

//     } catch(error) {
//       console.log(error);
//       response.messageID = 'modal.register.registerError';
//       response.isError   = true;
//       showError('register', 'Registration failed', error);
//     };

//     yield put(modalRegisterActions.responseDataSet(response));
//     yield put(modalRegisterActions.uiSet({ loading: false, submitVisible: false}));

//     if (pathname.includes('/register')) {
//       const rootURL = makeLocalURLwithLocale('/', langID);
//       yield put(push(rootURL));
//     }
// 	});
// }

// function* userForgotPassword(action) {

// 	yield takeEvery(actions.USER_FORGOT_PASSWORD, function*(action) {

//     yield put(modalForgotActions.uiSet({ loading: true }));

//     const userData = {
//       email: action.payload.email,
//     };
//     const response = {
//       isError   : false,
//       messageID : '',
//     };

//     try {
//       const res = yield call(authAPI.userForgotPassword, userData);
//       if (res) {
//         response.messageID = 'modal.forgotPassword.forgotSuccess';
//       };

//     } catch(error) {
//       console.log(error);
//       response.messageID = 'modal.forgotPassword.forgotError';
//       response.isError   = true;
//       showError('forgotPassword', 'Sending email is failed', error);
//     };

//     yield put(modalForgotActions.responseDataSet(response));
// 		yield put(modalForgotActions.uiSet({ loading: false }));
// 	});
// }

// function* userUpdateProfile() {

//   yield takeEvery(actions.USER_INFO_UPDATE, function* ({ payload }) {

//     try {
//       yield put(modalEditProfileActions.uiSet({ loading: true }));
//       const { userInfo, blockedProfileFields } = yield select(getStoreData);

//       const preparedProfile = prepareUserProfile(payload, blockedProfileFields);

//       const res = yield call(authAPI.userUpdate, userInfo.userID, preparedProfile);
//       const updatedUserInfo  = yield call(adaptUser, res);

//       yield put(actions.userInfoSet(updatedUserInfo));
//       yield put(modalEditProfileActions.uiSet({ loading: false, visible: false }));
//       showSuccess('updateUser', 'userInfoEdit.success');

//     } catch (error) {
//       yield put(modalEditProfileActions.uiSet({ loading: false }));
//       showError('updateUser', 'Failed to update user', error);
//     }
//   });
// }

// function* userChangePassword() {

//   yield takeEvery(actions.USER_CHANGE_PASSWORD, function* ({ payload }) {

//     try {
//       yield put(modalProfileActions.uiSet({ changingPasswordLoading: true }));
//       yield call(authAPI.userChangePassword, payload.oldPassword, payload.newPassword);
//       showSuccess('changePassword', 'changePassword.success');
//       yield put(modalProfileActions.uiSet({ changingPasswordLoading: false }));

//     } catch (e) {
//       yield put(modalProfileActions.uiSet({ changingPasswordLoading: false }));
//       showError('changePassword', 'Failed to change password. Please, try again', e);
//     }
//   })
// }

// function* userChangeLanguage() {
//   yield takeEvery(actions.USER_CHANGE_LANGUAGE, function* ({ payload }) {
//     try {
//       const { userInfo } = yield select(getStoreData);
//       localStoreData('langID', payload);
//       const res = yield call(authAPI.userUpdate, userInfo.userID, {
//         language_id: payload
//       });
//       const updatedUserInfo  = yield call(adaptUser, res);
//       yield put(actions.userInfoSet(updatedUserInfo));
//     } catch (e) {
//       showError('changeLanguage', 'Failed to change language. Please, try again', e);
//     }
//   })
// }

// function* appLoadWebsiteScripts() {

//   yield takeEvery(actions.APP_LOAD_WEBSITE_SCRIPTS, function* ({ payload }) {

//     try {
//       yield call(performLoadingWebsiteScript);

//     } catch (e) {
//       // Nothing
//     }
//   })
// }

// function* userLoadProfileBlockedFields() {
//   yield takeEvery(actions.USER_LOAD_BLOCKED_PROFILE_FIELDS, function* () {
//     try {
//       const res = yield call(authAPI.userBlockedProfileFields);
//       yield put(actions.userLoadBlockedProfileFieldsSuccess(adaptBlockedFields(res)));
//     } catch (e) {
//       showError('loadProfileBlockedFields', 'Failed to load blocked profile fields. Please, try to reload the page', e);
//     }
//   });
// }

export default function* appSaga() {
	yield all([
    fork(appStart), 
    // fork(userLogin), 
    // fork(userLogout), 
    // fork(apiDataReload),
    // fork(userNotificationUpdate),
    // fork(userRegister),
    // fork(userForgotPassword),
    // fork(userUpdateProfile),
    // fork(userChangePassword),
    // fork(userChangeLanguage),
    // fork(appLoadWebsiteScripts),
    // fork(userLoadProfileBlockedFields),
  ]);
}
