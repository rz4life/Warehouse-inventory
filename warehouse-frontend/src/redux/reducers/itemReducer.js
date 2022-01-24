export const itemReducer = (state = [], action) => {
    console.log("ACTION?:", action);
    switch (action.type) {
      case "ADD_ITEMS":
        return [...action.items.items];
      default:
        return state;
    }
  };