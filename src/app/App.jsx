import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(App);
