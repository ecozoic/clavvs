// build images
require('./img');

// build .txt and .icos
require('./robots.txt');
require('./humans.txt');
require('./favicon.ico');

// build scss
require('./css/index.scss');

// start app
import { App } from './js/app';

const app = new App();
app.init();
