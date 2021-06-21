import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Browse exciting destinations and plan your next adventure!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/gods_bath.jpg"
              text="Explore Gods Bath waterfall on the Clavey River in California"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/mammoth_lakes.jpg"
              text="See the Majestic Eastern Sierras and the town of Mammoth, home of world class skiing and breath-taking nature."
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
