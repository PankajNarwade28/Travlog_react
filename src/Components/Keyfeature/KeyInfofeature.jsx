import React from "react";
import "./KeyInfofeature.css";
export const KeyInfofeature = ({ logo, label, desc, color }) => {
  return (
    <>
      <div className="key-info-features">
        <div className={`key-info-image ${color} `}>
          <img src={logo} alt="" />
        </div>
        <div className="key-info-data">
          <h2>{label}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};
