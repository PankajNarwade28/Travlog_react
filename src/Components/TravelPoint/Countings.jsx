import React, { useState } from "react";
import "./Counting.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export const Countings = ({ count, label }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="travel-counter">
        <div className="trav-count">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h5>{counterOn && <CountUp end={count} duration={5} />}+</h5>
          </ScrollTrigger>
        </div>
        <div className="trav-lable">{label}</div>
      </div>
    </>
  );
};
