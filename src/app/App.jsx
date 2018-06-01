import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import theme from '../styles/theme';
import Home from './components/Home';

const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    timer: PropTypes.number.isRequired,
  }).isRequired,
};

export default hot(module)(App);
