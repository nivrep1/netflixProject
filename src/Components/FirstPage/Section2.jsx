import React from "react";
import "../../styles/FirstPage/section2.scss";

const Section2 = () => {
  return (
    <div className="section-enjoy  bg-black flex">
      <div className="description">
        <h2>Enjoy on your TV.</h2>
        <p className="text-white ">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="tv">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="tv"
        />
        <video
          className="poster-video"
          width="71%"
          autoPlay
          loop
          muted
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Section2;
