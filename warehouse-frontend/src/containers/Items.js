import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllItems } from "../redux/actions/index.js";
import Item from "../components/Item.js";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ".//Items.css";
class Items extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  

  render() {
    
    const items = this.props.items.map((item, i) => {
    
   
      return <> 
      
     <div class='items-card'>
      <h1>{item.name}</h1>
        
        {console.log("ITEM:", item)}
      <NavLink className="navlink-item" to={`/items/${item.id}`}>
            <img src={item.image}/>   
            
        </NavLink>
      <h1>price:${item.price}</h1>
     </div>
     
     
   
      </>
      
     
    })
    
    
    ;

    return (
      <>
        <h1 >All Items</h1>
        <div class='items-cardcontainer'>

        {items}
        </div>
        
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