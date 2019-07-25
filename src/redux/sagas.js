import { all } from 'redux-saga/effects';
import appSagas from './app/saga';
// import headerSagas from './header/saga';
// import historiesSagas from './histories/saga';
// import footerSagas from './footer/saga';
// import gamesSagas from './games/saga';
// import sessionsSagas from './sessions/saga';
// import paymentSagas from './payment/saga';
// import betHistorySagas from './betHistory/saga';
// import bannersSagas from './banners/saga';
// import resetPasswordSagas from './modals/resetPassword/saga';
// import emailConfirmSagas from './emailConfirm/saga';
// import latestWinnersSagas from './latestWinners/saga';
// import commonSagas from './common/saga';
// import socketSagas from './socket/saga';
// import infoPagesSagas from './infoPages/saga';
// import documentsSagas from './documents/saga';
// import socialSagas from './social/saga';
// import currencySagas from './currency/saga';

// import externalSocketSagas from '../sockets/sagas';

export default function* rootSaga(getState) {
	yield all([
		appSagas(),
		// headerSagas(),
		// historiesSagas(),
		// footerSagas(),
		// gamesSagas(),
		// sessionsSagas(),
		// currencySagas(),
		// paymentSagas(),
		// betHistorySagas(),
		// bannersSagas(),
		// resetPasswordSagas(),
		// emailConfirmSagas(),
		// latestWinnersSagas(),
		// commonSagas(),
		// socketSagas(),
		// infoPagesSagas(),
		// documentsSagas(),
		// socialSagas(),

		// externalSocketSagas(),
	]);
}
