import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <h2>Contact</h2>
        <p>
          <a href="mailto:clavvsatl@gmail.com">clavvsatl@gmail.com</a>
        </p>
      </li>
      <li>
        <h2>Website</h2>
        <p>
          <a href="https://github.com/ecozoic">ecozoic</a>
        </p>
      </li>
    </ul>
  </footer>
);

export default Footer;
