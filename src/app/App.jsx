import React, { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import theme from '../styles/theme';
import routes from './routes';

const WrappedDevTools = () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    return createElement(require('mobx-react-devtools').default);
  }

  return null;
};

const App = ({ store }) => (
  <Fragment>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    <WrappedDevTools />
  </Fragment>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default hot(module)(App);
