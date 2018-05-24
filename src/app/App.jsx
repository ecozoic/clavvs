import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

import theme from '../styles/theme';
import Home from './components/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(module)(App);
