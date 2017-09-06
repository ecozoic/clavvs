import React from 'react';

import Spotify from '../Spotify';

import styles from './Hero.scss';

const Hero = () => (
  <section className={styles.hero}>
    <div>
      <a href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
        Music
      </a>
      <a href="https://clavvs.bigcartel.com">
        Merch
      </a>
    </div>
    <Spotify />
  </section>
);

export default Hero;
