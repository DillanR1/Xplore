import React from "react";
import "../../App.css";

// NOTE https://www.geeksforgeeks.org/how-to-set-a-background-image-with-react-inline-styles/
// Above URL is where I learned how to set image from public :)

export default function Services() {
  return (
    <div
      className="services"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "images/tent_by_lake.jpg"
        })`,
      }}
    >
      <h1 className="services">SERVICES</h1>
    </div>
  );
}
