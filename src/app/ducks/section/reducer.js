export const INITIAL_STATE = {
  sections: {
    byId: {},
    allIds: [],
  },
  contents: {
    byId: {},
    allIds: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
