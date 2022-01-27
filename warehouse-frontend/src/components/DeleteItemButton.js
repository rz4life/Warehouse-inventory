import { connect } from "react-redux";

import { deleteItem } from "../redux/actions/index.js";

const DeleteItemButton = (props) => {
  const clickHandler = (e) => {
    if (e.target.matches("button")) {
      console.log(e.target.innerText);

      props.deleteItem(props.item);
    }
  };

  return (
    <>
      <button onClick={clickHandler}>Delete Item</button>
      <br />
      <br></br>
    </>
  );
};

export default connect(null, { deleteItem })(DeleteItemButton);