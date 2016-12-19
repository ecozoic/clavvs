/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.scss';
import logo from '../../../images/logo.png';

import { Row, Col, Menu, Popover } from 'antd';

/**
 * Header component.
 * @extends React.Component
 */
export class Header extends Component {
  state = {
    menuMode: 'horizontal'
  };

  setScrollEvent() {
    let lastKnownScrollY = 0;
    let ticking = false;

    const toggleHeaderClass = (scrollY) => {
      const header = this.node;

      if (scrollY > 0) {
        header.className = header.className.replace(styles.dark, '');
      } else {
        if (header.className.indexOf(styles.dark) < 0) {
          header.className += ` ${styles.dark}`;
        }
      }
    };

    window.addEventListener('scroll', function() {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          toggleHeaderClass(lastKnownScrollY);
          ticking = false;
        });
      }
      ticking = true;
    });
  }

  componentDidMount() {
    require('enquire.js')
      .register('only screen and (min-width: 320px) and (max-width: 940px)', {
        match: () => {
          this.setState({ menuMode: 'inline' });
        },
        unmatch: () => {
          this.setState({ menuMode: 'horizontal' });
        }
      });

      this.setScrollEvent();
  }

  /**
   * Render method.
   */
  render() {
    const { menuMode } = this.state;

    const menu = (
      <Menu mode={menuMode} className={styles.nav}>
        <Menu.Item>
          <a href='https://soundcloud.com/clavvsatl'>
            <i className='fa fa-fw fa-soundcloud'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://www.facebook.com/clavvsatl'>
            <i className='fa fa-fw fa-facebook'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://twitter.com/clavvsatl'>
            <i className='fa fa-fw fa-twitter'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://www.instagram.com/clavvsatl'>
            <i className='fa fa-fw fa-instagram'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://www.youtube.com/user/clawsatl'>
            <i className='fa fa-fw fa-youtube'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1'>
            <i className='fa fa-fw fa-spotify'></i>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://clavvs.bandcamp.com/'>
            <i className='fa fa-fw fa-bandcamp'></i>
          </a>
        </Menu.Item>
      </Menu>
    );

    const popover = (
      <Popover overlayClassName={styles.popoverMenu}
               placement='bottomRight'
               content={menu}
               trigger='click'
               arrowPointAtCenter>
        <i className={`${styles.navIcon } fa fa-bars`}></i>
      </Popover>
    );

    return (
      <header id='header' className={styles.header + ' ' + styles.dark} ref={node => this.node = node}>
        { menuMode === 'inline' ? popover : null }
        <Row>
          <Col lg={8} md={10} sm={24} xs={24}>
            <Link to={'/'} className={styles.logo}>
              <img alt='logo' src={logo} />
              <h1>CLAVVS</h1>
            </Link>
          </Col>
          <Col lg={16} md={14} sm={17} xs={0}>
            { menuMode === 'horizontal' ? menu : null }
          </Col>
        </Row>
      </header>
    );
  }
}
