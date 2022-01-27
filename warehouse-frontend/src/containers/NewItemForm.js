import { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions/index.js";


class NewItemForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      image: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();


    this.props.addNewItem(this.state);

  };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    console.log([e.target.name], ":", e.target.value);
  };



  render() {
    return (
      <>
        <div class="new">
          <div class="backgroundpicnew">
            <div class="item-card-new">

            <div className="centered">
              <form onSubmit={this.submitHandler}>
                <h4>ADD ITEM</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                  name="name"
                  />{" "}
                <br></br>
                <input
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChangeHandler}
                  name="description"
                  />{" "}
                <br></br>
                <input
                  type="integer"
                  placeholder="Price"
                  value={this.state.price}
                  onChange={this.onChangeHandler}
                  name="price"
                  />
                <br></br>
                <input
                  type="text"
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.onChangeHandler}
                  name="category"
                  />{" "}
                <br></br>
                <input
                  type="integer"
                  placeholder="Stock"
                  value={this.state.quantity}
                  onChange={this.onChangeHandler}
                  name="quantity"
                  />
                <br></br>
                <input
                  type="text"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.onChangeHandler}
                  name="image"
                  />{" "}
                <br></br>
                <br></br>
                <button type= "submit" value="submit" >Submit</button>
              </form>

              <br></br>
                  </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(null, { addNewItem })(NewItemForm);