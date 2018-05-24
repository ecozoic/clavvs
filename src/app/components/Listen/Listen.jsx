import React, { Fragment } from 'react';

import SectionHeader from '../SectionHeader';
import Spotify from '../Spotify';
import Soundcloud from '../Soundcloud';

const Listen = () => (
  <Fragment>
    <SectionHeader>Listen</SectionHeader>
    <Spotify />
    <Soundcloud />
  </Fragment>
);

export default Listen;
