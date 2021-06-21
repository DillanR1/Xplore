import React from "react";
import HeroSection from "./HeroSection";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Browse exciting destinations and plan your next adventure!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <HeroSection />
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
className = "cards";
export default Cards;
