import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="center-column">
          <div className="item-row">
            <span>One</span>
          </div>
          <div className="item-row">
            <span>Two</span>
          </div>
          <div className="item-row">
            <span>Three</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
