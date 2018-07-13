import {
  addItemToNormalizedCollection,
  removeItemFromNormalizedCollection,
  updateItemInNormalizedCollection,
  clearNormalizedCollection,
} from '../../util';

import {
  ADD_LINK,
  REMOVE_LINK,
  UPDATE_LINK,
  CLEAR_LINKS,
  SET_LINKS,
} from './actions';

export const INITIAL_STATE = {
  links: {
    byId: {},
    allIds: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: addItemToNormalizedCollection(state.links, action.payload.link),
      };
    case REMOVE_LINK:
      return {
        ...state,
        links: removeItemFromNormalizedCollection(
          state.links,
          action.payload.id,
        ),
      };
    case UPDATE_LINK:
      return {
        ...state,
        links: updateItemInNormalizedCollection(
          state.links,
          action.payload.id,
          action.payload.link,
        ),
      };
    case CLEAR_LINKS:
      return {
        ...state,
        links: clearNormalizedCollection(state.links),
      };
    case SET_LINKS:
    default:
      return state;
  }
};
