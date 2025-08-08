import React, { useState, useEffect } from "react";
import "./shuffle.css";
import "./info.css";

import { Map } from "@maptiler/sdk";

function Shuffle() {
  const [localList, setLocalList] = useState([]);
  const coordinates = { lng: -86.16, lat: 39.77 };
  const radius = 0.075;

  function getInfo() {
    fetch("indiana.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredList = data.filter((item) => {
          const isRestaurant =
            item.categories && item.categories.includes("Restaurants");
          const hasCoordinates = item.latitude && item.longitude;
          // Ensure the item has valid latitude and longitude properties
          if (hasCoordinates && isRestaurant) {
            // Calculate the absolute difference in longitude and latitude
            const lngDiff = Math.abs(item.longitude - coordinates.lng);
            const latDiff = Math.abs(item.latitude - coordinates.lat);

            // Check if both differences are within the specified radius
            return lngDiff <= radius && latDiff <= radius;
          }
          return false;
        });

        setLocalList(filteredList);
        let randomNumber = Math.floor(Math.random() * filteredList.length);
        let choice = filteredList[randomNumber];
        console.log(choice);
      })
      .catch((error) => console.error("Problem Fetching Locations:", error));
  }
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const handleChoice = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  let restaurantName = "Restaurant Name";
  let restaurantAddress = "123 Address";
  let star = 0;
  let star1 = { color: "" };
  let star2 = { color: "" };
  let star3 = { color: "" };
  let star4 = { color: "" };
  let star5 = { color: "" };
  function setStarCount() {
    if (star > 0.5) {
      star1 = { color: "gold" };
    }
    if (star > 1.5) {
      star2 = { color: "gold" };
    }
    if (star > 2.5) {
      star3 = { color: "gold" };
    }
    if (star > 3.5) {
      star4 = { color: "gold" };
    }
    if (star > 4.5) {
      star5 = { color: "gold" };
    }
  }
  setStarCount();

  return (
    <div>
      <div className="info">
        <div id="window">
          <div className="tab" id="restName">
            <div>{restaurantName}</div>
          </div>
          <div className="tab" id="categories"></div>
          <div className="tab" id="reviews">
            <div id="revAlign">
              <span style={star1} id="star1">
                ★
              </span>
              <span style={star2} id="star2">
                ★
              </span>
              <span style={star3} id="star3">
                ★
              </span>
              <span style={star4} id="star4">
                ★
              </span>
              <span style={star5} id="star5">
                ★
              </span>
            </div>
          </div>
          <div className="tab" id="address">
            <div id="addAlign">{restaurantAddress}</div>
          </div>
        </div>
      </div>
      <button className="shuffle" id="shuffButton" onClick={getInfo}>
        Shuffle
      </button>
    </div>
  );
}

export default Shuffle;

//Used Gemini to help format Shuffle and parse through indiana.json
