import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Content from './Content';

@observer
class Contents extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    contents: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        {this.props.contents.map(content => (
          <Content key={content.id} content={content} />
        ))}
      </Fragment>
    );
  }
}

export default Contents;
