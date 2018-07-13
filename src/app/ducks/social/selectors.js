import { sortBy } from 'lodash-es';
import { createSelector } from 'reselect';

export const getLinks = state =>
  state.social.links.allIds.map(id => state.social.links.byId[id]);

export const getSortedLinks = createSelector(getLinks, links =>
  sortBy(links, 'sortIndex'),
);

export const getLink = (state, id) => state.social.links.byId[id];
