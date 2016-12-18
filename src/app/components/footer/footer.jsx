/* @flow */
import React, { Component } from 'react';

import styles from './footer.scss';

/**
 * Footer component.
 * @extends React.Component
 */
export class Footer extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <footer className={styles.footer}>
        <ul>
          <li>
            <h2>Contact</h2>
            <p>
              <a href='mailto:clavvsatl@gmail.com'>clavvsatl@gmail.com</a>
            </p>
          </li>
          <li>
            <h2>Booking & Management</h2>
            <p>
              Nick Weinberg - <a href='mailto:nick@repatlanta.com'>nick@repatlanta.com</a>
            </p>
          </li>
          <li>
            <h2>Website</h2>
            <p>
              <a href='https://github.com/ecozoic/clavvs'>ecozoic</a>
            </p>
          </li>
        </ul>
      </footer>
    );
  }
}
