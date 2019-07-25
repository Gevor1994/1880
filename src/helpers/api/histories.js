import { apiRequest } from './index';

function gamesList(params = {}) {

  const req = {
    method: 'GET',
    url: '/profile/history/casino',
    params,
  };

  return apiRequest(req, true);
}

function depositsList(params = {}) {

  const req = {
    method: 'GET',
    url: '/profile/deposits',
    params
  };

  return apiRequest(req, true);
};

function withdrawalsList(params = {}) {

  const req = {
    method: 'GET',
    url: '/profile/withdrawals',
    params
  };

  return apiRequest(req, true);
};

function bonusesList(params = {}) {

  const req = {
    method: 'GET',
    url: '/profile/casino/bonus/wallets',
    params
  };

  return apiRequest(req, true);
};

function freeSpinsList(params = {}) {

  const req = {
    method: 'GET',
    url: '/profile/casino/bonus/spins',
    params
  };

  return apiRequest(req, true);
};

function bonusBalance() {

  const req = {
    method: 'GET',
    url: '/profile/casino/bonus/balance',
  };

  return apiRequest(req, true);
};

const historiesAPI = {
  depositsList,
  withdrawalsList,
  gamesList,
  bonusesList,
  freeSpinsList,
  bonusBalance,
};

export default historiesAPI;