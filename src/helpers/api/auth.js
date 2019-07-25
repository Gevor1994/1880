import { apiRequest } from './index';

function userInfo(userID, params = {}) {
	const req = {
		method: 'GET',
		url: '/profile',
		data: {
			id: userID,
		},
		params,
	};

	return apiRequest(req);
}

function userLogin(data, params = {}) {
	const req = {
		method: 'POST',
		url: '/login',
		data,
		params,
	};

	return apiRequest(req);
}

function userUpdate(userID, data, params = {}) {
	const req = {
		method: 'POST',
		url: '/profile',
		data: {
			...data,
			id: userID,
		},
		params,
	};

	return apiRequest(req);
}

function userRegister(regData) {
  const req = {
    method: 'POST',
    url: '/users',
    data: { ...regData },
  };

  return apiRequest(req);
}

function userForgotPassword(data, params = {}) {

	const req = {
		method: 'POST',
		url: '/forgetPassword',
		data,
		params,
	};

	return apiRequest(req);
} 

function userResetPassword(data, params = {}) {

	const req = {
		method: 'POST',
		url: '/forgetPassword/reset',
		data,
		params,
	};

	return apiRequest(req);
} 

function userConfirmEmail(data, params = {}) {

	const req = {
		method: 'POST',
		url: '/verify/email',
		data,
		params,
	};

	return apiRequest(req);
}

function userChangePassword(oldPassword, newPassword, params = {}) {
	const req = {
		method: 'POST',
		url: '/profile/changePassword',
		data: {
			old_password: oldPassword,
			new_password: newPassword
		},
		params
	};

	return apiRequest(req);
}

function authRefresh(data = {}, params = {}) {

	const req = {
		method: 'GET',
		url: '/auth/refresh',
		withCredentials: true,
		data,
		params,
	};

	return apiRequest(req);
}

function userBlockedProfileFields() {
	const req = {
		method: 'GET',
		url: '/getBlockedFields',
	};

	return apiRequest(req);
}

const authAPI = {
  userInfo,
	userLogin,
	userUpdate,
	userRegister,
	userForgotPassword,
	userResetPassword,
	userConfirmEmail,
	userChangePassword,
  userBlockedProfileFields,
	authRefresh,
};

export default authAPI;
