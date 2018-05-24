import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../images/logo.png';

const StyledHeader = styled.header`
  background: #13181d;
  border-bottom: 1px solid #639;
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
    color: #fff;

    &:hover {
      color: #639;
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
      <HeaderListItem>
        <a href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
          <i className="fa fa-fw fa-spotify" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://www.facebook.com/clavvsatl">
          <i className="fa fa-fw fa-facebook" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://twitter.com/clavvsatl">
          <i className="fa fa-fw fa-twitter" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://www.instagram.com/clavvsatl">
          <i className="fa fa-fw fa-instagram" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://www.youtube.com/user/clawsatl">
          <i className="fa fa-fw fa-youtube" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://soundcloud.com/clavvsatl">
          <i className="fa fa-fw fa-soundcloud" />
        </a>
      </HeaderListItem>
      <HeaderListItem>
        <a href="https://clavvs.bandcamp.com/">
          <i className="fa fa-fw fa-bandcamp" />
        </a>
      </HeaderListItem>
    </HeaderList>
  </StyledHeader>
);

export default Header;
