import React from "react";
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

  const newsImagePath = [
    {
      srcURL: require("./32fa76e072b091a28d3aa8577453cdfd_7473354622486228234.jpg"),
      srcAlt: "",
    },
    {
      srcURL: require("./235af4e62159910421fbcffbf1cd9c2e_2611120445102707012.jpg"),
      srcAlt: "",
    },
    {
      srcURL: require("./2022021610120592184.png"),
      srcAlt: "",
    },
    {
      srcURL: require("./2022021510344490430.jpg"),
      srcAlt: "",
    },
  ];

  const newsCarousel = () => {
    const carousel = [];
    newsImagePath.forEach((element) => {
      carousel.push(
        <SwiperSlide key={element.srcURL}>
          <img src={element.srcURL} alt={element.srcAlt} />
        </SwiperSlide>
      );
    });
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
        <div className="news-links">somelinks</div>
      </div>
    </div>
  );
};

export default HomeNews;
