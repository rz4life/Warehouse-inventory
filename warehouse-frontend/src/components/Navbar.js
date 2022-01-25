import { Route, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlinks-list">
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/signin">
            Sign In{" "}
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/signup">
            Sign Up{" "}
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/items">
            Item list
          </NavLink>
        </li>
      </ul>
      <Route exact path="/medications/new" component={NewMedicationForm} />
    </div>
  );
};

export default Navbar;