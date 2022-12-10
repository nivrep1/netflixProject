import React from "react";
import "../../styles/FirstPage/section1.scss";
import ButtonEmail from "./ButtonEmail";


const Section1 = () => {
  return (
    <div className="section">
      <div className="color-background"></div>
      <div className="background-image">
        <div className="description">
          <h1 className="title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="command-tag">Watch anywhere. Cancel anytime.</h2>
          <p className="text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="button">
          <ButtonEmail/>
          </div>
  
          
        </div>
      </div>
    </div>
  );
};

export default Section1;
