import { combineReducers } from 'redux';

// TODO: reducer registry for code-splitting
import auth from './auth';
import links from './links';
import sections from './sections';

export default combineReducers({
  auth,
  links,
  sections,
});
