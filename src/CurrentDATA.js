import React from "react";
import "./styles.css";

import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
export default function CurrentDATA() {
  return (
    <div className="CurrentDATA">
      <div className="CurrentDATA">
        <br />
        <ul>
          <li id="date"></li>
        </ul>
      </div>

      <Container />
    </div>
  );
}