import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Map from "./components/map.jsx";
import Shuffle from "./components/shuffle.jsx";
import InfoPage from "./components/info.jsx";

function App() {
  return (
    <div className="App">
      <div id="navBox">
        <Navbar />
      </div>
      <div id="mapBox">
        <Map />
      </div>
      <div id="infoBox">
        <InfoPage />
      </div>
      <div id="shuffleButton">
        <Shuffle />
      </div>
    </div>
  );
}

export default App;
