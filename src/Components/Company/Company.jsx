import React from "react";
import "./Company.css";
import Company1 from "/assets/Company1.png";
import Company2 from "/assets/Company2.png";
import Company3 from "/assets/Company3.png";
import Company4 from "/assets/Company4.png";
import Company5 from "/assets/Company5.png";
export const Company = () => {
  return (
    <>
      <div className="company-section">
        <img src={Company1} alt="Company1" />
        <img src={Company2} alt="Company1" />
        <img src={Company3} alt="Company1" />
        <img src={Company4} alt="Company1" />
        <img src={Company5} alt="Company1" />
      </div>
    </>
  );
};
