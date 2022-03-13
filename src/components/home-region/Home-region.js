import React from "react";
import "./styles.css";

const HomeRegionComponent = (props) => {
  return (
    <div className="regions">
      <div className="region-mondstadt">mondstadt</div>
      <div className="region-liyue">liyue</div>
      <div className="region-inazuma">inazuma</div>
      <div className="region-comingsoon">coming soon</div>
    </div>
  );
};

export default HomeRegionComponent;
