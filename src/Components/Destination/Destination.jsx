import React from "react";
import "./Destination.css";
import { DestinyCard } from "./DestinyCard/DestinyCard";
import ArrowL1 from "/assets/arrow-left 1.png";
import ArrowL2 from "/assets/arrow-left 2.png";
export const Destination = () => {
  return (
    <>
      <div>
        <div className="desti-container">
          <div className="desti-head">
            <h2 className="Heading-H2">DESTINATION</h2>
            <h3 className="Heading-H3">Explore top destination</h3>
          </div>
          <div className="desti-button">
            <button className="arrow-button active">
              <img src={ArrowL1} alt="" />
            </button>
            <button className="arrow-button">
              <img src={ArrowL2} alt="" />
            </button>
          </div>
        </div>
        <DestinyCard />
      </div>
    </>
  );
};
