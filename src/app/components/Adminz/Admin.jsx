import React from 'react';
import firebase from 'firebase/app';

const Admin = () => (
  <button type="button" onClick={() => firebase.auth().signOut()}>
    Sign Out
  </button>
);

export default Admin;
