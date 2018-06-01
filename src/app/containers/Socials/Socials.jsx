import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import SocialsComponent from '../../components/Socials';

// TODO: optimize so each social link can render independently
// TODO: depend on other properties (icon, etc.)

@inject('store')
@observer
class Socials extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <SocialsComponent
        links={this.props.store.socials.links.slice()}
      />
    );
  }
}

export default Socials;
