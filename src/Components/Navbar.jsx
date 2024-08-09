import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "../Screens/Button";
import navlogo from "/assets/nav-logo.png";
import Humber from "/assets/humber.png";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={navlogo} alt="Navpand" />
          <span>Travlog</span>
        </div>
        <div className="nav-item">
          <ul className="nav-items">
            <li>
              <a href="#" className=" active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Special Deals</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-links">
          {" "}
          <button className="nav-btn1">Log In</button>
          <Button title="Sign Up" />
          <div
            className="humberger-icon"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <img src={Humber} alt="Humberger icon" />
          </div>
        </div>

        <div
          className={toggleMenu ? "mobile-nav" : "mobile-nav display-none"}
          onClick={() => {
            setTimeout(() => {
              setToggleMenu();
            }, 900);
          }}
        >
          <ul className="mobile-nav-items">
            <li>
              <a href="#home" className=" active">
                Home
              </a>
            </li>
            <li>
              <a href="#discover">Discover</a>
            </li>
            <li>
              <a href="#deals">Special Deals</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <div className="mobile-nav-btn">
              <button className="nav-btn1">Log In</button>
              <Button title="Sign Up" />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
