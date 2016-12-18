/* @flow */
import React, { Component } from 'react';

import styles from './hero.scss';

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
        <h1>CLAVVS</h1>
        <div>
          <a href='#'>
            <i className='fa fa-fw fa-headphones'></i>
          </a>
          <a href='#'>
            <i className='fa fa-fw fa-shopping-cart'></i>
          </a>
        </div>
      </section>
    );
  }
}
