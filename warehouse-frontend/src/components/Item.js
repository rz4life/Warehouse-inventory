import axios from "axios";    
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ".//Item.css";
const Item = () => {

const params = useParams();
    
    const [item, setItem] = useState({})
    
    console.log("ItemID:", params.id)

        const getSingleItem = async() => {
          console.log("useEffect called");
            await axios.get(`http://localhost:3001/items/${params.id}`)
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
        <div class="backgroundpicII">

        <div class="item-card">
        <h1>{item.name}</h1> 
        <img src={item.image} height= "40%" width= "40%"/> 
        <h2 class="price">Price: ${item.price}.00</h2> 
        <h4 class="stock">In Stock: {item.quantity}</h4> 
        <h3>Description:</h3>
        <div class="content-card">
        <p>{item.description}</p>
        </div>
        </div>
      </div>
        </div>
      
    );

      }
  export default Item;