import { combineReducers } from 'redux';

// TODO: reducer registry for code-splitting
import auth from './auth';
import footer from './footer';
import hero from './hero';
import section from './section';
import social from './social';

export default combineReducers({
  auth,
  footer,
  hero,
  section,
  social,
});
