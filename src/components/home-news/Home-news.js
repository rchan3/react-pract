import React, { useState, useEffect } from "react";
import "./styles.css";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

const HomeNews = (props) => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}"></span>`;
    },
  };

  const autoplay = {
    delay: 4500,
    disableOnInteraction: false,
  };

  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/carouselimage", { method: "GET" })
      .then((res) => res.json())
      .then((jsonData) => setApiResponse(jsonData));
  };

  useEffect(() => {
    callAPI();
  }, []);

  const newsCarousel = () => {
    const carousel = [];
    if (apiResponse.length > 0) {
      apiResponse.forEach((element) => {
        carousel.push(
          <SwiperSlide key={element.srcURL}>
            <img src={require(`${element.srcURL}`)} alt={element.srcAlt} />
          </SwiperSlide>
        );
      });
    }

    return carousel;
  };

  return (
    <div className="news">
      <h3>news</h3>
      <div className="news-main">
        <Swiper
          pagination={pagination}
          autoplay={autoplay}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {newsCarousel()}
        </Swiper>
        <div className="news-links">
          <div className="newslinks-header">
            <h4>latest</h4>
          </div>
          <div className="news-list">
            <ul>
              <li>"Of Drink A-Dreaming" Gameplay Details</li>
              <li>Genshin Impact EP - A Scenery of Skylight and Serenity</li>
              <li>Genshin Impact EP - The Iridescent Waves</li>
              <li>Paimon's Sneak Peek at Version 2.5 New Events - Phase II</li>
              <li>
                Event Wish "Epitome Invocation" - Boosted Drop Rate for
                Engulfing Lightning (Polearm) and Everlasting Moonglow
                (Catalyst)!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
