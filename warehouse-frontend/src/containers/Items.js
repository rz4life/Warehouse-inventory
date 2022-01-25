import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import Item from "../components/Item.js";

class Items extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    
    const items = this.props.items.map((item, i) => {
      <Item key={i} item={item} />;
      <>
      <h1>name:{item.name}</h1>
      <h1>price: {item.price}</h1>
      {/* <h1>description:{item.description}</h1> */}
      <img src={item.image}/>
      </>
    });

    return (
      <>
        <h2 >Items</h2>

        {items}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.itemReducer);

  return {
    items: state.itemReducer,
  };
};

export default connect(mapStateToProps, { fetchAllItems })(Items);