import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import { Link } from "react-router-dom";
import ".//Items.css";



class Items extends Component {

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {

    const items = this.props.items.map((item, i) => {


      return (
        <div class='items-card'>
          <div class="name-container">
            <h1>{item.name}</h1>
          </div>

          <Link className="navlink-item" to={`/items/${item.id}`} >
            <img src={item.image} height="50%" width="50%" />
          </Link>
          <h1>Price: ${item.price}</h1>

        </div>
      );
    });

    return (
      <>
        <div class="backgroundpicI">
          <div class='items-cardcontainer'>

            {items}
          </div>
        </div>

      </>
    );
  }
}

const mapStateToProps = (state) => {


  return {
    items: state.itemReducer,
  };
};

export default connect(mapStateToProps, { fetchAllItems })(Items);
