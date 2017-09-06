import React, { Component } from 'react';

import styles from './Songkick.scss';

class Songkick extends Component {
  componentDidMount() {
    const widget = new window.SongkickWidget.Injector();
    widget.loadIFrame();
  }

  render() {
    return (
      <div className={styles.songkick}>
        <h2>See</h2>
        <a
          href="http://www.songkick.com/artists/8760929"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="true"
          data-font-color="#ffffff"
          data-background-color="transparent"
        >
          CLAVVS tour dates
        </a>
      </div>
    );
  }
}

export default Songkick;
