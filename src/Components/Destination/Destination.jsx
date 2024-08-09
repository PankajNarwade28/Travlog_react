import React from "react";
import "./Destination.css";
import { DestinyCard } from "./DestinyCard/DestinyCard";
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
              <img src="../src/assets/arrow-left 1.png" alt="" />
            </button>
            <button className="arrow-button">
              <img src="../src/assets/arrow-left 2.png" alt="" />
            </button>
          </div>
        </div>
        <DestinyCard />
      </div>
    </>
  );
};
