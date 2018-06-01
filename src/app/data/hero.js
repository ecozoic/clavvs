import shortid from 'shortid';

import img from '../../images/clavvs_single.png';
import mobileImg from '../../images/clavvs_single_mobile2.png';

export default {
  backgroundUrl: img,
  mobileBackgroundUrl: mobileImg,
  links: [
    {
      id: shortid.generate(),
      text: 'Music',
      href: 'https://open.spotify.com/artist/2JcWOIfDeHESCg42COyDy1',
      enabled: true,
      sortIndex: 0,
    },
    {
      id: shortid.generate(),
      text: 'Merch',
      href: 'https://clavvs.bigcartel.com',
      enabled: true,
      sortIndex: 1,
    },
  ],
};
