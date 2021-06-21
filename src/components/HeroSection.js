import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay muted />
      <h1>EXPLORE THE OUTDOORS</h1>
      <p>Recharge and get lost in natural wonders</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GO EXPLORING
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          PREVIEW ADVENTURE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
