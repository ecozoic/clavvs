import React from 'react';

import Hero from '../Hero';
import Listen from '../Listen';
import See from '../See';
import Follow from '../Follow';

const MainContent = () => (
  <div>
    <Hero />
    <div>
      <Listen />
      <See />
    </div>
    <Follow />
  </div>
);

export default MainContent;
