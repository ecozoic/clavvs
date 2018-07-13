export const ADD_LINK = 'clavvs/footer/ADD_LINK';
export const REMOVE_LINK = 'clavvs/footer/REMOVE_LINK';
export const UPDATE_LINK = 'clavvs/footer/UPDATE_LINK';
export const CLEAR_LINKS = 'clavvs/footer/CLEAR_LINKS';
export const SET_LINKS = 'clavvs/footer/SET_LINKS';

export const addLink = link => ({
  type: ADD_LINK,
  payload: {
    link,
  },
});

export const removeLink = id => ({
  type: REMOVE_LINK,
  payload: {
    id,
  },
});

export const updateLink = (id, link) => ({
  type: UPDATE_LINK,
  payload: {
    id,
    link,
  },
});

export const clearLinks = () => ({
  type: CLEAR_LINKS,
});

export const setLinks = links => ({
  type: SET_LINKS,
  payload: {
    links,
  },
});
