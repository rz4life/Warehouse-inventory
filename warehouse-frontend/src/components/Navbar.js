import { NavLink } from "react-router-dom";


const Navbar = () => {

  const userId = localStorage.getItem('userId')

  return (
    <div className="navbar">
      <ul className="navlinks-list">
        <div>
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