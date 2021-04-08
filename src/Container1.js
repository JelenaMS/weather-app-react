import React from "react";
import "./styles.css";
import Wrapper from "./Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Container1() {
  return (
    <div className="Container1">
      <Wrapper />

      <small>
        <a
          href="https://github.com/JelenaMS/Plus_weather_project"
          target="blank"
        >
          Open-source code
        </a>
      </small>
    </div>
  );
}
