import React from 'react';
import IntlMessage from '../../components/utils/intlMessage';

const langPrefix = 'topbar';

export const lang = {
	search         : <IntlMessage id ="common.search" />,
	services       : <IntlMessage id = {`${langPrefix}.services`} />,
	help           : <IntlMessage id = {`${langPrefix}.help`} />,
	register       : <IntlMessage id = {`${langPrefix}.register`} />,
	login          : <IntlMessage id = {`${langPrefix}.login`} />,
	logout         : <IntlMessage id = {`${langPrefix}.logout`} />,
	profile        : <IntlMessage id = {`${langPrefix}.profile`} />,

	myAccount      : <IntlMessage id = {`${langPrefix}.myAccount`} />,
	myCart         : <IntlMessage id = {`${langPrefix}.myCart`} />,
	changePassword : <IntlMessage id = {`${langPrefix}.changePassword`} />,
  	verification   : <IntlMessage id = {`${langPrefix}.verification`} />,
	logOut         : <IntlMessage id = {`${langPrefix}.logOut`} />,
};
