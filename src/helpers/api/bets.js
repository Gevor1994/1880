import { apiRequest } from './index';

function betslipsList(params = {}) {

	const req = {
		method: 'GET',
		url: '/betslips',
		withoutLangID: true,
		params,
	};

	return apiRequest(req);
}

const betsAPI = {
  betslipsList,
};

export default betsAPI;
