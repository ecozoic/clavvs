import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import FooterComponent from '../../components/Footer';

// TODO: optimize so each footer link can render independently
// TODO: depend on other properties (text, etc.)

@inject('store')
@observer
class Footer extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <FooterComponent
        links={this.props.store.sortedEnabledFooterLinks.slice()}
      />
    );
  }
}

export default Footer;
