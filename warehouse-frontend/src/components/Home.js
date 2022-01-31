import ".//Home.css";
const Home = (props) => {
  return (
    <div>
      <div class="backgroundpicIV">
        <div class="home">

          <div class="home-card">

            <p className="home-paragraph">
              {" "}
              Welcome to Wind Warehouse
              <br></br>
              <br></br>
              An interactive react application created by Shafee, RZ and Andrés
              <br></br>
              <br></br>
            </p>
            {
              props.user ? 
              <p>Welcome {props.user.data.user.firstName.toUpperCase()}</p>
              :<p> Please signup or sign in to begin</p>
            }
            <img className="main-logo" src="2.png" alt="Wind Warehouse Logo." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;