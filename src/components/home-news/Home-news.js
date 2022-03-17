import React, { Component } from "react";
import "./styles.css";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/pagination/pagination.min.css"; // Pagination module

const pagination = {
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}"></span>`;
  },
};

class HomeNews extends Component {
  constructor(props) {
    super(props);
    this.state = { newsImagePath: [] };
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      this.setState({ newsImagePath: this.props.newsImagePath });
      this.newsCarousel();
    }
  }

  newsCarousel = () => {
    console.log("newscarousel", this.props);
    const carousel = [];
    if (this.state.newsImagePath.length > 0) {
      this.props.newsImagePath.forEach((element) => {
        console.log(element.srcURL);

        carousel.push(
          <SwiperSlide key={element.srcURL}>
            <img src={require(`${element.srcURL}`)} alt={element.srcAlt} />
          </SwiperSlide>
        );
      });
    }

    return carousel;
  };

  render() {
    return (
      <div className="news">
        <h3>news</h3>
        <div className="news-main">
          <div className="news-links"></div>
        </div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {this.newsCarousel()}
        </Swiper>
      </div>
    );
  }
}

export default HomeNews;
