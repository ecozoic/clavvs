import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';
import firebase from 'firebase/app';
import 'firebase/firestore';

import App from './app';
import Store from './app/store';
import baseStyles from './styles';
import { mapQuerySnapshotToArray, mapDocToObject } from './app/util';

// load polyfills
// TODO

// load global css
baseStyles();

// init mobx
configure({ computedRequiresReaction: true, enforceActions: true });

const store = new Store();

// init firebase
// TODO: sections/widgets
// TODO: couple w/ react component refactor to optimize re-renders
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

db.collection('footer-links')
  .where('enabled', '==', true)
  .orderBy('sortIndex')
  .onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        store.footer.addLink(mapDocToObject(change.doc));
      } else if (change.type === 'modified') {
        store.footer.updateLink(change.doc.id, mapDocToObject(change.doc));
      } else if (change.type === 'removed') {
        store.footer.removeLink(change.doc.id);
      }
    });
  });

db.collection('socials')
  .where('enabled', '==', true)
  .orderBy('sortIndex')
  .onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        store.social.addLink(mapDocToObject(change.doc));
      } else if (change.type === 'modified') {
        store.social.updateLink(change.doc.id, mapDocToObject(change.doc));
      } else if (change.typed === 'removed') {
        store.social.removeLink(change.doc.id);
      }
    });
  });

db.collection('hero-links')
  .where('enabled', '==', true)
  .orderBy('sortIndex')
  .onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        store.hero.addLink(mapDocToObject(change.doc));
      } else if (change.type === 'modified') {
        store.hero.updateLink(change.doc.id, mapDocToObject(change.doc));
      } else if (change.typed === 'removed') {
        store.hero.removeLink(change.doc.id);
      }
    });
  });

// TODO: handle contents subcollection
db.collection('sections')
  .where('enabled', '==', true)
  .orderBy('sortIndex')
  .onSnapshot((querySnapshot) => {
    store.section.replaceSections(mapQuerySnapshotToArray(querySnapshot));
  });

render(
  <App store={store} />,
  document.getElementById('app'),
);
