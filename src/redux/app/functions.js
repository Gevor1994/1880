// import { put, call, select } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
// import { toInteger, isEmpty, sortBy } from 'lodash';

// import { websiteID } from '../../config';

// import { SCRIPT_POSITION } from '../../constants/content';
// import { apiData as defaultApiData } from '../../constants/casino';
// import { showWarning, showError } from '../../helpers/notifications';
// import { getUserDataFromCasinoHash, makeLocalURLwithLocale } from '../../helpers/locationUtils';

// import { 
// 	storeData   as localStoreData, 
// 	restoreData as localRestoreData, 
// 	clearData   as localClearData,
// } from '../../helpers/localStorageUtils';
// import { 
// 	restoreData as sessionRestoreData, 
// 	clearData   as sessionClearData,
// } from '../../helpers/sessionStorageUtils';

// import authAPI from '../../helpers/api/auth';
// import settingsAPI from '../../helpers/api/settings';
// import contentAPI from '../../helpers/api/content';

// import actions from './actions';
// import commonActions from '../common/actions';
// import gridsActions from '../games/grids/actions';
// import modalProfileActions from '../modals/profile/actions';
// import modalRegisterActions from '../modals/register/actions';
// import modalLoginActions from '../modals/login/actions';
// import modalResetPasswordActions from '../modals/resetPassword/actions';

// import { adaptUser, adaptApiData } from './utils';
// import { PROFILE_MODAL_TABS } from '../../constants/profile';

// import { makeRequestGameCategoriesList } from '../common/saga';

// function* redirectViaUrl() {

// 	const { pathname, isLoggedIn, langID } = yield select(({ router, App }) => ({
// 		pathname   : router.location.pathname,
// 		isLoggedIn : !isEmpty(App.get('authToken')),
// 		langID     : App.get('langID'),
// 	}));

// 	const regexLogin   			 = /^(\/en|\/ua|\/ru)?\/login?\/$/gm;
// 	const regexRegister 	   = /^(\/en|\/ua|\/ru)?\/register?\/$/gm;
// 	const regexDeposit  		 = /^(\/en|\/ua|\/ru)?\/deposit?\/$/gm;
// 	const regexResetPassword = /^(\/en|\/ua|\/ru)?\/resetPassword/gm;

// 	const isLogin         = regexLogin.test(pathname);
// 	const isRegister      = regexRegister.test(pathname);
// 	const isDeposit       = regexDeposit.test(pathname);
// 	const isResetPassword = regexResetPassword.test(pathname)

// 	if (isLoggedIn && isDeposit) {
// 		yield put(modalProfileActions.uiSet({
//       visible    : true,
//       currentTab : PROFILE_MODAL_TABS.deposit,
// 		}));
// 	}

// 	if (!isLoggedIn && isRegister) {
// 		yield put(modalRegisterActions.uiSet({
// 			visible: true,
// 		}));
// 	}

// 	if (!isLoggedIn && isLogin) {
// 		yield put(modalLoginActions.uiSet({
// 			visible: true,
// 		}));
// 	}

// 	if (isLogin || isRegister || isDeposit) {
// 		const rootURL = makeLocalURLwithLocale('/', langID);
// 		yield put(push(rootURL));
// 	}

// 	if (isResetPassword) {
// 		yield put(modalResetPasswordActions.uiSet({ visible: true}));
// 	}
// }

// export function* performUserLogin(isRefreshToken = false) {

// 	if (isRefreshToken) {
// 		const success = yield call(refreshUserData);
// 		if (success) {
// 			return;
// 		};
// 	};

// 	/**
// 	 * In fist time we probably came here from main site.
// 	 * In this case URL contains query param: ?hash=someBase64hashString
// 	 * Hashed data looks like this:
// 	 * {
// 	 *    authToken : 'yTgffskkopwi7763ghfdhhks',
// 	 *    userID    : 1,
// 	 *    websiteID : 1,
// 	 * }
// 	 */
// 	const userData = yield call(getUserDataFromCasinoHash);

// 	let isDataCorrect = false;
// 	if (Boolean(userData)) {
// 		const authToken = userData.authToken;
// 		const userID    = toInteger(userData.userID);
// 		const websiteID = toInteger(userData.websiteID);
// 		if (authToken && userID > 0 && websiteID > 0) {
// 			isDataCorrect = true;
// 		}
// 	}

// 	/**
// 	 * If userData is empty it means we came here after redirect or directly.
// 	 * Check local storage or session storage: look for stored token
// 	 */
// 	if (!userData) {
// 		let authToken = yield call(localRestoreData, 'authToken');
// 		let userID    = yield call(localRestoreData, 'userID');
// 		let websiteID = yield call(localRestoreData, 'websiteID');

// 		if (!authToken) {
// 			authToken = yield call(sessionRestoreData, 'authToken');
// 		}
// 		if (!userID) {
// 			userID = yield call(sessionRestoreData, 'userID');
// 		}

// 		if (websiteID) {
// 			yield put(actions.websiteIDSet(websiteID));
// 		}

// 		if (authToken && userID) {
// 			const userInfo = yield call(getUserData, userID);
// 			if (!userInfo) {
// 				yield call(clearLocalStorage);
// 				yield call(clearSessionStorage);
// 				yield put(actions.userGuestSet());
// 				return;
// 			}

// 			yield put(actions.authTokenSet(authToken));
// 			yield put(actions.userInfoSet(userInfo));

// 		};

// 		/**
// 		 * If we recieved userData from hash we need to store it and
// 		 * to perform redirect to Casino Start Page for clear URL
// 		 */
// 	} else {
// 		if (isDataCorrect) {
// 			yield call(localStoreData, 'authToken', userData.authToken);
// 			yield call(localStoreData, 'userID', userData.userID);
// 			yield call(localStoreData, 'websiteID', userData.websiteID);

// 			const userInfo = yield call(getUserData, userData.userID);
// 			if (!userInfo) {
// 				yield put(actions.userGuestSet());
// 			};

// 			yield put(actions.authTokenSet(userData.authToken));
// 			yield put(actions.userInfoSet(userInfo));
// 			yield put(actions.websiteIDSet(userData.websiteID));

// 		} else {
// 			yield call(clearLocalStorage);
// 			yield put(actions.userGuestSet());
// 		}
// 	}
	
// 	// if URL contains '/login', '/register' or '/deposit' - as result of returning from third-party systems
// 	yield call(redirectViaUrl);
// }

// export function* performApiDataReload() {

// 	const { casinoID, websiteID } = yield select(getStoreData);
// 	try {
// 		const res = yield call(settingsAPI.apiDataLoad, casinoID, websiteID);

// 		if (res) {
// 			const apiData = adaptApiData(res);
// 			const websiteCasinoID = toInteger(res[0].id);

// 			yield put(actions.apiDataSet(apiData));
// 			yield put(actions.websiteCasinoIDSet(websiteCasinoID));
// 		}
// 	} catch (error) {
// 		showWarning('api', 'Unable load API settings from server. It will be set by default');

// 		yield put(actions.apiDataSet({ ...defaultApiData }));
// 		yield put(actions.websiteCasinoIDSet(null));
// 	}
// }

// export function* getUserData(userID) {
// 	try {
// 		const res = yield call(authAPI.userInfo, userID);
// 		const userInfo = yield call(adaptUser, res);

// 		return userInfo;
// 	} catch (err) {
// 		console.log(err);
// 	}

// 	return null;
// }

// export function* refreshUserData() {

// 	try {
// 		const res       = yield call(authAPI.authRefresh);
// 		const authToken = res.access_token;
// 		const userInfo  = yield call(adaptUser, res.user);

// 		yield call(localStoreData, 'authToken', authToken);
// 		yield call(localStoreData, 'userID', userInfo.userID);

// 		yield put(actions.authTokenSet(authToken));
// 		yield put(actions.userInfoSet(userInfo));

// 		return true;

// 	} catch (err) {
// 		console.log(err);
// 	}

// 	return false;
// }

// export function* clearLocalStorage() {
// 	yield call(localClearData, 'authToken');
// 	yield call(localClearData, 'userID');
// }

// export function* clearSessionStorage() {
// 	yield call(sessionClearData, 'authToken');
// 	yield call(sessionClearData, 'userID');
// }

// export function* performGameCategoriesLoad() {

// 	let gameCategoriesList = [];
// 	try {
// 		gameCategoriesList = yield call(makeRequestGameCategoriesList);
		
// 	} catch (error) {
// 		console.log(error);
// 		showError('gamesCategories', 'Loading Game Categories list failed', error);
// 	}

// 	yield put(commonActions.gameCategoriesListSet(gameCategoriesList));
// 	yield put(gridsActions.uiSet({ categoryID: gameCategoriesList[0].id }));
// }

// export function* performLoadingWebsiteScript() {

// 	let scripts = null;
// 	try {
// 		scripts = sortBy( yield call(contentAPI.websiteScriptsLoad, websiteID), ['position_id']);

// 	} catch (error) {
// 		// Nothing
// 	};

// 	if (scripts) {

// 		const liveChatMarker = 'window.__lc';
// 		let scriptText = '';
// 		try {
// 			scripts.forEach(scriptItem => {

// 				scriptText = scriptItem.script;
// 				if (scriptText.includes(liveChatMarker)) {
// 					return;
// 				}

// 				const parent = (scriptItem.position_id === SCRIPT_POSITION.head) ? document.head : document.body;
// 				parent.onerror = (error) => {
// 					console.log('An error occured in custom script:');
// 					console.log(JSON.stringify(scriptText));
// 					console.log(error);
// 				}

// 				const range = document.createRange();
// 				range.setStart(parent, 0);
// 				try {
// 					const fragment = range.createContextualFragment(scriptText);
// 					parent.appendChild(fragment);
// 				} catch (err) {
// 					console.log('An error occured in custom script:');
// 					console.log(JSON.stringify(scriptText));
// 					console.log(err);
// 				}
// 			});

// 		} catch (error) {
// 			console.log('A critical error occured in custom script:');
// 			console.log(JSON.stringify(scriptText));
// 			console.log(error);
// 		};
// 	};
// }

// export function getStoreData({ App, Games, Common, router }) {

// 	const pathname = Boolean(router.location)
// 		? router.location.pathname
// 		: window.location.href;

// 	return {
// 		blockedProfileFields : App.get('blockedProfileFields'),
// 		casinoID             : App.get('casinoID'),
// 		websiteID            : App.get('websiteID'),
// 		registerData         : App.get('registerData'),
// 		authToken            : App.get('authToken'),
// 		userInfo             : App.get('userInfo'),
// 		apiData              : App.get('apiData'),
// 		websiteCasinoID      : App.get('websiteCasinoID'),
// 		userID               : App.get('userInfo').userID,
// 		langID               : App.get('langID'),
// 		gameCategories       : Common.get('gameCategories'),
// 		pathname,
// 	};
// }
