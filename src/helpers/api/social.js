import { apiRequest } from './index';

const urls = {
  facebook: '/auth/facebook',
  linkedin: '/auth/linkedin',
  google: '/auth/google',
  vkontakte: '/auth/vkontakte',
  odnoklassniki: '/auth/odnoklassniki',
};

function loginFacebook(params = {}) {

  const req = {
    method: 'GET',
    url: urls.facebook,
    params,
  };

  return apiRequest(req);
};

function loginLinkedin(params = {}) {

  const req = {
    method: 'GET',
    url: urls.linkedin,
    params,
  };

  return apiRequest(req);
};

function loginGoogle(params = {}) {

  const req = {
    method: 'GET',
    url: urls.google,
    params,
  };

  return apiRequest(req);
};

function loginVkontakte(params = {}) {

  const req = {
    method: 'GET',
    url: urls.vkontakte,
    params,
  };

  return apiRequest(req);
};

function loginOdnoklassniki(params = {}) {

  const req = {
    method: 'GET',
    url: urls.odnoklassniki,
    params,
  };

  return apiRequest(req);
};

const socialAPI = {
  urls,
  loginFacebook,
  loginLinkedin,
  loginGoogle,
  loginVkontakte,
  loginOdnoklassniki
};

export default socialAPI;
