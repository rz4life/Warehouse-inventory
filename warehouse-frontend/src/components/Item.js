import axios from "axios";    
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Item = () => {

const params = useParams();
    
    const [item, setItem] = useState({})
    
    console.log("ItemID:", params.itemId)

        const getSingleItem = async() => {
          console.log("useEffect called");
            await axios.get(`http://localhost:3001/items/${params.itemId}`)
            .then(res => {
                console.log("Res:", res)
                setItem(res.data.item)
            })
            .catch(err =>{
                console.log("ERROR:", err)
            })
        }
        useEffect(() => {getSingleItem()},[]) 



  return ( 
  
      <div>
        <h1>{item.name}</h1> 
        <h2>price: {item.price}</h2> 
        <img src={item.image}/> 
        <h3>description:</h3>
        <p>{item.description}</p>
        <h4>In Stock: {item.quantity}</h4> 
      </div>
      
    );

      }
  export default Item;