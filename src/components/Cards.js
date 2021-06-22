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
              label="Fish Hike Ski "
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/yuba_river.jpg"
              text="Fish California's Yuba River, home to beautiful trout. The Yuba's terrain varies from rugged outcroppings to large embankments of smooth stone."
              label="Fish"
              path="/services"
            />
            <CardItem
              src="images/northstar_snowboard.jpg"
              text="Outside of Truckee California, Northstar offers slopes for all skill levels. Shred down the mountain, and enjoy a meal by the fire after!"
              label="ski snowboard"
              path="/services"
            />
            <CardItem
              src="images/big_pine.jpg"
              text="Outdoor enthusiasts rejoice! Enjoy camping at Big Pine 15 minutes south of Bishop in the Eastern Sierras."
              label="Camping Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
