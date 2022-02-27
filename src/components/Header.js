import { useState } from "react";
import "../App.css";

const HeaderComponent = () => {
  const [loginColor, setLoginColor] = useState("pink");

  const onLoginClick = () => {
    setLoginColor("green");
  };

  return (
    <header className="App-header">
      <div className="genshin-logo" onClick={() => console.log("hi")}>
        genshin logo
      </div>
      <ul className="navigation">
        <li>home</li>
        <li>news</li>
        <li>characters</li>
        <li>explore</li>
      </ul>
      <div className="logindownload">
        <div onClick={onLoginClick} style={{ color: loginColor }}>
          log in
        </div>
        <div>download</div>
      </div>
    </header>
  );
};

export default HeaderComponent;
