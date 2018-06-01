import shortid from 'shortid';

const spotifyArtistId = '2JcWOIfDeHESCg42COyDy1';

export default [
  {
    id: shortid.generate(),
    header: 'Listen',
    enabled: true,
    sortIndex: 0,
    contents: [
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'spotify-follow',
        enabled: true,
        sortIndex: 0,
        props: {
          size: 'detail',
          theme: 'dark',
          artist: spotifyArtistId,
        },
      },
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'spotify-player',
        enabled: true,
        sortIndex: 1,
        props: {
          artist: spotifyArtistId,
        },
      },
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'soundcloud',
        enabled: false,
        sortIndex: 2,
        props: {
          user: 69917228,
        },
      },
    ],
  },
  {
    id: shortid.generate(),
    header: 'See',
    enabled: true,
    sortIndex: 1,
    contents: [
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'songkick',
        enabled: true,
        sortIndex: 0,
        props: {
          artist: '8760929',
          text: 'CLAVVS Tour Dates',
        },
      },
    ],
  },
  {
    id: shortid.generate(),
    header: 'Follow',
    enabled: true,
    sortIndex: 2,
    contents: [
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'mailchimp',
        enabled: true,
        sortIndex: 0,
        props: {
          action: 'https://clavvs.us1.list-manage.com/subscribe/post?u=6b3bedaf97619356c511dddb9&amp;id=e1016c7f40',
          header: 'GET FREE CLAVVS MUSIC + NEWS',
        },
      },
      {
        id: shortid.generate(),
        type: 'widget',
        name: 'socials',
        enabled: true,
        sortIndex: 1,
      },
    ],
  },
];
