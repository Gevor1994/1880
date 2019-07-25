import { apiRequest } from './index';

function bannersList(params = {}) {

  const req = {
    method: 'GET',
    url: '/content/banner',
    params,
  };

  return apiRequest(req);
};

const bannersAPI = {
  bannersList,
};

export default bannersAPI;
