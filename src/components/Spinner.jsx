import React from "react";
import spinner from "../assets/Ball-Spinner.svg";

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <img src={spinner} alt="loading spinner" />
    </div>
  );
}

export default Spinner;
