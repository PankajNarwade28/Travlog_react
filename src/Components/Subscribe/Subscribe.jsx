import React from "react";
import "./Subscribe.css";
import Mail from "/assets/mail.png";
import Design2 from "/assets/Design-02.png";
import Design3 from "/assets/Design-03.png";

export const Subscribe = () => {
  return (
    <>
      <div className="subscribe-container">
        <div className="design-02">
          <img src={Design2} alt="" />
        </div>
        <div className="subscribe-info">
          <h2 className="Heading-H2">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <h3 className="Heading-H3">
            Prepare yourself & let’s explore the beauty of the world
          </h3>
        </div>
        <div className="subscribe-form">
          <div className="subscribe-input">
            <img src={Mail} alt="" />
            <input type="email" placeholder="Your Email" />
          </div>
          <button>Subscribe</button>
        </div>
        <div className="design-03">
          <img src={Design3} alt="" />
        </div>
      </div>
    </>
  );
};
