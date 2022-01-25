
import './App.css';
import Items from './containers/Items';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h3>Hello from react front end app page</h3>
        <Routes>
        <Route exact path="/items" element={<Items/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
