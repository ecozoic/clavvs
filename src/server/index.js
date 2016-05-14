'use strict';

const path = require('path');

const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const logger = require('morgan');
const serveStatic = require('serve-static');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const multer = require('multer');

const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const connectEnsureLogin = require('connect-ensure-login');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('../../webpack.dev.config.js');

const rp = require('request-promise');

const template = require('./data/template');
const isDev = process.env.NODE_ENV === 'development';

const app = express();

// configure oauth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, (accessToken, refreshToken, profile, cb) => {
    const admins = process.env.ADMINS.split(',');
    let isAdmin = false;

    profile.emails.forEach((email) => {
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
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// configure views & view engine here...
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, './views'));
app.locals = {
  env: process.env.NODE_ENV
};

app.use(compression());

if (!isDev) {
  app.use(favicon(path.resolve(__dirname, '../../public/favicon.ico')));
}

app.use(logger('dev'));

if (isDev) {
  const compiler = webpack(webpackDevConfig);

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
app.get('/', (req, res) => {
  res.render('index', template);
});

app.get('/login', (req, res) => {
  res.render('login', template);
});

app.get('/api/instagram/user', (req, res) => {
  const options = {
    uri: 'https://api.instagram.com/v1/users/self/',
    qs: {
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    },
    json: true
  };

  rp(options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get('/api/instagram/recent', (req, res) => {
  const options = {
    uri: 'https://api.instagram.com/v1/users/self/media/recent/',
    qs: {
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    },
    json: true
  };

  rp(options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/admin', failureRedirect: '/login' }));

app.get('/admin', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('admin', template);
});

app.use((req, res) => {
  res.status(404).render('404', template);
});

if (isDev) {
  app.use(errorHandler());
} else {
  app.use((err, req, res) => {
    res.status(500).render('500', template);
  });
}

app.listen(process.env.PORT || 9000, () => {
  /* eslint-disable no-console */
  console.log('Server listening on port: ' + process.env.PORT);
});
