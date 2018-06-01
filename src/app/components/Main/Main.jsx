import React from 'react';

import widgets from '../../data/widgets';

import Hero from '../../containers/Hero';
import Section from '../Section';
import SpotifyFollow from '../SpotifyFollow';
import SpotifyPlayer from '../SpotifyPlayer';
import Songkick from '../Songkick';
import Mailchimp from '../Mailchimp';
import Socials from '../../containers/Socials';

const Main = () => (
  <main>
    <Hero />
    <Section header="Listen">
      {widgets.spotify.follow.enabled &&
        <SpotifyFollow
          artist={widgets.spotify.artist}
          size={widgets.spotify.follow.size}
          theme={widgets.spotify.follow.theme}
        />
      }
      {widgets.spotify.player.enabled &&
        <SpotifyPlayer
          artist={widgets.spotify.artist}
        />
      }
    </Section>
    <Section header="See">
      {widgets.songkick.enabled &&
        <Songkick
          artist={widgets.songkick.artist}
          text={widgets.songkick.text}
        />
      }
    </Section>
    <Section header="Follow">
      {widgets.mailchimp.enabled &&
        <Mailchimp
          action={widgets.mailchimp.action}
          header={widgets.mailchimp.header}
        />
      }
      <Socials />
    </Section>
  </main>
);

export default Main;
