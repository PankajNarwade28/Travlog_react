import React from "react";
import "./DestinyCard.css";
// import Desti1 from "/assets/Destination-img-1.png";
// import Desti2 from "/assets/Destination-img-2.png";
// import Desti3 from "/assets/Destination-img-3.png";
import Star1 from "/assets/Star.png";
export const DestinyCard = () => {
  return (
    <>
      <div className="destiny-cards">
        {[
          {
            image: "/assets/Destination-img-1.png",
            title: "Paradise Beach, Bantayan Island",
            price: "$550.16",
            location: "Rome, Italy",
            rating: "4.8",
          },

          {
            image: "/assets/Destination-img-2.png",
            title: "Ocean with full of beautiful Colors",
            price: "$20.99",
            location: "Maldives",
            rating: "4.5",
          },
          {
            image: "/assets/Destination-img-3.png",
            title: "Mountain View, Above the cloud",
            price: "$150.99",
            location: "United Arab Emeries  ",
            rating: "5.0",
          },
        ].map(({ title, price, location, rating, image }) => [
          <div className="desti-card">
            <img src={image} alt="" className="desti-card-image" />
            <div className="desti-card-info desti-margin">
              <h5>{title}</h5>
              <h5 className="desti-card-price  "> {price}</h5>
            </div>
            <h4 className="desti-margin ">{location}</h4>
            <p className="desti-margin  rating ">
              {rating}
              <img src={Star1} alt="" />
            </p>
          </div>,
        ])}
      </div>
    </>
  );
};
