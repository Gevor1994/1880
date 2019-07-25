import { apiRequest } from './index';

function menuDataLoad(menuID, params = {}) {

	const req = {
		method: 'GET',
		url: `/content/menu/${menuID}`,
		params,
	};

	return apiRequest(req);
}

function websiteScriptsLoad(websiteID, params = {}) {

  const req = {
		method: 'GET',
    url: `/scripts`,
    withoutLangID: true,
		params,
	};

	return apiRequest(req);
}

const contentAPI = {
  menuDataLoad,
  websiteScriptsLoad,
};

export default contentAPI;
