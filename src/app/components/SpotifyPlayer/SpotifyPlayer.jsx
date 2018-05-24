import React from 'react';
import PropTypes from 'prop-types';

const SpotifyPlayer = props => (
  <iframe
    style={{ width: '100%', backgroundColor: 'transparent' }}
    title="Spotify"
    src={`https://open.spotify.com/embed?uri=spotify:artist:${props.artist}`}
    width="300"
    height="380"
    frameBorder="0"
    allow="encrypted-media"
  />
);

SpotifyPlayer.propTypes = {
  artist: PropTypes.string.isRequired,
};

export default SpotifyPlayer;
