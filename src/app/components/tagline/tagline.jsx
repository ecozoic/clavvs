/* @flow */
import React, { Component } from 'react';

import styles from './tagline.scss';

/**
 * Tagline component.
 * @extends React.Component
 */
export class Tagline extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.tagline}>
        <h2>
          <span className={styles.hypnotic}>hypnotic alt pop</span>
          <span className={styles.spectral}>spectral trip hop</span>
        </h2>
      </div>
    );
  }
}
