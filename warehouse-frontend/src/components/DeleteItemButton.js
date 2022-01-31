import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/index.js";
import { useNavigate } from "react-router-dom";

const DeleteItemButton = (props) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    if (e.target.matches("button")) {
      props.deleteItem(props.item);
      navigate("/items");
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
