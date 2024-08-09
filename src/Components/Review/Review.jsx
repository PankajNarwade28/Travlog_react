import React from "react";
import "./Review.css";

export const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="review-bg"></div>
        <div className="left-button">
          {" "}
          <button className="arrow-button active">
            <img src="../src/assets/arrow-left 1.png" alt="" />
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
                    <img src="../src/assets/client.png" />
                  </div>
                  <div class="name-user">
                    <strong>
                      {" "}
                      Mark Smith <span>/ Travel Enthusiast</span>
                    </strong>
                    <span>
                      <img src="../src/assets/star2.png" alt="" />
                      <img src="../src/assets/star2.png" alt="" />
                      <img src="../src/assets/star2.png" alt="" />
                      <img src="../src/assets/star2.png" alt="" />
                      <img src="../src/assets/star2.png" alt="" />
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
                <img src="../src/assets/dot.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="right-button">
          <button className="arrow-button   ">
            <img src="../src/assets/arrow-left 2.png" alt="" />
          </button>
        </div>
      </div>

      <div className="mobile-arrow">
        <button className="arrow-button active">
          <img src="../src/assets/arrow-left 1.png" alt="" />
        </button>
        <button className="arrow-button">
          <img src="../src/assets/arrow-left 2.png" alt="" />
        </button>
      </div>
    </>
  );
};
