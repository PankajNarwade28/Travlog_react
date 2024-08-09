import React from "react";
import "./Hero.css";
import { Button } from "../../Screens/Button";
import Heroimg from "/assets/hero-image.png";
import Design1 from "/assets/Design-01.png";
import Bag from "/assets/bag.png";
import Playimg from "/assets/play.png";

export const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-info">
          <div className="hero-btn-ex">
            <button>
              Explore the world! <img src={Bag} alt="" />
            </button>
          </div>
          <div className="hero-info-content">
            <h1>
              Travel{" "}
              <span>
                top <br /> destination
              </span>{" "}
              of the world
            </h1>
            <p>
              We always make our customer happy by providing <br />
              as many choices as possible
            </p>
          </div>
          <div className="hero-btn">
            <Button title="Get Started!" />
            <div className="hero-btn-new">
              <img src={Playimg} alt="" />
              Watch Demo
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={Heroimg} alt="Hero image" />
        </div>
        <div className="design-1">
          <img src={Design1} alt="" />
        </div>
      </div>
    </>
  );
};
