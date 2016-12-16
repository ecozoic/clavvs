/* @flow */
import React, { Component } from 'react';

import styles from './footer.scss';

/**
 * Footer component.
 * @extends React.Component
 */
export class Footer extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <footer className={styles.footer}>
        <ul>
          <li>
            <h2>Links</h2>
            <div>
              <a href='https://soundcloud.com/clavvsatl'>
                <i className='fa fa-fw fa-soundcloud'></i>
                <span>Soundcloud</span>
              </a>
            </div>
            <div>
              <a href='https://www.facebook.com/clavvsatl'>
                <i className='fa fa-fw fa-facebook'></i>
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a href='https://twitter.com/clavvsatl'>
                <i className='fa fa-fw fa-twitter'></i>
                <span>Twitter</span>
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/clavvsatl'>
                <i className='fa fa-fw fa-instagram'></i>
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <a href='https://www.youtube.com/user/clawsatl'>
                <i className='fa fa-fw fa-youtube'></i>
                <span>YouTube</span>
              </a>
            </div>
            <div>
              <a href='https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1'>
                <i className='fa fa-fw fa-spotify'></i>
                <span>Spotify</span>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
