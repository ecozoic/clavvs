var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var serveStatic = require('serve-static');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var connectEnsureLogin = require('connect-ensure-login');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');

var template = require('./data/template');

var app = express();

// configure oauth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, function(accessToken, refreshToken, profile, cb) {
    var admins = process.env.ADMINS.split(',');
    var isAdmin = false;

    profile.emails.forEach(function(email) {
      if (admins.indexOf(email.value) > -1) {
        isAdmin = true;
      }
    });

    if (isAdmin) {
      cb(null, profile);
    } else {
      // TODO: handle this error
      cb(new Error('Unauthorized User'));
    }
  })
);

// configure session
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// configure views & view engine here...
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, './views'));

app.use(compression());

if (process.env.NODE_ENV !== 'development') {
  app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
}

app.use(logger('dev'));

if (process.env.NODE_ENV === 'development') {
  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    stats: { colors: true },
    headers: { 'X-Served-By': 'webpack' }
  }));
}

// app.use(serveStatic(path.resolve(__dirname, '../../public')));

// add method overrides, sessions, body parsers, multers here...

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// add routes here
app.get('/', function(req, res) {
  res.render('index', template);
});

app.get('/login', function(req, res) {
  res.render('login', template);
});

app.post('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/admin', failureRedirect: '/login' }));

app.get('/admin', connectEnsureLogin.ensureLoggedIn(), function(req, res) {
  res.render('admin', template);
});

app.use(function(req, res) {
  res.status(404).render('404', template);
});

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use(function(err, req, res, next) {
    res.status(500).render('500', template);
  });
}

app.listen(process.env.PORT || 9000, function() {
  console.log('Server listening on port: ' + process.env.PORT);
});
