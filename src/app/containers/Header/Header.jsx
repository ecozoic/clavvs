import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import HeaderComponent from '../../components/Header';

// TODO: optimize so each social link can render independently
// TODO: depend on other properties (icon, etc.)

@inject('store')
@observer
class Header extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <HeaderComponent
        socials={this.props.store.social.links.slice()}
      />
    );
  }
}

export default Header;
