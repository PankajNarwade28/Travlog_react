import React from "react";
import "./TravelPoint.css";
import { Countings } from "./Countings";
export const TravelPoint = () => {
  return (
    <>
      <div className="travel-container">
        <div className="travel-image">
          <img src="../src/assets/travel-image.png" alt="" />
        </div>
        <div className="travel-data">
          <div className="travel-info">
            <h2 className="Heading-H2">TRAVEL POINT</h2>
            <h3 className="Heading-H3">
              We helping you find your dream location
            </h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="travel-number">
            <Countings count={500} label={"Holiday Packages"} />
            <Countings count={100} label={"Luxury Hotel"} />
            <Countings count={7} label={"Premium Airlines"} />
            <Countings count={2000} label={"Happy Customers"} />
          </div>
        </div>
        {/* <div className="ticket">
          <img src="../src/assets/ticket.png" alt="" />
        </div> */}
      </div>
    </>
  );
};
