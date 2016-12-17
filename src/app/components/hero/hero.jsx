/* @flow */
import React, { Component } from 'react';

import styles from './hero.scss';

import { Tagline } from '../tagline';

/**
 * Hero component.
 * @extends React.Component
 */
export class Hero extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <section className={styles.hero}>
        <Tagline />
      </section>
    );
  }
}
