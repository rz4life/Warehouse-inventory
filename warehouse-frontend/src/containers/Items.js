import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import Item from "../components/Item.js";
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

class Items extends Component {
  
  componentDidMount() {
    this.props.fetchAllItems();
  }

  // passDownItem(item, i) {
    
  //   <Item key={i} item={item}/>
  //   console.log(item);
  //   console.log("clicked")
  // }

  render() {
    
    const items = this.props.items.map((item, i) => {
       
        return (
        <>
          <h1>{item.name}</h1>
          <h1>price:${item.price}</h1>
          
          <Link className="navlink-item" to={`/items/${item.id}`} >
            <img src={item.image}  />
          </Link> 
         
        </>
      );
    });

    return (
      <>
        <h1>All Items</h1>
        {items}
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
