import React, { Fragment } from 'react';

import SectionHeader from '../SectionHeader';
import Spotify from '../Spotify';
import Soundcloud from '../Soundcloud';

const Listen = () => (
  <Fragment>
    <SectionHeader>Listen</SectionHeader>
    <div>
      <Spotify />
    </div>
    <div>
      <Soundcloud />
    </div>
  </Fragment>
);

export default Listen;
