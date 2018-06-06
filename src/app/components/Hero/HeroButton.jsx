import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const ButtonLink = styled.a`
  background-color: transparent;
  border: 4px solid ${props => props.theme.colors.blackTransparent};
  color: ${props => props.theme.colors.blackTransparent};
  display: inline-block;
  font-size: ${props => props.theme.scale.bigger}rem;
  font-weight: ${props => props.theme.font.weights.bold};
  padding: ${props => props.theme.scale.normal}rem;
  text-align: center;
  text-transform: uppercase;
  transition: all ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
  }

  &:active {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
  }
`;

@observer
class HeroButton extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    link: PropTypes.object.isRequired,
  };

  render() {
    return (
      <ButtonLink href={this.props.link.href}>
        {this.props.link.text}
      </ButtonLink>
    );
  }
}

export default HeroButton;
