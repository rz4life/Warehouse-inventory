import React, {useState } from "react";
import './App.css';
import Items from './containers/Items';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Item from './components/Item';

import Login from './components/Login';
function App() {
  const [user, setUser] = useState(null)
  const [item, setItems] = useState({})
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/items" element={<Items setItems={setItems}/>}/>
        <Route path="/items/:id" element={<Item item={item}/>}/>
        </Routes>

        <Routes>
        <Route exact path="/login" element={<Login setUser={setUser} />}/>
        </Routes>

       </Router>
    </div>
  );
}

export default App;
