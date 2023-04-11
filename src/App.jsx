import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Rick">Rick n Morty</Link>
    </div>
  );
}

export default App;
