import { sortBy, partial } from 'lodash-es';
import { createSelector } from 'reselect';

import {
  getItemsFromNormalizedCollection,
  getItemFromNormalizedCollection,
} from '../../util';

const getLinks = (collection, state) =>
  getItemsFromNormalizedCollection(state.links[collection]);

const getLink = (collection, state, { id }) =>
  getItemFromNormalizedCollection(state.links[collection], id);

const sortLinks = links => sortBy(links, 'sortIndex');

export const getHeroLinks = partial(getLinks, 'hero');
export const getSocialLinks = partial(getLinks, 'social');
export const getFooterLinks = partial(getLinks, 'footer');

export const getHeroLink = partial(getLink, 'hero');
export const getSocialLink = partial(getLink, 'social');
export const getFooterLink = partial(getLink, 'footer');

export const getSortedHeroLinks = createSelector(getHeroLinks, sortLinks);
export const getSortedSocialLinks = createSelector(getSocialLinks, sortLinks);
export const getSortedFooterLinks = createSelector(getSocialLinks, sortLinks);
