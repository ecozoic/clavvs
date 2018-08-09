import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <h2>mgmt</h2>
        <p>
          <a href="mailto:ari@sorrymomproductions.com">ari@sorrymomproductions.com</a>
        </p>
      </li>
      <li>
        <h2>licensing</h2>
        <p>
          <a href="mailto:syncteam@terrorbird.com">Terrorbird Media</a>
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
