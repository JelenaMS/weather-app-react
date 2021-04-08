import React from "react";
import "./styles.css";
import CurrentDATA from "./CurrentDATA";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.png";

export default function Wrapper() {
  return (
    <div className="Wrapper">
      <img src={Weather} width="130" alt="weather" />
      <CurrentDATA />
    </div>
  );
}
