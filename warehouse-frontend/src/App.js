import React, { useEffect, useState } from "react";
import './App.css';
import Items from './containers/Items';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import Signup from "./components/Signup";
import Login from './components/Login';
import axios from "axios";
import NewItemForm from "./containers/NewItemForm";
import EditItemForm from "./containers/EditItemForm";
import Home from "./components/Home";
import Logo from "./components/Logo"
import CopyRight from "./components/CopyRight";
function App() {
  const [user, setUser] = useState(null)
  const [item, setItems] = useState({})

  const getUserInfo = async () => {

    const userId = localStorage.getItem('userId')
    console.log(userId)
    try {
      if (userId) {
        const mainuser = await axios.get(`http://localhost:3001/user/${userId}`)
        if (mainuser) {
          setUser(mainuser)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { getUserInfo() }, [])


  return (
    <div className="App">

      <Router>
        <Logo />
        <Navbar setUser={setUser}/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/items" element={
            <div>
              {
                user ? <Items setItems={setItems} />
                  : <Login setUser={setUser} />

              }
            </div>} />
          <Route path="/items/:id" element={
            <div>
              {
                user ? <Item item={item} />

                  : <Login setUser={setUser} />

              }
            </div>}/>

        <Route exact path="/items/new" element={
          <div>
          {
            user ?<NewItemForm />
            
            : <Login setUser={setUser} />
            
          }
        </div>}/>
        </Routes>

        <Routes>
          <Route exact path="/login" element={
            <div>
              {
                user ? <Item item={item} />

                  : <Login setUser={setUser} />
              }
            </div>
          } />

        <Route path="/items/:id/edit" element={
          <div>
          {
            user ?   <EditItemForm item={item} />
            
            : <Login setUser={setUser} />
          }
        </div>}/>
        </Routes>

          <Routes>
            <Route exact path="/signup" element={
                <div>
                  {
                    user ? <Item item={item} />

                      : <Signup setUser={setUser} />

                  }
                </div>
              } />
          </Routes>
          <CopyRight />
      </Router>
    </div>
  );
}

export default App;
