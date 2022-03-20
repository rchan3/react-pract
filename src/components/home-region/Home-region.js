import React from "react";
import "./styles.css";

const HomeRegionComponent = (props) => {
  return (
    <div className="regions">
      <div className="region-wrapper">
        <img
          className="region-star"
          src={require("./assets/regionstar.png")}
          alt=""
        />
        <p>mondstadt</p>
        <img
          className="region-hoverchar"
          src={require("./assets/2021061518151058323.png")}
          alt=""
        />
        <div className="region-mondstadt"></div>
      </div>
      <div className="region-wrapper">
        <img
          className="region-star"
          src={require("./assets/regionstar.png")}
          alt=""
        />
        <p>liyue</p>
        <img
          className="region-hoverchar"
          src={require("./assets/2021062410083822749.png")}
          alt=""
        />
        <div className="region-liyue"></div>
      </div>
      <div className="region-wrapper">
        <img
          className="region-star"
          src={require("./assets/regionstar.png")}
          alt=""
        />
        <p>inazuma</p>
        <img
          className="region-hoverchar"
          src={require("./assets/2021071515201245150.png")}
          alt=""
        />
        <div className="region-inazuma"></div>
      </div>

      <div className="region-comingsoon">
        <p>coming soon</p>
      </div>
    </div>
  );
};

export default HomeRegionComponent;
