import { apiRequest } from './index';
import { CASINO_PROTOCOL, host } from '../../config';
import { PROTOCOLS } from '../../constants/common';
import { METHOD_GROUP_NAMES, METHOD_NAMES } from '../../constants/casino';

// Casino API -------------------------------------------------------------------------------------

function gamesListCasinoAPI(apiData) {

	const data = {
		type: {
			method: METHOD_GROUP_NAMES.game,
			action: METHOD_NAMES.getList,
		},
		data: { ...apiData },
	};

	const req = {
		method: 'POST',
		url: `/casino/restApi`,
		data,
	};

	return apiRequest(req);
}

function gamesURLCasinoAPI(gameID, userID, token) {

  const useHTTPS = CASINO_PROTOCOL === PROTOCOLS.https ? 1 : 0;
	const exitURL  = `${CASINO_PROTOCOL}://${host}`;

	const data = {
		type: {
			method: METHOD_GROUP_NAMES.game,
			action: METHOD_NAMES.getURL,
		},
		token: Boolean(token) ? token : 'demo',
		casino_game_id: gameID,
		settings: {
			https: useHTTPS,
			user_id: userID,
			exit_url: exitURL,
		},
	};

	const req = {
		method: 'POST',
		url: `/casino/restApi`,
		data,
	};

	return apiRequest(req);
}

// Our Server API ---------------------------------------------------------------------------------

function gamesList(params = {}) {

	const req = {
		method: 'GET',
		url: `/casinoGame/list`,
		params,
	};

	return apiRequest(req);
}

// Winners ----------------------------------------------------------------------------------------

function latestWinnersList(params = {}) {

	const req = {
		method: 'GET',
		url: '/casino/maxWinners',
		params,
	};

	return apiRequest(req);
}

// Casino Game Categories -------------------------------------------------------------------------

function gameCategoryList(params = {}) {

	const req = {
		method: 'GET',
		url: '/casinoCategories',
		params,
	};

	return apiRequest(req);
}

// Games Grids ------------------------------------------------------------------------------------

function gamesDefaultGridList(params = {}) {

	const req = {
		method: 'GET',
		url: `/casinoGame/orders`,
		params,
		withoutLangID: true,
	};

	return apiRequest(req);
}

// Providers --------------------------------------------------------------------------------------

function providersList(params = {}) {

	const req = {
		method: 'GET',
		url: '/casino/providers',
		params,
	};

	return apiRequest(req);
}

const casinoAPI = {
	gamesListCasinoAPI,
	gamesURLCasinoAPI,

	gamesList,

	latestWinnersList,
	gameCategoryList,

	gamesDefaultGridList,

	providersList,
};

export default casinoAPI;
