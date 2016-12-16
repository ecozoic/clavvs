/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';

/**
 * Home page component.
 * @extends React.Component
 */
export class Home extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
    );
  }
}
