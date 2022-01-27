import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditItemForm = (props) => {
  const params = useParams();

  console.log(props);
  const [item, setItem] = useState({});

  const getSingleItem = async () => {
    console.log("useEffect called");
    await axios
      .get(`http://localhost:3001/items/${params.id}`)
      .then((res) => {
        console.log("Res:", res);
        setItem(res.data.item);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
  useEffect(() => {
    getSingleItem();
  }, []);

  console.log(item);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [quantity, setQuanity] = useState(item.quantity);
  const [image, setImage] = useState(item.image);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/item/edit/${params.id}`, {
        name: name,
        description: description,
        price: price,
        category: category,
        quantity: quantity,
        image: image,
      })
      .then((response) => {
        props.setUser(response.User.dataValues);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class="backgroundpicII">
        <div class="item-card">
          <form onSubmit={submitForm}>
            <h4>Edit Item</h4>
            <input
              type="text"
              placeholder={item.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />{" "}
            <br></br>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            />{" "}
            <br></br>
            <input
              type="integer"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            />
            <br></br>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
            />{" "}
            <br></br>
            <input
              type="integer"
              placeholder="Stock"
              value={quantity}
              onChange={(e) => setQuanity(e.target.value)}
              name="quantity"
            />
            <br></br>
            <input
              type="text"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              name="image"
            />{" "}
            <br></br>
            <br></br>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemForm;
