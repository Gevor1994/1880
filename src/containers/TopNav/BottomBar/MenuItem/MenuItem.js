import React from 'react';
import { connect } from 'react-redux';
import { makeLocalURLwithLocale } from '../../../../helpers/locationUtils';
import { LinkWrap, CNavLink} from './MenuItem.style';

const MenuItem = ({ name, url, active, size,  onClick, langID }) => {
  const linkURL = makeLocalURLwithLocale(url, langID); 

  const linkContent = (
    <CNavLink
      to={linkURL}
      activeClassName="activeLink"
      size={size}
      isActive={() => active}
      onClick={onClick}
    >
      {name}
    </CNavLink>
  );

  return (
    <LinkWrap size={size}>
      {linkContent}
    </LinkWrap>
  );
};

export default connect(
  ({ App }) => ({
    langID: App.get('langID'),
  })
)(MenuItem);
