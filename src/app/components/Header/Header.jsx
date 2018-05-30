import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { throttle } from 'lodash-es';

import header from '../../data/header';
import socials from '../../data/socials';

const StyledNav = styled.nav`
  background-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.black)};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.purple)};
  transition: all .5s cubic-bezier(.455, .03, .515, .955);
`;

const LogoHeader = styled.h1`
  display: none;
`;

const Logo = styled.img`
  max-height: 4rem !important;
`;

const Burger = styled.div`
  height: auto;
`;

const HeaderListItem = styled.li`
  border-bottom: 3px solid transparent;
  display: inline-block;
  text-align: center;

  &:hover {
    border-bottom: 3px solid transparent;
  }

  & > a {
    color: ${props => props.theme.colors.white};

    &:hover {
      color: ${props => props.theme.colors.purple};
    }
  }
`;

class Header extends Component {
  state = {
    scrollTop: 0,
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
  }, 100);

  render() {
    return (
      <StyledNav
        transparent={this.state.scrollTop === 0}
        className="navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="navbar-item" to="/">
            <Logo alt="logo" src={header.logoUrl} />
            <LogoHeader>CLAVVS</LogoHeader>
          </Link>
          <Burger role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Burger>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <ul>
              {socials.map(social => (
                <HeaderListItem key={social.id}>
                  <a href={social.href}>
                    <i className={social.icon} />
                  </a>
                </HeaderListItem>
              ))}
            </ul>
          </div>
        </div>
      </StyledNav>
    );
  }
}
export default Header;
