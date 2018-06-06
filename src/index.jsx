import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
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
// TODO: do the timestamps stuff
// TODO: queries (sort and filter by enabled)
// TOOD: realtime
// TODO: sync w/ mobx store
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

const db = firebase.firestore();
db.collection('socials').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});
db.collection('hero-links').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});
db.collection('footer-links').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});
db.collection('sections').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});

render(
  <App store={store} />,
  document.getElementById('app'),
);
