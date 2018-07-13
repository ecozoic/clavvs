import React from 'react';
import PropTypes from 'prop-types';

const SpotifyFollow = props => (
  <iframe
    title="Spotify Follow"
    src={`https://open.spotify.com/follow/1?uri=spotify:artist:${
      props.artist
    }&size=${props.size}&theme=${props.theme}`}
    width="300"
    height="56"
    scrolling="no"
    frameBorder="0"
    style={{
      border: 'none',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    }}
  />
);

SpotifyFollow.propTypes = {
  artist: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SpotifyFollow;
