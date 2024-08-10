import React from "react";
import "./Corasaul-service.css";
// import Service1 from "/assets/service-img-1.png";
// import Service2 from "/assets/service-img-2.png";
// import Service3 from "/assets/service-img-3.png";
export const CorasaulService = () => {
  return (
    <>
      <div className="service-carousel">
        {[
          {
            title: "Best Tour Guide",
            desc: "What looked like a small patch of purple grass.",
            image: "/assets/service-img-1.png",
          },
          {
            title: "Easy Booking",
            desc: "Square, was moving across the sand.",
            image: "/assets/service-img-2.png",
          },
          {
            title: "Weather Forecast",
            desc: "What looked like a small patch of purple grass.",
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
