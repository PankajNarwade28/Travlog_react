import React from "react";
import "./Hero.css";
import { Button } from "../../Screens/Button";

export const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-info">
          <div className="hero-btn-ex">
            <button>
              Explore the world! <img src="../src/assets/bag.png" alt="" />
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
              <img src="../src/assets/play.png" alt="" />
              Watch Demo
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="../src/assets/hero-image.png" alt="Hero image" />
        </div>
        <div className="design-1">
          <img src="../src/assets/Design-01.png" alt="" />
        </div>
      </div>
    </>
  );
};
