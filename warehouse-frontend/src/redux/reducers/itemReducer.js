export const itemReducer = (state = [], action) => {
    console.log("ACTION?:", action);
    switch (action.type) {
      case "ADD_ITEMS":
        return [...action.items.items];
        case "ADD_NEW_ITEM":
        console.log(state, action.item);
        return [...state, action.item];
        case "EDIT_MEDICATION":
          let allItems = [...state];
          const num = allItems.findIndex(
        (item) => item.id === action.item.id
      );
      allItems[num] = action.item;

      return [...allItems];
        case "DELETE_ITEM":
        let remainingItems= state.filter(
          (item) => item !== action.item
        );
      return [...remainingItems];
      default:
        return state;
    }
  };