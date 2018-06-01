import React from 'react';

import styles from './Socials.scss';

const Socials = () => (
  <div className={styles.socials}>
    <ul>
      <li>
        <a href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
          <i className="fa fa-fw fa-spotify" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/clavvs">
          <i className="fa fa-fw fa-facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/clavvsduo">
          <i className="fa fa-fw fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/clavvsduo">
          <i className="fa fa-fw fa-instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/c/CLAVVSduo">
          <i className="fa fa-fw fa-youtube" />
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/clavvs">
          <i className="fa fa-fw fa-soundcloud" />
        </a>
      </li>
      <li>
        <a href="https://clavvs.bandcamp.com/">
          <i className="fa fa-fw fa-bandcamp" />
        </a>
      </li>
    </ul>
  </div>
);

export default Socials;
