import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';

class Header extends Component {
  state = {
    menuMode: 'horizontal',
  };

  render() {
    const { menuMode } = this.state;

    const menu = (
      <ul>
        <li>
          <a href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
            <i className="fa fa-fw fa-spotify" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/clavvsatl">
            <i className="fa fa-fw fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/clavvsatl">
            <i className="fa fa-fw fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/clavvsatl">
            <i className="fa fa-fw fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/clawsatl">
            <i className="fa fa-fw fa-youtube" />
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/clavvsatl">
            <i className="fa fa-fw fa-soundcloud" />
          </a>
        </li>
        <li>
          <a href="https://clavvs.bandcamp.com/">
            <i className="fa fa-fw fa-bandcamp" />
          </a>
        </li>
      </ul>
    );

    return (
      <header id="header">
        { menuMode === 'inline' ? null : null }
        <div>
          <div>
            <Link to="/" href="/">
              <img alt="logo" src={logo} />
              <h1>CLAVVS</h1>
            </Link>
          </div>
          <div>
            { menuMode === 'horizontal' ? menu : null }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
