import React from 'react';

const Spotify = () => (
  <div style={{ background: 'white', position: 'absolute', left: 0, bottom: 0, width: '210px' }}>
    <iframe
      title="Spotify"
      src="https://open.spotify.com/follow/1/?uri=spotify:artist:2JcWOIfDeHESCg42COyDy1&size=detail&theme=light"
      width="300"
      height="56"
      scrolling="no"
      frameBorder="0"
      style={{ border: 'none', overflow: 'hidden' }}
      allowTransparency="true"
    />
  </div>
);

export default Spotify;
