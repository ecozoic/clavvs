import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Section from './Section';

@inject('store')
@observer
class Sections extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        {this.props.store.section.sortedSections.map(section => (
          <Section key={section.id} section={section} />
        ))}
      </Fragment>
    );
  }
}

export default Sections;
