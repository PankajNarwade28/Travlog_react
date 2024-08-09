import React from "react";
import "./Dropdown.css";
import { DropItem } from "./DropItem/DropItem";
export const Dropdown = () => {
  return (
    <>
      <DropItem heading="Company" op1="About" op2="Career" op3="Mobiles" />
      <DropItem
        heading="Contact"
        op1="Why Travlog?"
        op2="Partner with us"
        op3="FAQ’s"
        op4="Blog"
      />
      <DropItem
        heading="Meet us"
        op1="+00 92 1234 56789"
        op2="info@travlog.com"
        op3="205. R Street, New York"
        op4="BD23200"
      />
    </>
  );
};
