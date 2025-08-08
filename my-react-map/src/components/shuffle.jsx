import React, { useState, useEffect } from "react";
import "./shuffle.css";
import "./info.css";

function Shuffle() {
  const [localList, setLocalList] = useState([]);
  const coordinates = { lng: -86.16, lat: 39.77 };
  const radius = 0.075;

  //info variables

  const [restaurantName, setRestaurantName] = useState("Restaurant Name");
  const [restaurantAddress, setRestaurantAddress] = useState("123 Address Way");
  const [star, setStar] = useState(0);
  const [restCat, setCat] = useState("Categories");
  const [star1, setStar1] = useState({ color: "" });
  const [star2, setStar2] = useState({ color: "" });
  const [star3, setStar3] = useState({ color: "" });
  const [star4, setStar4] = useState({ color: "" });
  const [star5, setStar5] = useState({ color: "" });

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
            const lngDiff = Math.abs(item.longitude - coordinates.lng);
            const latDiff = Math.abs(item.latitude - coordinates.lat);

            // Check if both differences are within the specified radius
            return lngDiff <= radius && latDiff <= radius;
          }
          return false;
        });

        setLocalList(filteredList);

        //Seperating Shuffle and Info

        let randomNumber = Math.floor(Math.random() * filteredList.length);
        let choice = filteredList[randomNumber];
        setRestaurantName(choice.name);

        setCat(choice.categories);

        setStar(choice.stars);
        if (star > 0.5) {
          setStar1({ color: "gold" });
        } else {
          setStar1({ color: "rgb(121, 130, 139)" });
        }
        if (star > 1.5) {
          setStar2({ color: "gold" });
        } else {
          setStar2({ color: "rgb(121, 130, 139)" });
        }
        if (star > 2.5) {
          setStar3({ color: "gold" });
        } else {
          setStar3({ color: "rgb(121, 130, 139)" });
        }
        if (star > 3.5) {
          setStar4({ color: "gold" });
        } else {
          setStar4({ color: "rgb(121, 130, 139)" });
        }
        if (star > 4.5) {
          setStar5({ color: "gold" });
        } else {
          setStar5({ color: "rgb(121, 130, 139)" });
        }

        setRestaurantAddress(
          `${choice.address}, ${choice.city}, ${choice.state}`
        );
      })
      .catch((error) => console.error("Problem Fetching Locations:", error));
  }

  return (
    <div>
      <div className="info">
        <div id="window">
          <div className="tab" id="restName">
            <div>{restaurantName}</div>
          </div>
          <div className="tab" id="categories">
            {restCat}
          </div>
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
