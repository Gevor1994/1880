import { apiRequest, extRequest } from './index';

export function performPayment(paymentId, amount) {

	const req = { 
    method: 'POST', 
    url: `/payments/${paymentId}/deposit`,
    data: { amount } 
  };

	return apiRequest(req);
}

export function sendPaymentRequest({ amount, currency_code, merchant_id, transaction_id }) {

	let formData = new FormData();
	formData.set('ik_co_id', merchant_id);
	formData.set('ik_pm_no', transaction_id);
	formData.set('ik_am', amount);
	formData.set('ik_cur', currency_code.toLowerCase());
	formData.set('ik_desc', 'Payment Description');
  formData.set('ik_int', 'json');
  
	const req = { 
    method: 'POST', 
    url: 'https://sci.interkassa.com', 
    data: formData 
  };

	return extRequest(req);
}

export function payInterkassaViaHtml({ amount, currency_code, merchant_id, transaction_id }) {

	const form = document.forms.interkassaPaymentForm;
	form['ik_co_id'].value = merchant_id;
	form['ik_pm_no'].value = transaction_id;
	form['ik_am'].value = amount;
	form['ik_cur'].value = currency_code.toLowerCase();
  form['ik_desc'].value = 'Payment Description';
  
	form.submit();
}

export function loadDepositPayways() {

	const req = {
		method: 'GET',
		url: '/profile/deposit/payways',
	};

	return apiRequest(req);
}

export function loadWithdrawalPayways() {

	const req = {
		method: 'GET',
		url: '/profile/withdraw/payways',
	};

	return apiRequest(req);
}

export function loadMethods(id) {

	const req = {
		method: 'GET',
		url: `/payments/${id}/payways`,
	};

	return apiRequest(req);
}

export function sendWithdrawRequest(paymentID, data) {
  
	const req = {
		method: 'POST',
		url: `/payments/${paymentID}/withdraw`,
		data: data,
	};

	return apiRequest(req);
}

export function getWithdrawalCards(paymentID) {

	const req = {
		method: 'GET',
		url: `/profile/payment/${paymentID}/cards`,
	};

	return apiRequest(req);
}

export function  redirectToPaymentWebsite(res){
	const  url = res
		.replace('replace_success_url', `${window.location.origin}/payment-success`)
		.replace('replace_decline_url', `${window.location.origin}/payment-fail`);

	const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	const target = iOS ? '_system' : '_blank';

	window.open(url, target);
}

export default {
	performPayment,
	loadDepositPayways,
	loadWithdrawalPayways,
	sendPaymentRequest,
	payInterkassaViaHtml,
	loadMethods,
	sendWithdrawRequest,
	getWithdrawalCards,
	redirectToPaymentWebsite
};
