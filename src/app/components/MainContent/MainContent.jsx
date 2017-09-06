import React from 'react';

import styles from './MainContent.scss';

import Hero from '../Hero';
import Soundcloud from '../Soundcloud';
import Songkick from '../Songkick';
import Socials from '../Socials';

const MainContent = () => (
  <div className={styles.mainContent}>
    <Hero />
    <div className={styles.embedContainer}>
      <Soundcloud />
      <Songkick />
    </div>
    <Socials />
  </div>
);

export default MainContent;
