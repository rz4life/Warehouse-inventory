import axios from "axios";
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import ".//Item.css";
import DeleteItemButton from "./DeleteItemButton";
import EditItemForm from "../containers/EditItemForm";
const Item = (props) => {

  const params = useParams();

  const [item, setItem] = useState({})
  const [user, setUser] = useState({})

  console.log("ItemID:", params.id)

  const getSingleItem = async () => {
    console.log("useEffect called");
    await axios.get(`http://localhost:3001/items/${params.id}`)
      .then(res => {
        console.log("Res:", res)
        setItem(res.data.item)
      })
      .catch(err => {
        console.log("ERROR:", err)
      })
  }
  useEffect(() => { getSingleItem() }, [])

  const getUserInfo = async () => {

    const userId = localStorage.getItem('userId')
    console.log(userId)
    try {
      if (userId) {
        const mainuser = await axios.get(`http://localhost:3001/user/${userId}`)
        if (mainuser) {
          setUser(mainuser.data.user)
        }
      }
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { getUserInfo() }, [])

  return (

    <div>
      {console.log("PROPS:", props)}
      <div class="backgroundpicII">
        <div class="item">

          <div class="item-card">
            <h1>{item.name}</h1>
            <img src={item.image} height="40%" width="40%" />
            <h2 class="price">Price: ${item.price}.00</h2>
            <h4 class="stock">In Stock: {item.quantity}</h4>
            <h3>Description:</h3>
            <div class="content-card">
              <p>{item.description}</p>
              {
                user.manager ?
                  <>
                    <a href={`${item.id}/edit`}>
                      <button>EDIT ITEM</button>
                    </a>

                    <br></br>
                    <DeleteItemButton item={item} />

                  </> : null
              }

            </div>
          </div>
        </div>

      </div>


    </div>

  );

}
export default Item;