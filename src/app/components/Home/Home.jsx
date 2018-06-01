import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

@inject('store')
@observer
class Timer extends Component {
  static propTypes = {
    // eslint-disable-next-line
    store: PropTypes.object.isRequired,
  };

  render() {
    return <div>{this.props.store.timer}</div>;
  }
}

const Home = () => (
  <Fragment>
    <Timer />
    <Header />
    <Main />
    <Footer />
  </Fragment>
);

export default Home;
