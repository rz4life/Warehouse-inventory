import React, {useState } from "react";
import './App.css';
import Items from './containers/Items';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null)
   
    return (
    <div className="App">
      <Router>
        <h3>Hello from react front end app page</h3>
        <Routes>
        <Route exact path="/items" element={<Items/>}/>
        </Routes>

        <Routes>
        <Route exact path="/login" element={<Login setUser={setUser} />}/>
        </Routes>

       </Router>
    </div>
  );
}

export default App;
