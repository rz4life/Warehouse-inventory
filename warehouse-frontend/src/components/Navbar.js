import { NavLink } from "react-router-dom";
import logo from "../components/windLogo.png"
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {

  const userId = localStorage.getItem('userId')
  const navigate = useNavigate();
  return (
    <div className="navbar">
        <img className="logo" src= {logo} alt="Wind Warehouse Logo." />
      <ul className="navlinks-list">
        <div>
        <li className="navlink-li">
        <NavLink className="navlink-item" to="/">
        Home{" "}
           
          </NavLink>
          </li>

          {
            userId?
            <>
              <li className="navlink-li">
                <NavLink className="navlink-item" to="/items">
                  Item list {" "}
                </NavLink>
              </li>

                <li className="navlink-li">
                  <NavLink className="navlink-item" to="/items/new">
                    Add Item 
                  </NavLink>
                </li> 
                <li className="navlink-li">
                  <NavLink className="navlink-item" to="/user/profile">
                   Profile
                  </NavLink>
                </li> 
    
                  <li className="navlink-li">
                    <span class="logout-button" onClick={() =>{
                      localStorage.removeItem('userId')
                      props.setUser(null)
                      navigate("/")
                    }}> logout</span>
                </li>
            </>
         
             : 
             <>
               <li className="navlink-li">
               <NavLink className="navlink-item" to="/login">
                 Log In{" "}
               </NavLink>
               </li>
               <li className="navlink-li">
               <NavLink className="navlink-item" to="/signup">
                 Sign Up{" "}
               </NavLink>
               </li>
             </>
          }
        </div>
      </ul>
     
    </div>
  );
};

export default Navbar;