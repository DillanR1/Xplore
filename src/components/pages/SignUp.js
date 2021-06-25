import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <div
      className="sign-up"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "images/campfire.jpg"
        })`,
      }}
    >
      <h1 className="sing-up">Join The Group!</h1>
    </div>
  );
}
