import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import theme from '../styles/theme';
import Home from './components/Home';

// TODO: only serve devtools in dev

const App = ({ store }) => (
  <Fragment>
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
    {process.env.NODE_ENV === 'development' && <DevTools />}
  </Fragment>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default hot(module)(App);
