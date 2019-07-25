import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Select } from 'antd';

import langConfig from '../../languageProvider/config';
import appActions from '../../redux/app/actions';
// import commonActions from '../../redux/common/actions';
import { storeData } from '../../helpers/localStorageUtils';
import { makeLocalURLwithLocale, redirectLocal } from '../../helpers/locationUtils';

import { Wrapper, OptionText, dropdownMenuClass, OptionContainer, Label } from './LanguageSwitcher.style';
import { lang } from './lang';

const SelectOption = Select.Option;
const langList = langConfig.options;

/**
 * The flag defining switcher behavior:
 * either redirect with full page reload or soft push new url in history
 * It is needed because of LiveChat: its mounting/unmounting doesn't work correct
 * while we are going through pages and then change the language
 */
const useRedirect = false; // false

class LanguageSwither extends Component {

  static propTypes = {
    isMobile: PropTypes.bool,
  }

  static defaultProps = {
    isMobile: false,
  }

  onChangeLanguage = value => {
    const { userChangeLanguage, isLoggedIn, changeLanguage, push } = this.props;
    if (isLoggedIn) {
      userChangeLanguage(value);
    }
    storeData('langID', value);
    changeLanguage(value);

    const newCurrentURL = makeLocalURLwithLocale(window.location.pathname, value);

    if (useRedirect) {
      redirectLocal(newCurrentURL);
    } else {
      push(newCurrentURL);
    }
  };

  renderOptions = () => {
    const options = langList.map((item) => {
      const optionText = item.code.toLocaleUpperCase();

      return (
        <SelectOption className="option" value={item.langID} key={item.langID}>
          <OptionContainer>
            <OptionText>{optionText}</OptionText>
          </OptionContainer>
        </SelectOption>
      );
    });

    return options;
  };


  render() {
    const { langID, isMobile } = this.props;

    const options = this.renderOptions();
    const switcher = isMobile ? (langList.map(option => {
      return <div className="option" id={option.langID} key={option.langID} onClick={event => this.onChangeLanguage(Number(event.target.id))}>{option.code}</div>
    })) : (
        <Select
          id="languageDropMenu"
          value={langID}
          dropdownClassName={dropdownMenuClass}
          getPopupContainer={() => document.getElementById('langSwitcherContainer')}
          onChange={this.onChangeLanguage}
        >
          {options}
        </Select>
      );

    return (
      <Wrapper id="langSwitcherContainer">
        {/* <div className="control"> */}
        {switcher}
        {/* </div> */}
      </Wrapper>
    );
  }
}

export default connect(
  ({ App }) => ({
    isLoggedIn: !!App.get('authToken'),
    langID: App.get('langID'),
  }), {
    changeLanguage: appActions.changeLanguage,
    userChangeLanguage: appActions.userChangeLanguage,
    userInfoMerge: appActions.userInfoMerge,
    push,
  }
)(LanguageSwither);
