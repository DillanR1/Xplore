import React from "react";
import "../../App.css";

export default function Products() {
  return (
    <div
      className="products"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "images/gear.jpg"})`,
      }}
    >
      <h1 className="products">Browse Outdoor Gear</h1>
    </div>
  );
}
