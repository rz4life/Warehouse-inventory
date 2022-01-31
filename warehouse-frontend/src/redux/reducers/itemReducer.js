export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return [...action.items.items];
    case "DELETE_ITEM":
      let remainingItems = state.filter((item) => item !== action.item);
      return [...remainingItems];
    default:
      return state;
  }
};
