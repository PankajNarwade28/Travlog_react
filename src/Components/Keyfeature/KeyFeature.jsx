import React from "react";
import "./KeyFeature.css";
import { KeyInfofeature } from "./KeyInfofeature";
export const KeyFeature = () => {
  return (
    <>
      <div className="keyfeature-container">
        <div className="key-info">
          <div className="key-info-item">
            <h2 className="Heading-H2"> KEY FEATURE</h2>
            <h3 className="Heading-H3">We offer best services</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="key-info-features-section">
            <KeyInfofeature
              logo={"../src/assets/location.png"}
              label={"We Offer Best Services"}
              desc={"Lorem Ipsum is not simply random text"}
              color={"red"}
            />
            <KeyInfofeature
              logo={"../src/assets/calendar.png"}
              label={"Schedule your trip"}
              desc={"It has roots in a piece of classical"}
              color={"yellow"}
            />
            <KeyInfofeature
              logo={"../src/assets/coupen.png"}
              label={"Get discounted coupons"}
              desc={"Lorem Ipsum is not simply random text"}
              color={"pink"}
            />
          </div>
        </div>
        <div className="key-image">
          <img src="../src/assets/keyfeature.png" alt="" />
        </div>
      </div>
    </>
  );
};
