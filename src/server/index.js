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

var app = express();

// configure oauth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, function(accessToken, refreshToken, profile, cb) {
    // TODO: validate user is valid admin user
    return cb(null, profile);
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
app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
app.use(logger('dev'));

// add method overrides, sessions, body parsers, multers here...
app.use(serveStatic(path.resolve(__dirname, '../../public')));

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
  var data = require('./data/template');
  res.render('index', data);
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  // successful authentication
  res.redirect('/admin');
});

app.get('/admin', connectEnsureLogin.ensureLoggedIn('/login'), function(req, res) {
  res.render('admin');
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
