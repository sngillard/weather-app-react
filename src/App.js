import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <footer>
          This project was coded by{" "}
          <a href="http://www.linkedin.com/in/sarahgillard3" target="_blank">
            Sarah Gillard
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sngillard/weather-app-react"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
