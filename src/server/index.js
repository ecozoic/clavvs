var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var serveStatic = require('serve-static');
var errorHandler = require('errorhandler');

var app = express();

// configure views & view engine here...
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, './views'));

app.use(compression());
app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
app.use(logger('dev'));

// add method overrides, sessions, body parsers, multers here...

app.use(serveStatic(path.resolve(__dirname, '../../public')));

// add routes here
app.get('/', function(req, res) {
  var data = require('./data/template.js');
  res.render('index', data);
});

app.use(function(req, res) {
  res.status(404).render('404');
});

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

app.listen(process.env.PORT || 9000, function() {
  console.log('Server listening on port: ' + process.env.PORT);
});
