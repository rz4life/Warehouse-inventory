export const fetchAllItems = () => {
    return (dispatch) => {
      fetch("http://localhost:3001/items")
        .then((resp) => resp.json())
        .then((items) => {
          debugger
          console.log(items);
          dispatch({ type: "ADD_ITEMS", items: items });
          console.log("dispatched")
        });
    };
  };