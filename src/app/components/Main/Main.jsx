import React from 'react';

import Hero from '../Hero';
import Section from '../Section';
import Spotify from '../Spotify';
import Soundcloud from '../Soundcloud';
import Songkick from '../Songkick';
import Mailchimp from '../Mailchimp';
import Socials from '../Socials';

const Main = () => (
  <main>
    <Hero />
    <Section header="Listen">
      <Spotify />
      <Soundcloud />
    </Section>
    <Section header="See">
      <Songkick />
    </Section>
    <Section header="Follow">
      <Mailchimp />
      <Socials />
    </Section>
  </main>
);

export default Main;
