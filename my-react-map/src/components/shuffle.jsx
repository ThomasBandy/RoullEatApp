import React, { useState, useEffect } from "react";
import "./shuffle.css";
import Map, { point } from "./map";

//import { restaurants, restaurantData } from "./map";

function Shuffle() {
  function getInfo() {
    fetch("/louisville_restaurant.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter the data based on the criteria
        const filteredList = data.filter((item) => {});

        // Update the state with the filtered list
        setLocalList(filteredList);

        // Log the filtered list to the console
        console.log("Filtered List:", filteredList);
      })
      .catch((error) => console.error("Problem Fetching Locations:", error));
  }

  return (
    <div>
      <button className="shuffle" id="shuffButton" onClick={getInfo}>
        Shuffle
      </button>
    </div>
  );
}
export default Shuffle;
