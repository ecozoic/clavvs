import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const NavItem = styled.div`
  font-size: ${props => props.theme.scale.big}rem;

  & > a {
    color: ${props => (props.transparent ? props.theme.colors.blackTransparent : props.theme.colors.white)};
    transition: all ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};

    &:hover {
      color: ${props => (props.transparent ? props.theme.colors.white : props.theme.colors.purple)};
    }
  }
`;

@observer
class SocialLink extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    link: PropTypes.object.isRequired,
    transparent: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <NavItem className="navbar-item" transparent={this.props.transparent}>
        <a href={this.props.link.href}>
          <i className={this.props.link.icon} />
        </a>
      </NavItem>
    );
  }
}

export default SocialLink;
