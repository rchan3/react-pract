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

// const newsImagePath = [
//   {
//     srcURL: require("./32fa76e072b091a28d3aa8577453cdfd_7473354622486228234.jpg"),
//     srcAlt: "",
//   },
//   {
//     srcURL: require("./235af4e62159910421fbcffbf1cd9c2e_2611120445102707012.jpg"),
//     srcAlt: "",
//   },
//   {
//     srcURL: require("./2022021610120592184.png"),
//     srcAlt: "",
//   },
//   {
//     srcURL: require("./2022021510344490430.jpg"),
//     srcAlt: "",
//   },
// ];

// const newsCarousel = () => {
//   const carousel = [];
//   newsImagePath.forEach((element) => {
//     carousel.push(
//       <SwiperSlide key={element.srcURL}>
//         <img src={element.srcURL} alt={element.srcAlt} />
//       </SwiperSlide>
//     );
//   });
//   return carousel;
// };
// const HomeNews = (props) => {
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
        const srcURL = element.srcURL.replace(/'/g, "");
        carousel.push(
          <SwiperSlide key={element.srcURL}>
            <img src={srcURL} alt={element.srcAlt} />
          </SwiperSlide>
        );
        console.log(element.srcURL.replace(/'/g, ""));
      });
    }
    // this.props.newsImagePath.forEach((element) => {
    //   carousel.push(
    //     <SwiperSlide key={element.srcURL}>
    //       <img src={element.srcURL} alt={element.srcAlt} />
    //     </SwiperSlide>
    //   );
    //   console.log(element);
    // });
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
