import { partial } from 'lodash-es';

export const ADD = 'clavvs/links/ADD';
export const REMOVE = 'clavvs/links/REMOVE';
export const UPDATE = 'clavvs/links/UPDATE';
export const CLEAR = 'clavvs/links/CLEAR';
export const SET = 'clavvs/links/SET';

const add = (collection, link) => ({
  type: ADD,
  payload: {
    link,
  },
  meta: {
    collection,
  },
});

const remove = (collection, id) => ({
  type: REMOVE,
  payload: {
    id,
  },
  meta: {
    collection,
  },
});

const update = (collection, id, link) => ({
  type: UPDATE,
  payload: {
    id,
    link,
  },
  meta: {
    collection,
  },
});

const clear = collection => ({
  type: CLEAR,
  meta: {
    collection,
  },
});

const set = (collection, links) => ({
  type: SET,
  payload: {
    links,
  },
  meta: {
    collection,
  },
});

export const addFooterLink = partial(add, 'footer');
export const addSocialLink = partial(add, 'social');
export const addHeroLink = partial(add, 'hero');

export const removeFooterLink = partial(remove, 'footer');
export const removeSocialLink = partial(remove, 'social');
export const removeHeroLink = partial(remove, 'hero');

export const updateFooterLink = partial(update, 'footer');
export const updateSocialLink = partial(update, 'social');
export const updateHeroLink = partial(update, 'hero');

export const clearFooterLinks = partial(clear, 'footer');
export const clearSocialLinks = partial(clear, 'social');
export const clearHeroLinks = partial(clear, 'hero');

export const setFooterLinks = partial(set, 'footer');
export const setSocialLinks = partial(set, 'social');
export const setHeroLinks = partial(set, 'hero');
