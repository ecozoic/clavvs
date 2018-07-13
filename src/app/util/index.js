import { uniq } from 'lodash-es';

export const mapDocToObject = doc => ({ id: doc.id, ...doc.data() });

export const mapQuerySnapshotToArray = querySnapshot =>
  querySnapshot.docs.map(mapDocToObject);

export const addItemToNormalizedCollection = (
  collection,
  item,
  key = 'id',
) => ({
  ...collection,
  byId: {
    ...collection.byId,
    [item[key]]: item,
  },
  allIds: uniq([...collection.allIds, item[key]]),
});

export const removeItemFromNormalizedCollection = (collection, id) => {
  const byId = { ...collection.byId };
  delete byId[id];

  return {
    ...collection,
    byId,
    allIds: collection.allIds.filter(i => i !== id),
  };
};

export const updateItemInNormalizedCollection = (collection, id, item) => ({
  ...collection,
  byId: {
    ...collection.byId,
    [id]: {
      ...collection.byId[id],
      ...item,
    },
  },
  allIds: collection.allIds,
});

export const clearNormalizedCollection = collection => ({
  ...collection,
  byId: {},
  allIds: [],
});
