import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import Widget from '../../components/Widget';

// TODO: optimize so each section can render independently
// TODO: handle sorting/filtering contents with computeds
// TODO: depend on other properties (icon, etc.)

@inject('store')
@observer
class Sections extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Fragment>
        {this.props.store.section.sections.map(section => (
          <Section key={section.id} header={section.header}>
            {section.contents.filter(c => c.enabled).map(content => (
              <Fragment key={content.id}>
                {content.type === 'paragraph' &&
                  <Paragraph
                    header={content.header}
                    text={content.text}
                  />
                }
                {content.type === 'widget' &&
                  <Widget
                    name={content.name}
                    props={content.props}
                  />
                }
              </Fragment>
            ))}
          </Section>
        ))}
      </Fragment>
    );
  }
}

export default Sections;
