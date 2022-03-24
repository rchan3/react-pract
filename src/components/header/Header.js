import React from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "../../constants";
import downloadButton from "./assets/download.png";
import genshinLogo from "./assets/genshin_logo.png";
import loginIcon from "./assets/login_icon.png";
import "./styles.css";

const HeaderComponent = (props) => {
  const renderLinks = () => {
    const linkArr = [];
    let linkCount = 0;
    headerLinks.forEach((link) => {
      if (linkCount === 3 && linkCount === props.active) {
        const listElement = (
          <li className="navigation-links active-page" key={link.linkName}>
            {link.linkName}
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
        linkArr.push(listElement);
        linkCount++;
      } else if (linkCount === 3) {
        const listElement = (
          <li className="navigation-links" key={link.linkName}>
            {link.linkName}
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
        linkArr.push(listElement);
        linkCount++;
      } else if (linkCount === props.active) {
        const listElement = (
          <li className="navigation-links active-page" key={link.linkName}>
            <Link to={link.linkRoute}> {link.linkName}</Link>
          </li>
        );
        linkArr.push(listElement);
        linkCount++;
      } else {
        const listElement = (
          <li className="navigation-links" key={link.linkName}>
            <Link to={link.linkRoute}> {link.linkName}</Link>
          </li>
        );
        linkArr.push(listElement);
        linkCount++;
      }
    });

    return linkArr;
  };

  return (
    <header className="App-header">
      <div className="header-left">
        <div className="genshin-logo">
          <img src={genshinLogo} alt="" />
        </div>
        <ul className="navigation">{renderLinks()}</ul>
      </div>

      <div className="logindownload">
        <div className="login-link">
          <p>log in</p>
          <img src={loginIcon} alt="" />
        </div>
        <div className="download-link"></div>
        <img src={downloadButton} alt=""></img>
      </div>
    </header>
  );
};

export default HeaderComponent;
