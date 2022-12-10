import React from "react";
import "../../styles/FirstPage/section4.scss";
import "../../index.css";

const Section4 = () => {
  return (
    <div className="section-watch bg-black flex">
      <div className="description">
        <h2>Watch everywhere.</h2>
        <p className="text-white ">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
      <div className="desktop">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt="tv"
        />
        <video
          className="poster-video"
          width="55%"
          autoPlay
          loop
          muted
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Section4;
