import React from "react";
import { NextPage } from "next";

const App: NextPage = () => {
  return (
    <div>

      <div id="header">
        <div id="contain-logo">
          <h2>Tangerine</h2>
        </div>
        <div id="contains-browser-links">
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Ways to Bank</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div id="contains-hader-buttons">
          <div id="contain-header-button">
            <button id="button-primary">Sign Me Up</button>
          </div>
          <div id="contain-header-button-2">
            <button id="button-primary">Log Me In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
