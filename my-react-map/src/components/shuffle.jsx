import React, { useState, useEffect } from "react";
import "./shuffle.css";

import { Map } from "@maptiler/sdk";

//Used Gemini to help format Shuffle and parse through indiana.json
function Shuffle({ onChoiceMade }) {
  const [localList, setLocalList] = useState([]);
  const coordinates = { lng: -86.16, lat: 39.77 };
  const radius = 0.075;

  function getInfo() {
    fetch("indiana.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredList = data.filter((item) => {
          const hasValidCoords = item.latitude && item.longitude;
          const isRestaurant =
            item.categories && item.categories.includes("Restaurants");

          if (hasValidCoords && isRestaurant) {
            const lngDiff = Math.abs(item.longitude - coordinates.lng);
            const latDiff = Math.abs(item.latitude - coordinates.lat);
            return lngDiff <= radius && latDiff <= radius;
          }
          return false;
        });

        setLocalList(filteredList);

        if (filteredList.length > 0) {
          let randomNumber = Math.floor(Math.random() * filteredList.length);
          let choice = filteredList[randomNumber];
          console.log("Selected choice:", choice);
          // Call the prop function to export the choice
          if (onChoiceMade) {
            onChoiceMade(choice);
          }
        } else {
          console.log("No restaurants found in the filtered area.");
          if (onChoiceMade) {
            onChoiceMade(null);
          }
        }
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
