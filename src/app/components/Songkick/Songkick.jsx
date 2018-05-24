import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Songkick extends Component {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const widget = new window.SongkickWidget.Injector();
    widget.loadIFrame();
  }

  render() {
    return (
      <a
        href={`http://www.songkick.com/artists/${this.props.artist}`}
        className="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        data-font-color="#ffffff"
        data-background-color="transparent"
      >
        {this.props.text}
      </a>
    );
  }
}

export default Songkick;
