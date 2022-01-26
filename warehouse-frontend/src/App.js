import React, { useEffect, useState } from "react";
import './App.css';
import { useNavigate } from 'react-router';
import Items from './containers/Items';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Item from './components/Item';
import Signup from "./components/Signup";
import Login from './components/Login';
import axios from "axios";
function App() {
  // const navigate = useNavigate();

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
        <Navbar />
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
            </div>
          } />
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
      </Router>
    </div>
  );
}

export default App;
