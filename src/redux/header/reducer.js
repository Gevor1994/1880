import React from 'react';
import { Map } from 'immutable';
import IntlMessage from '../../components/utils/intlMessage';
import actions from './actions';

const langPrefix = 'topbar';

const lang = {
	home     : <IntlMessage id = {`${langPrefix}.home`} />,
	menu     : <IntlMessage id = {`${langPrefix}.menu`} />,
	about    : <IntlMessage id = {`${langPrefix}.about`} />,
  contact  : <IntlMessage id = {`${langPrefix}.contact`} />,
  book     : <IntlMessage id = {`${langPrefix}.book`} />,

};

const initState = new Map({
  items: [
    {
      id: 1,
      name: lang.home,
      url: '/',
      active: true,
    },
    {
      id: 2,
      name: lang.menu,
      url: '/menu',
      active: false,
    },
    {
      id: 4,
      name: lang.about,
      url: '/about',
      active: false,
    },
    {
      id: 5,
      name: lang.contact,
      url: '/contact',
      active: false,
    },
    {
      id: 6,
      name: lang.book,
      url: '/book',
      active: false,
    },
  ],
});

export default function headerReducer(state = initState, action) {

  switch (action.type) {

    case actions.HEADER_DATA_SET: {
      const { items } = action.payload;
      return state.set('items', items);
    }
    
    default:
      return state;
  }
}
