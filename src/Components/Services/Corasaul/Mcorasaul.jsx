import React from "react";
import "./Corasaul-service.css";
export const Mcorasaul = () => {
  return (
    <>
      <div className="service-carousel-mobile">
        {[
          {
            title: "Best Tour Guide",
            desc: "What looked like a small.",
            image: "/assets/service-img-1.png",
          },
          {
            title: "Easy Booking",
            desc: "Moving across the sand.",
            image: "/assets/service-img-2.png",
          },
          {
            title: "Weather Forecast",
            desc: "What looked like a small.",
            image: "/assets/service-img-3.png",
          },
        ].map(({ title, desc, image }) => [
          <div className="card   ">
            <div className="card-body">
              <img src={image} alt="" className="mx-auto" />
              <h5>{title}</h5>
              <p className="card-text">{desc}</p>
            </div>
          </div>,
        ])}
      </div>
    </>
  );
};
