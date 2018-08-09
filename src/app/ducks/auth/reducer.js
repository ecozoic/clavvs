import { LOGIN, LOGOUT, ERROR } from './actions';

export const INITIAL_STATE = {
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
