import { sortBy } from 'lodash-es';

import widgets from './widgets';
import img from '../../images/clavvs_single.png';

export default {
  backgroundUrl: img,
  buttons: sortBy([
    {
      id: 'music',
      text: 'Music',
      href: `https://open.spotify.com/artist/${widgets.spotify.artist}`,
      enabled: true,
      sortIndex: 0,
    },
    {
      id: 'merch',
      text: 'Merch',
      href: 'https://clavvs.bigcartel.com',
      enabled: true,
      sortIndex: 1,
    },
  ].filter(l => l.enabled), 'sortIndex'),
};