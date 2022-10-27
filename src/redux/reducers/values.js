export const valuesReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_VALUES":
      return action.payload;
    case "DELETE_ACTION":
      return action.payload;
    case "EDIT_VALUE":
      return action.payload;
    default:
      return state;
  }
};

export const FilterValues = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_VALUE":
      return action.payload;

    default:
      return state;
  }
};
