import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeMain from "./components/home-main/Home-main";
import HomeNews from "./components/home-news/Home-news";
import HomeRegion from "./components/home-region/Home-region";

const headerHeight = 7;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header height={headerHeight} />
        <main className="main">
          <HomeMain />
          <HomeNews newsImagePath={this.state.apiResponse} />
          <HomeRegion />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
