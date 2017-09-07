import React from 'react';

import styles from './MainContent.scss';

import Hero from '../Hero';
import Listen from '../Listen';
import See from '../See';
import Follow from '../Follow';

const MainContent = () => (
  <div className={styles.mainContent}>
    <Hero />
    <div className={styles.embedContainer}>
      <Listen />
      <See />
    </div>
    <Follow />
  </div>
);

export default MainContent;
