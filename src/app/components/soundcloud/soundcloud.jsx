/* @flow */
import React, { Component } from 'react';

import styles from './soundcloud.scss';

/**
 * Soundcloud component.
 * @extends React.Component
 */
export class Soundcloud extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.soundcloud}>
        <h2>Listen</h2>
        <iframe width="100%" height="450" scrolling="no" frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/69917228&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" />
      </div>
    );
  }
}
