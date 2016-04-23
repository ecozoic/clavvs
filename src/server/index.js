var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var serveStatic = require('serve-static');
var errorHandler = require('errorhandler');

var app = express();

// configure views & view engine here...

app.use(compression());
app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
app.use(logger('dev'));

// add method overrides, sessions, body parsers, multers here...

app.use(serveStatic(path.resolve(__dirname, '../../public')));

// add routes here

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

app.use(function(req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname, '../../public/404.html'));
});

app.listen(process.env.PORT || 9000, function() {
  console.log('Server listening on port: ' + process.env.PORT);
});
