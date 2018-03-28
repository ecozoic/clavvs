import React from 'react';

import Spotify from '../Spotify';
import Soundcloud from '../Soundcloud';

import styles from './Listen.scss';

const Listen = () => (
  <div className={styles.listen}>
    <h2>Listen</h2>
    <div className={styles.spotifyContainer}>
      <Spotify />
    </div>
    <div className={styles.soundcloudContainer}>
      <Soundcloud />
    </div>
  </div>
);

export default Listen;
