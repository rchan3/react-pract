import React from "react";
import { headerLinks } from "../../constants";
import downloadButton from "./assets/download.png";
import "./styles.css";

const HeaderComponent = (props) => {
  // const [loginColor, setLoginColor] = useState("pink");

  // const loginStyles = { color: loginColor };

  // const onLoginClick = () => {
  //   setLoginColor("green");
  // };

  const renderLinks = () => {
    const linkArr = [];
    headerLinks.forEach((link) => {
      const listElement = (
        <li className="navigation-links" key={link}>
          {link}
        </li>
      );
      linkArr.push(listElement);
    });

    return linkArr;
  };

  return (
    <header className="App-header">
      <div className="header-left">
        <div className="genshin-logo">
          <img src={require("./assets/genshin_logo.png")} alt="" />
        </div>
        <ul className="navigation">{renderLinks()}</ul>
      </div>

      <div className="logindownload">
        <div>log in</div>
        <div className="download-link"></div>
        <img src={downloadButton} alt=""></img>
      </div>
    </header>
  );
};

export default HeaderComponent;
