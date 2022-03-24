import React from "react";
import $ from "jquery";

import videoBorder from "./assets/home-main-video-border.png";
import playstationLink from "./assets/ps-link.png";
import iosLink from "./assets/ios-link.png";
import androidLink from "./assets/android-link.png";
import pcLink from "./assets/pc-link.png";
import videoButton from "./assets/main-video-button.png";
import videoButtonHover from "./assets/main-video-hover-button.png";
import "./styles.css";

const HomeMainComponent = (props) => {
  $(document).on("scroll", function() {
    if ($(this).scrollTop() < 500) {
      $(".socials-sidebar").css("opacity", "0");
    } else {
      $(".socials-sidebar").css("opacity", "1");
    }
  });

  return (
    <div className="home">
      <div className="socials-sidebar">
        <div className="open-close"></div>
        <div sidebar-contents>
          <p>Follow us</p>
          <ul>
            <li>
              <span className="icon-fb"></span>Facebook
            </li>
            <li>
              <span className="icon-twt"></span>Twitter
            </li>
            <li>
              <span className="icon-yt"></span>Youtube
            </li>
            <li>
              <span className="icon-ig"></span>Instagram
            </li>
            <li>
              <span className="icon-discord"></span>Discord
            </li>
            <li>
              <span className="icon-reddit"></span>Reddit
            </li>
            <li>
              <span className="icon-hoyo"></span>HoYoLAB
            </li>
          </ul>
        </div>
      </div>
      <div className="home-main-flex">
        <div className="home-main-video-link">
          <img src={videoBorder} alt="" />

          <img
            className="video-button v-button-inactive"
            src={videoButton}
            alt=""
          />

          <img
            className="video-button v-button-active"
            src={videoButtonHover}
            alt=""
          />
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
            <img src={playstationLink} alt="" />
          </a>
          <a
            href="https://apps.apple.com/app/id1517783697"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iosLink} alt="" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={androidLink} alt="" />
          </a>
          <a
            href="https://sg-public-api.hoyoverse.com/event/download_porter/link/ys_global/genshinimpactpc/default"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pcLink} alt="" />
          </a>
        </div>
        <div className="home-main-down-arrow">
          <img
            className="main-down-arrow mda1"
            src={require("./assets/home-main-arrow.png")}
            alt=""
          />
          <img
            className="main-down-arrow mda2"
            src={require("./assets/home-main-arrow.png")}
            alt=""
          />
          <img
            className="main-down-arrow mda3"
            src={require("./assets/home-main-arrow.png")}
            alt=""
          />
        </div>
      </div>
      <img
        className="esrb-rating"
        src={require("./assets/2020092514130499814.png")}
        alt=""
      />
    </div>
  );
};

export default HomeMainComponent;
