import React from "react";
import "./Footer.css";
import { Dropdown } from "./Dropdown/Dropdown";
export const Footer = () => {
  return (
    <>
      <footer className="footer-container" id="contact">
        <div className="footer-info">
          <div className="footer-logo">
            <img src="../src/assets/nav-logo.png" alt="" />
            <h3>Travlog</h3>
          </div>
          <div className="footer-desc">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="footer-social">
            <img src="../src/assets/Fb.png" alt="" />
            <img src="../src/assets/Twt.png" alt="" />
            <img src="../src/assets/Inst.png" alt="" />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-company">
            <ul>
              <li>
                <h3>Company</h3>
              </li>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Career</li>
              </a>
              <a href="#">
                <li>Mobiles</li>
              </a>
              <a href="#">
                <li></li>
              </a>
            </ul>
          </div>
          <div className="footer-contact">
            <ul>
              <li>
                <h3>Contact</h3>
              </li>
              <a href="#">
                <li>Why Travlog?</li>
              </a>
              <a href="#">
                <li>Partner with us</li>
              </a>
              <a href="#">
                <li>FAQ’s</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className="footer-meet">
            <ul>
              <li>
                <h3>Meet us</h3>
              </li>
              <a href="#">
                <li>+00 92 1234 56789</li>
              </a>
              <a href="#">
                <li>info@travlog.com</li>
              </a>
              <a href="#">
                <li>205. R Street, New York</li>
              </a>
              <a href="#">
                <li>BD23200</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="dropdown-container">
          <Dropdown />
        </div>
      </footer>
      <div className="pankaj">
        <h4>Developed By Pankaj Narwade with &hearts; </h4>
        <p> Technology used : React and Vanila CSS</p>
        <a
          href="https://portfolio-pankaj-narwade.netlify.app/ "
          target="_blank"
          rel="noreferrer"
        >
          PortFolio:Pankaj Narwade
        </a>
      </div>
    </>
  );
};
