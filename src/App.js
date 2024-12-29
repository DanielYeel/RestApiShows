import React from "react";
import ShowManager from "./components/ShowManager";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Show Directory</h1>
      </header>
      <div>
        <ShowManager />
      </div>
    </div>
  );
}

export default App;
