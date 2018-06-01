import React from 'react';
import { render } from 'react-dom';
// import { configure } from 'mobx';

import App from './app';
import Store from './app/store';
import baseStyles from './styles';

// load polyfills (if necessary)
// TODO

// load global css
baseStyles();

// init mobx
// configure({ computedRequiresReaction: true, enforceActions: true });

const store = new Store();

// TODO: debug code plz remove
window.store = store;

// init firebase
// TODO

render(
  <App store={store} />,
  document.getElementById('app'),
);
