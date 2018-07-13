import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.gray};
  margin-bottom: ${props => props.theme.scale.small}rem;
`;

const FooterListContent = styled.p`
  color: ${props => props.theme.colors.white};
`;

const FooterListLink = styled.a`
  color: ${props => props.theme.colors.white};
  transition: color ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easing};

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`;

@observer
class FooterItem extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    link: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="column">
        <FooterListHeader>{this.props.link.header}</FooterListHeader>
        <FooterListContent>
          <FooterListLink href={this.props.link.href}>
            {this.props.link.text}
          </FooterListLink>
        </FooterListContent>
      </div>
    );
  }
}

export default FooterItem;
