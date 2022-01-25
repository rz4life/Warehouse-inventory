const Item = ({item}) => {
    return (
      <div className="Item">
        
      
         <h1>name:{item.name}</h1>
         <h1>price: {item.price}</h1>
         <h1>description:{item.description}</h1>
         <h1>image: {item.image}</h1>
      </div>
    );
  }
  
  export default Item;