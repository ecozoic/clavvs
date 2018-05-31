import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { throttle } from 'lodash-es';
import classnames from 'classnames';

import header from '../../data/header';
import socials from '../../data/socials';

const StyledNav = styled.nav`
  background-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.black)};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.purple)};
  transition: ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};
`;

const LogoHeader = styled.h1`
  display: none;
`;

const Logo = styled.img`
  max-height: ${props => props.theme.scale.biggest}rem !important;
`;

const Burger = styled.div`
  color: ${props => (props.transparent ? props.theme.colors.blackTransparent : props.theme.colors.white)};
  height: auto;
  transition: all ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};

  &:hover {
    color: ${props => (props.transparent ? props.theme.colors.white : props.theme.colors.purple)};
  }
`;

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

class Header extends Component {
  state = {
    scrollTop: 0,
    burgerOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = throttle(() => {
    this.setState({
      scrollTop: window.scrollY,
    });
  }, header.scrollThrottleMs);

  handleBurgerClick = () => {
    this.setState(prevState => ({
      burgerOpen: !prevState.burgerOpen,
    }));
  };

  render() {
    const isTransparent = this.state.scrollTop <= header.scrollThresholdPx;

    return (
      <StyledNav
        transparent={isTransparent}
        className="navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="navbar-item" to="/">
            <Logo alt="logo" src={header.logoUrl} />
            <LogoHeader>CLAVVS</LogoHeader>
          </Link>
          <Burger
            role="button"
            className={classnames('navbar-burger', { 'is-active': this.state.burgerOpen })}
            aria-label="menu"
            aria-expanded="false"
            transparent={isTransparent}
            active={this.state.burgerOpen}
            onClick={this.handleBurgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Burger>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end">
            {socials.map(social => (
              <NavItem className="navbar-item" key={social.id} transparent={isTransparent}>
                <a href={social.href}>
                  <i className={social.icon} />
                </a>
              </NavItem>
            ))}
          </div>
        </div>
      </StyledNav>
    );
  }
}
export default Header;
