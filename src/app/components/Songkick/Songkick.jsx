import React, { Component } from 'react';

class Songkick extends Component {
  componentDidMount() {
    const widget = new window.SongkickWidget.Injector();
    widget.loadIFrame();
  }

  render() {
    return (
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
    );
  }
}

export default Songkick;
