var path = require('path');

var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var serveStatic = require('serve-static');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var multer = require('multer');

var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var connectEnsureLogin = require('connect-ensure-login');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var rp = require('request-promise');

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
app.locals = {
  env: process.env.NODE_ENV
};

app.use(compression());

if (process.env.NODE_ENV !== 'development') {
  app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
}

app.use(logger('dev'));

if (process.env.NODE_ENV === 'development') {
  var webpackConfig = require('../../webpack.dev.config.js');
  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(serveStatic(path.resolve(__dirname, '../../public')));
}

// add method overrides, sessions, body parsers, multers here...

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

app.get('/api/instagram/user', function(req, res) {
  var options = {
    uri: 'https://api.instagram.com/v1/users/self/',
    qs: {
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    },
    json: true
  };

  rp(options)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

app.get('/api/instagram/recent', function(req, res) {
  var options = {
    uri: 'https://api.instagram.com/v1/users/self/media/recent/',
    qs: {
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    },
    json: true
  };

  rp(options)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
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
  app.use(function(err, req, res) {
    res.status(500).render('500', template);
  });
}

app.listen(process.env.PORT || 9000, function() {
  /* eslint-disable no-console */
  console.log('Server listening on port: ' + process.env.PORT);
});
