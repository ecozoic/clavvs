import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';

import App from './app';
import Store from './app/store';
import baseStyles from './styles';

// load polyfills (if necessary)
// TODO

// load global css
baseStyles();

// init mobx
configure({
  computedRequiresReaction: true,
  enforceActions: 'strict',
});

const store = new Store();

// init firebase
// TODO

render(
  <App store={store} />,
  document.getElementById('app'),
);
