import React from 'react';

import styles from './MainContent.scss';

import Hero from '../Hero';
import Tagline from '../Tagline';
import Soundcloud from '../Soundcloud';
import Songkick from '../Songkick';
import Socials from '../Socials';
import Banner from '../Banner';

const MainContent = () => (
  <div className={styles.mainContent}>
    <Hero />
    <Tagline />
    <Banner />
    <div className={styles.embedContainer}>
      <Soundcloud />
      <Songkick />
    </div>
    <Socials />
  </div>
);

export default MainContent;
