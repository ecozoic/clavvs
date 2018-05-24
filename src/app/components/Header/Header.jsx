import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../images/logo.png';
import socials from '../../data/socials';

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.black};
  border-bottom: 1px solid ${props => props.theme.colors.purple};
  height: 80px;
  margin-bottom: 24px;
  padding: 0 4%;
  position: fixed;
  transition: border .5s cubic-bezier(.455, .03, .515, .955), background .5s cubic-bezier(.455, .03, .515, .955);
  width: 100%;
  z-index: 2;
`;

const Logo = styled.img`
  height: 70px;
  line-height: 70px;
  margin-top: 5px;
`;

const LogoHeader = styled.h1`
  display: none;
`;

const HeaderList = styled.ul`
  float: right;
  font-size: 20px;
`;

const HeaderListItem = styled.li`
  border-bottom: 3px solid transparent;
  display: inline-block;
  height: 80px;
  line-height: 80px;
  min-width: 72px;
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

const Header = () => (
  <StyledHeader>
    <Link to="/" href="/">
      <Logo alt="logo" src={logo} />
      <LogoHeader>CLAVVS</LogoHeader>
    </Link>
    <HeaderList>
      {socials.map(social => (
        <HeaderListItem key={social.id}>
          <a href={social.href}>
            <i className={social.icon} />
          </a>
        </HeaderListItem>
      ))}
    </HeaderList>
  </StyledHeader>
);

export default Header;
