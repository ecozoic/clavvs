export const mapDocToObject = doc => ({ id: doc.id, ...doc.data() });

export const mapQuerySnapshotToArray = querySnapshot => querySnapshot.docs.map(mapDocToObject);
