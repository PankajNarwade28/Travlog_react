import React from "react";
import "./Review.css";
import Star from "/assets/star2.png";
import ArrowL1 from "/assets/arrow-left 1.png";
import ArrowL2 from "/assets/arrow-left 2.png";
import Client from "/assets/client.png";
import Dot from "/assets/dot.png";

export const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="review-bg"></div>
        <div className="left-button">
          {" "}
          <button className="arrow-button active">
            <img src={ArrowL1} alt="" />
          </button>
        </div>
        <section id="testimonials">
          <div class="testimonial-heading">
            <h2 className="Heading-H2">TESTIMONIALS</h2>
            <h3 className="Heading-H3">Trust Our Clients</h3>
          </div>
          <div class="testimonial-box-container">
            <div class="testimonial-box">
              <div class="box-top">
                <div class="profile">
                  <div class="profile-img">
                    <img src={Client} />
                  </div>
                  <div class="name-user">
                    <strong>
                      {" "}
                      Mark Smith <span>/ Travel Enthusiast</span>
                    </strong>
                    <span>
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="client-comment">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.{" "}
                </p>
                <img src={Dot} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="right-button">
          <button className="arrow-button   ">
            <img src={ArrowL2} alt="" />
          </button>
        </div>
      </div>

      <div className="mobile-arrow">
        <button className="arrow-button active">
          <img src={ArrowL1} alt="" />
        </button>
        <button className="arrow-button">
          <img src={ArrowL2} alt="" />
        </button>
      </div>
    </>
  );
};
