import React from 'react';

import Spotify from '../Spotify';
import Soundcloud from '../Soundcloud';

const Listen = () => (
  <div>
    <h2>Listen</h2>
    <div>
      <Spotify />
    </div>
    <div>
      <Soundcloud />
    </div>
  </div>
);

export default Listen;
