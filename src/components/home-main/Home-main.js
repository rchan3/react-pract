import React from "react";
import "./styles.css";

const HomeMainComponent = (props) => {
  return (
    <div className="home">
      <div className="home-main-flex">
        <div className="home-main-video-link"></div>
        <div className="home-main-download-text">
          Released on Multiple Platforms - Download Now!
        </div>
        <div className="home-main-download-buttons"></div>
        <div className="home-main-down-arrow"></div>
      </div>
    </div>
  );
};

export default HomeMainComponent;
