import { createElement } from 'react';
import PropTypes from 'prop-types';

import Mailchimp from './Mailchimp';
import Socials from './Socials';
import Songkick from './Songkick';
import Soundcloud from './Soundcloud';
import SpotifyFollow from './SpotifyFollow';
import SpotifyPlayer from './SpotifyPlayer';

const Widget = ({ name, props }) => {
  let widget = null;

  switch (name) {
    case 'mailchimp':
      widget = Mailchimp;
      break;
    case 'socials':
      widget = Socials;
      break;
    case 'songkick':
      widget = Songkick;
      break;
    case 'soundcloud':
      widget = Soundcloud;
      break;
    case 'spotify-follow':
      widget = SpotifyFollow;
      break;
    case 'spotify-player':
      widget = SpotifyPlayer;
      break;
    default:
      widget = null;
  }

  return createElement(widget, props);
};

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.any,
};

Widget.defaultProps = {
  props: {},
};

export default Widget;
