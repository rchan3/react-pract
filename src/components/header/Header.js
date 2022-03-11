import { useState } from "react";
import { headerLinks } from "../../constants";
import downloadButton from "./download.png";
import "./styles.css";

const HeaderComponent = (props) => {
  const [loginColor, setLoginColor] = useState("pink");

  const loginStyles = { color: loginColor };

  const onLoginClick = () => {
    setLoginColor("green");
  };

  const renderLinks = () => {
    const linkArr = [];
    headerLinks.forEach((link) => {
      const listElement = <li className="navigation-links">{link}</li>;
      linkArr.push(listElement);
    });

    return linkArr;
  };

  return (
    <header className="App-header">
      <div className="genshin-logo" onClick={() => console.log("hi")}>
        genshin logo
      </div>
      <ul className="navigation">{renderLinks()}</ul>
      <div className="logindownload">
        <div onClick={onLoginClick} style={loginStyles}>
          log in
        </div>
        <div className="download-link"></div>
        <img src={downloadButton} alt=""></img>
      </div>
    </header>
  );
};

export default HeaderComponent;
