import React from 'react';

import HeroButton from '../HeroButton';

const Hero = () => (
  <section>
    <div>
      <HeroButton href="https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1">
        Music
      </HeroButton>
      <HeroButton href="https://clavvs.bigcartel.com">
        Merch
      </HeroButton>
    </div>
  </section>
);

export default Hero;
