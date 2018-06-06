import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Paragraph from '../Paragraph';
import Widget from '../Widget';

@observer
class Content extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    content: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Fragment>
        {this.props.content.type === 'paragraph' &&
          <Paragraph
            header={this.props.content.header}
            text={this.props.content.text}
          />
        }
        {this.props.content.type === 'widget' &&
          <Widget
            name={this.props.content.name}
            props={this.props.content.props}
          />
        }
      </Fragment>
    );
  }
}

export default Content;
