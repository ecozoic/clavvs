/* @flow */
import React, { Component } from 'react';

import styles from './main-content.scss';

import { Hero } from '../hero';
import { Header } from '../header';
import { Tagline } from '../tagline';
import { Soundcloud } from '../soundcloud';
import { Songkick } from '../songkick';
import { Socials } from '../socials';

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
        <Header />
        <Hero />
        <Tagline />
        <div className={styles.embedContainer}>
          <Soundcloud />
          <Songkick />
        </div>
        <Socials />
      </div>
    );
  }
}
