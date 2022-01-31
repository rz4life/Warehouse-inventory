export const fetchAllItems = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/items")
      .then((resp) => resp.json())
      .then((items) => {
        dispatch({ type: "ADD_ITEMS", items: items });
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
};

export const deleteItem = (item) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/item/delete/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => console.log(resp.text()))
      .then((item) => {
        dispatch({ type: "DELETE_ITEM", item: item });
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
};
