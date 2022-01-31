import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
const NewItemForm = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuanity] = useState("");
  const [image, setImage] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/item/create`, {
    item: {name: name,
        description: description,
        price: price,
        category: category,
        quantity: quantity,
        image: image
      }})
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/items")
  };
  return (
    <div>
      <div class="backgroundpicnew">
        <div class="edit">

        <div class="item-card-edit">
          <form onSubmit={submitForm}>
            <h4>Add Item</h4>
            <input
              type="text"
              placeholder={"Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              />{" "}
            <br></br>
            <input
              type="text"
              placeholder={"Description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              />{" "}
            <br></br>
            <input
              type="integer"
              placeholder={"Price"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              />
            <br></br>
            <input
              type="text"
              placeholder={"Category"}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              />{" "}
            <br></br>
            <input
              type="integer"
              placeholder={"Quantity"}
              value={quantity}
              onChange={(e) => setQuanity(e.target.value)}
              name="quantity"
              />
            <br></br>
            <input
              type="text"
              placeholder={"Image"}
              value={image}
              onChange={(e) => setImage(e.target.value)}
              name="image"
              />{" "}
            <br></br>
            <br></br>
            <button type= "submit" value="submit" >Submit</button>
          </form>
              </div>
        </div>
      </div>
    </div>
  );
};
export default NewItemForm;