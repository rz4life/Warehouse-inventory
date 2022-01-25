import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import Item from "../components/Item.js";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

class Items extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  

  render() {
    
    const items = this.props.items.map((item, i) => {
    
   
      return <>
      <h1>{item.name}</h1>
      <h1>price:${item.price}</h1>
        
        {console.log("ITEM:", item)}
      <NavLink className="navlink-item" to={`/items/${item.id}`}>
            <img src={item.image}/>   
            
        </NavLink>
     
   
      </>
      
     
    })
    
    
    ;

    return (
      <>
        <h1 >All Items</h1>

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