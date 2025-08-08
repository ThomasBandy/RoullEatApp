import React from "react";
import "./info.css";

export default function InfoPage() {
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
  );
}
