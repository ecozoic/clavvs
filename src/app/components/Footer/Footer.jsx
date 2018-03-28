import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <h2>mgmt</h2>
        <p>
          <a href="mailto:ari.fouriezos@managethis.net">ari.fouriezos@managethis.net</a>
        </p>
      </li>
      <li>
        <h2>website</h2>
        <p>
          <a href="https://github.com/ecozoic">ecozoic</a>
        </p>
      </li>
    </ul>
  </footer>
);

export default Footer;
