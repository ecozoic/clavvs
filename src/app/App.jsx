import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import theme from '../styles/theme';
import routes from './routes';

const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>{routes}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default hot(module)(App);
