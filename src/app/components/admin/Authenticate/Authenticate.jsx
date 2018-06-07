import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import firebase from 'firebase/app';

import Admin from '../Admin';
import Login from '../Login';

@inject('adminStore')
@observer
class Authenticate extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    adminStore: PropTypes.object.isRequired,
  };


  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.adminStore.auth.setUser(user);
      } else {
        this.props.adminStore.auth.logout();
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  unsubscribe = null;

  render() {
    const user = this.props.adminStore.auth.getUser();

    return (
      <Fragment>
        {user !== null && <Admin />}
        {user === null && <Login />}
      </Fragment>
    );
  }
}

export default Authenticate;
