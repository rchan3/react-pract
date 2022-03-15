import React from "react";
import "./styles.css";

const HomeMainComponent = (props) => {
  return (
    <div className="home">
      <div className="home-main-flex">
        <div className="home-main-video-link">
          <img src={require("./home-main-video-border.png")} alt="" />
        </div>
        <div className="home-main-download-text">
          Released on Multiple Platforms - Download Now!
        </div>
        <div className="home-main-download-buttons">
          <a
            href="https://www.playstation.com/games/genshin-impact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./caf1de876b2d79715604463df4187b2f_4939885485338929477.png")}
              alt=""
            />
          </a>
          <a
            href="https://apps.apple.com/app/id1517783697"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./6ff53bc5d797e9efc2ac7b2b602c267a_8295237617862628623.png")}
              alt=""
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./396b8eb0d0d2f27aadb476e0b62d0926_8878641138830187947.png")}
              alt=""
            />
          </a>
          <a
            href="https://sg-public-api.hoyoverse.com/event/download_porter/link/ys_global/genshinimpactpc/default"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./a27edf5aa048e9509f0850856ad3f403_396608336029707725.png")}
              alt=""
            />
          </a>
        </div>
        <div className="home-main-down-arrow">
          <img
            className="main-down-arrow mda1"
            src={require("./home-main-arrow.png")}
            alt=""
          />
          <img
            className="main-down-arrow mda2"
            src={require("./home-main-arrow.png")}
            alt=""
          />
          <img
            className="main-down-arrow mda3"
            src={require("./home-main-arrow.png")}
            alt=""
          />
        </div>
      </div>
      <img
        className="esrb-rating"
        src={require("./2020092514130499814.png")}
        alt=""
      />
    </div>
  );
};

export default HomeMainComponent;
