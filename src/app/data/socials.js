import { sortBy } from 'lodash-es';

import widgets from './widgets';

export default sortBy([
  {
    id: 'spotify',
    href: `https://open.spotify.com/artist/${widgets.spotify.artist}`,
    icon: 'fa fa-fw fa-spotify',
    enabled: true,
    sortIndex: 0,
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/clavvsatl',
    icon: 'fa fa-fw fa-facebook',
    enabled: true,
    sortIndex: 1,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/clavvsatl',
    icon: 'fa fa-fw fa-twitter',
    enabled: true,
    sortIndex: 2,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/clavvsatl',
    icon: 'fa fa-fw fa-instagram',
    enabled: true,
    sortIndex: 3,
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/user/clawsatl',
    icon: 'fa fa-fw fa-youtube',
    sortIndex: 4,
  },
  {
    id: 'soundcloud',
    href: 'https://soundcloud.com/clavvsatl',
    icon: 'fa fa-fw fa-soundcloud',
    enabled: true,
    sortIndex: 5,
  },
  {
    id: 'bandcamp',
    href: 'https://clavvs.bandcamp.com/',
    icon: 'fa fa-fw fa-bandcamp',
    enabled: true,
    sortIndex: 6,
  },
].filter(i => i.enabled), 'sortIndex');
