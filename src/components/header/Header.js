import React from "react";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../../constants";
import Dropdown from "./Dropdown";
import downloadButton from "./assets/download.png";
import genshinLogo from "./assets/genshin_logo.png";
import loginIcon from "./assets/login_icon.png";
import "./styles.css";

const HeaderComponent = (props) => {
  const renderLinks = () => {
    const linkArr = [];
    headerLinks.forEach((link) => {
      if (link.isDropdown === true) {
        const listElement = (
          <Dropdown
            active={link.linkRoute === useLocation().pathname ? true : false}
            linkInfo={link}
            key={link.linkName}
          />
        );
        linkArr.push(listElement);
      } else {
        const listElement = (
          <li
            className={`navigation-links ${
              link.linkRoute === useLocation().pathname ? "active-page" : ""
            }`}
            key={link.linkName}
          >
            <Link to={link.linkRoute}> {link.linkName}</Link>
          </li>
        );
        linkArr.push(listElement);
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
