import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Contents from './Contents';

const SectionHeader = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.scale.biggest}rem;
  margin-bottom: ${props => props.theme.scale.biggest}rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  text-align: center;
`;

@observer
class Section extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    section: PropTypes.object.isRequired,
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionHeader>{this.props.section.header}</SectionHeader>
          {/* TODO: contents data model */}
          <Contents contents={this.props.section.contents} />
        </div>
      </section>
    );
  }
}

export default Section;
