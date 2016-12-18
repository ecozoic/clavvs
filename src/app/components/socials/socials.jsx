/* @flow */
import React, { Component } from 'react';

import styles from './socials.scss';

/**
 * Socials component.
 * @extends React.Component
 */
export class Socials extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.socials}>
        <ul>
          <li><a href='https://soundcloud.com/clavvsatl'>
            <i className='fa fa-fw fa-soundcloud'></i>
          </a></li>
          <li><a href='https://www.facebook.com/clavvsatl'>
            <i className='fa fa-fw fa-facebook'></i>
          </a></li>
          <li><a href='https://twitter.com/clavvsatl'>
            <i className='fa fa-fw fa-twitter'></i>
          </a></li>
          <li><a href='https://www.instagram.com/clavvsatl'>
            <i className='fa fa-fw fa-instagram'></i>
          </a></li>
          <li><a href='https://www.youtube.com/user/clawsatl'>
            <i className='fa fa-fw fa-youtube'></i>
          </a></li>
          <li><a href='https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1'>
            <i className='fa fa-fw fa-spotify'></i>
          </a></li>
          <li><a href='https://clavvs.bandcamp.com/'>
            <i className='fa fa-fw fa-bandcamp'></i>
          </a></li>
        </ul>
      </div>
    );
  }
}
