import React from "react";
import LanguageChange from "../FirstPage/LanguageChange";
import "../../styles/Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer bg-black">
      <h1>
        <a href="#">Questions?Contact us.</a>
      </h1>
      <div className="big-div">
        <div className="small-divs">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
        </div>
        <div className="small-divs">
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div className="small-divs">
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div className="small-divs">
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="real-footer">
        <LanguageChange />
        <span className="footer-title">Netflix Azerbaijan</span>
      </div>
    </div>
  );
};

export default Footer;
