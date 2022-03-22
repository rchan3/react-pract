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
    let linkCount = 0;
    headerLinks.forEach((link) => {
      if (linkCount === 3) {
        const listElement = (
          <li className="navigation-links" key={link}>
            {link}
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
      } else {
        const listElement = (
          <li className="navigation-links" key={link}>
            {link}
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
