import React from 'react';

import Mailchimp from '../Mailchimp';
import Socials from '../Socials';

import styles from './Follow.scss';

const Follow = () => (
  <div className={styles.follow}>
    <h2>Follow</h2>
    <Mailchimp />
    <Socials />
  </div>
);

export default Follow;
