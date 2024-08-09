import React, { useState } from "react";
import "./DropItem.css";
import DropdownImg from "/assets/dropdown.png";
export const DropItem = ({ heading, op1, op2, op3, op4 }) => {
  const [dropdown, toggleDropdown] = useState(false);
  return (
    <>
      <div
        className="dropitem"
        onClick={() => {
          toggleDropdown(!dropdown);
        }}
      >
        <div className="dropdown">
          <h3>{heading}</h3>
          <img src={DropdownImg} alt="" />
        </div>
        {dropdown ? (
          <ul>
            <li>{op1}</li>
            <li>{op2}</li>
            <li>{op3}</li>
            <li>{op4}</li>
          </ul>
        ) : null}
      </div>
    </>
  );
};
