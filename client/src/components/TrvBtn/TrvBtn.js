import React from "react";
import "./TrvBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const TrvBtn = props => (
<div>
  <a href="/Trivia"> 
  <button style={{ float: "right" }} className="btn">
    Reset Game
  </button></a>
</div>
);

export default TrvBtn;