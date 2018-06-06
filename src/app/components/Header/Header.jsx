import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { throttle } from 'lodash-es';
import classnames from 'classnames';
import { inject, observer } from 'mobx-react';

import logo from '../../../images/logo.png';

const SCROLL_THROTTLE_MS = 100;
const SCROLL_THRESHOLD_PX = 80;

const Nav = styled.nav`
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

const NavMenu = styled.div`
  box-shadow: none;

  @media screen and (max-width: 1087px) {
    &.is-active {
      background-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.purple)};
      display: inline-block;
      position: absolute;
      right: 0;

      & .navbar-item > a {
        color: ${props => props.theme.colors.black} !important;

        &:hover {
          color: ${props => props.theme.colors.white} !important;
        }
      }
    }
  }
`;

@inject('store')
@observer
class Header extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
  };

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
  }, SCROLL_THROTTLE_MS);

  handleBurgerClick = () => {
    this.setState(prevState => ({
      burgerOpen: !prevState.burgerOpen,
    }));
  };

  render() {
    const isTransparent = this.state.scrollTop <= SCROLL_THRESHOLD_PX;

    return (
      <Nav
        transparent={isTransparent}
        className="navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="navbar-item" to="/">
            <Logo alt="logo" src={logo} />
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
        <NavMenu
          className={classnames('navbar-menu', { 'is-active': this.state.burgerOpen })}
          transparent={isTransparent}
        >
          <div className="navbar-start" />
          <div className="navbar-end">
            {this.props.store.social.links.map(link => (
              <NavItem className="navbar-item" key={link.id} transparent={isTransparent}>
                <a href={link.href}>
                  <i className={link.icon} />
                </a>
              </NavItem>
            ))}
          </div>
        </NavMenu>
      </Nav>
    );
  }
}
export default Header;
