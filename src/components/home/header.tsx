"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { headerMenuItems } from "@/utils/data";

const Header = () => {
  const router = useRouter();
  const { push } = router;

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
          <button
            onClick={() => push("/auth/register")}
            className="button-primary"
          >
            Sign Me Up
          </button>
        </div>
        <div className="contain-header-button-2">
          <button
            onClick={() => push("/auth/login")}
            className="button-primary"
          >
            Log Me In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;