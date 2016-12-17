/* @flow */
import React, { Component } from 'react';

import styles from './home.scss';

import { MainContent } from '../main-content';
import { Footer } from '../footer';

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
        <MainContent />
        <Footer />
      </div>
    );
  }
}
