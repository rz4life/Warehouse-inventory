const Item = (props) => {
  console.log()
  return ( 
      <div className="Item">
         <h1>{props.item.name}</h1>
         <h1>price: {props.item.price}</h1> 
         <h1>description:{props.item.description}</h1>
         <img src={props.item.image}/> 
      </div>
    );
  }
  
  export default Item;