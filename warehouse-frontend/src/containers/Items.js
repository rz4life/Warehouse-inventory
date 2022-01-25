import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import Item from "../components/Item.js";

class Items extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    console.log(this.props);
    const items = this.props.items.map((item, i) => {
      console.log(item, i);
      console.log(this);
      return <Item key={i} item={item} />;
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