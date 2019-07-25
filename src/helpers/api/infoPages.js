import { apiRequest } from './index';

function infoPageInfo(pageURL, params = {}) {

  const req = {
    method: 'GET',
    url: '/content/informationPage',
    params: {
      ...params,
      url: pageURL,
    },
  };

  return apiRequest(req);
};

const infoPagesAPI = {
  infoPageInfo,
};

export default infoPagesAPI;
