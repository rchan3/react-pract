import React from "react";
import "./styles.css";

const HomeRegionComponent = (props) => {
  return (
    <div className="regions">
      <div className="region-mondstadt">
        <p>mondstadt</p>
      </div>
      <div className="region-liyue">
        <p>liyue</p>
      </div>
      <div className="region-inazuma">
        <p>inazuma</p>
      </div>
      <div className="region-comingsoon">
        <p>coming soon</p>
      </div>
    </div>
  );
};

export default HomeRegionComponent;
