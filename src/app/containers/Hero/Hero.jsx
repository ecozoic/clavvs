import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import HeroComponent from '../../components/Hero';

// TODO: optimize so each hero link can render independently
// TODO: depend on other properties (icon, etc.)

@inject('store')
@observer
class Hero extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <HeroComponent
        links={this.props.store.hero.links.slice()}
      />
    );
  }
}

export default Hero;
