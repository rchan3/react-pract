import React from "react";

const Dropdown = (props) => {
  return (
    <li
      className={
        props.active ? "navigation-links active-page" : "navigation-links"
      }
      key={props.linkInfo.linkName}
    >
      {props.linkInfo.linkName}
      <div className="nav-dropdown">
        <ul>
          <li>about game</li>
          <li>teyvat</li>
          <li>itinerary</li>
          <li>manga</li>
        </ul>
      </div>
    </li>
  );
};

export default Dropdown;
