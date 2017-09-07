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
    <Soundcloud />
  </div>
);

export default Listen;
