import React from 'react';
import { render } from 'react-dom';

import App from './app';
import baseStyles from './styles';

baseStyles();

render(
  <App />,
  document.getElementById('app'),
);
