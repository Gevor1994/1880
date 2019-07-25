import React, { Component } from 'react';
import { connect } from 'react-redux';

const withThemeComponent = (WrappedComponent) => {

  class ThemedComponent extends Component {

    render() {
      const { theme, children, dispatch, ...restProps } = this.props;

      return (
        <WrappedComponent {...restProps} theme={theme}>
          {children}
        </WrappedComponent>
      )
    }
  };

  return connect(
    ({ App }) => ({
      theme: App.get('theme'),
    })
  )(ThemedComponent);
}

export default withThemeComponent;
