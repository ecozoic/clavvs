import {
  addItemToNormalizedCollection,
  removeItemFromNormalizedCollection,
  updateItemInNormalizedCollection,
  clearNormalizedCollection,
} from '../../util';

import { ADD, REMOVE, UPDATE, CLEAR, SET } from './actions';

const INITIAL_STATE = {
  footer: {
    byId: {},
    allIds: [],
  },
  social: {
    byId: {},
    allIds: [],
  },
  hero: {
    byId: {},
    allIds: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.meta.collection]: addItemToNormalizedCollection(
          state[action.meta.collection],
          action.payload.link,
        ),
      };
    case REMOVE:
      return {
        ...state,
        [action.meta.collection]: removeItemFromNormalizedCollection(
          state[action.meta.collection],
          action.payload.id,
        ),
      };
    case UPDATE:
      return {
        ...state,
        [action.meta.collection]: updateItemInNormalizedCollection(
          state[action.meta.collection],
          action.payload.id,
          action.payload.link,
        ),
      };
    case CLEAR:
      return {
        ...state,
        [action.meta.collection]: clearNormalizedCollection(
          state[action.meta.collection],
        ),
      };
    case SET:
    default:
      return state;
  }
};
