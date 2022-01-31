import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ".//Item.css";
import DeleteItemButton from "./DeleteItemButton";
const Item = (props) => {
  const params = useParams();

  const [item, setItem] = useState({});
  const [user, setUser] = useState({});

  const getSingleItem = async () => {
    await axios
      .get(`http://localhost:3001/items/${params.id}`)
      .then((res) => {
        setItem(res.data.item);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
  useEffect(() => {
    getSingleItem();
  }, []);

  const getUserInfo = async () => {
    const userId = localStorage.getItem("userId");
    try {
      if (userId) {
        const mainuser = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        if (mainuser) {
          setUser(mainuser.data.user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <div class="backgroundpicII">
        <div class="item">
          <div class="item-card">
            <h1>{item.name}</h1>
            <img src={item.image} height="40%" width="40%" />
            <h2 class="price">Price: ${item.price}</h2>
            <h4 class="stock">In Stock: {item.quantity}</h4>
            <h3>Description:</h3>
            <div class="content-card">
              <p>{item.description}</p>
              {user.manager ? (
                <>
                  <a href={`${item.id}/edit`}>
                    <button>EDIT ITEM</button>
                  </a>

                  <br></br>
                  <DeleteItemButton item={item} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
