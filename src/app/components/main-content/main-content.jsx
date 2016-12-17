/* @flow */
import React, { Component } from 'react';

import styles from './main-content.scss';

import { Hero } from '../hero';
import { Tagline } from '../tagline';

/**
 * Main content component.
 * @extends React.Component
 */
export class MainContent extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.mainContent}>
        <Hero />
      </div>
    );
  }
}
