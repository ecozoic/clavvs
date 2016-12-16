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
        <h2>hypnotic alt pop // spectral trip hop</h2>
      </div>
    );
  }
}
