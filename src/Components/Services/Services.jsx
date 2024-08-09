import React from "react";
import "./Services.css";
import { CorasaulService } from "./Corasaul/Corasaul-service";
import { Mcorasaul } from "./Corasaul/Mcorasaul";
export const Services = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-info">
          <h3 className="Heading-H2">SERVICES</h3>
          <h2 className="Heading-H3">Our top value categories for you</h2>
        </div>
        <div className="service-img">
          <marquee behavior="scroll" direction="left" loop="" className="marq">
            <CorasaulService />
          </marquee>
          <Mcorasaul />
        </div>
      </div>
    </>
  );
};
