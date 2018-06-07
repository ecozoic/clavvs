import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './Home';

const LoadableAdmin = Loadable({
  loader: () => import('./Admin'),
  loading: () => <div>Loading...</div>,
});

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/admin" component={LoadableAdmin} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default routes;
