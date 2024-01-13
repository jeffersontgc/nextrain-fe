import React from "react";
import { headerMenuItems } from "@/utils/data";

const Header = () => {
  return (
    <div className="header">
      <div className="contain-logo">
        <h2>Tangerine</h2>
      </div>
      <div className="contains-browser-links">
        <ul>
          {headerMenuItems?.map((item, index) => (
            <li key={index}>
              <a href="#">{item?.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contains-hader-buttons">
        <div className="contain-header-button">
          <button className="button-primary">Sign Me Up</button>
        </div>
        <div className="contain-header-button-2">
          <button className="button-primary">Log Me In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
