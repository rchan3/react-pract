import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeMain from "./components/home-main/Home-main";
import HomeNews from "./components/home-news/Home-news";
import HomeRegion from "./components/home-region/Home-region";

const headerHeight = 7;

const App = (props) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="characters" element={<Characters />} />
        <Route path="hoyolab" element={<Hoyolab />} />
        <Route path="top-up" element={<TopUp />} />
        <Route path="redeem-code" element={<RedeemCode />} />
      </Routes>
    </div>
  );
};

const Home = (props) => {
  return (
    <div id="home">
      <Header height={headerHeight} />
      <main className="main">
        <HomeMain />
        <HomeNews />
        <HomeRegion />
      </main>
      <Footer />
    </div>
  );
};

const News = (props) => {
  return (
    <div id="news">
      <Header height={headerHeight} />
      <h1>news page</h1>
      <Footer />
    </div>
  );
};

const Characters = (props) => {
  return (
    <div id="characters">
      <Header height={headerHeight} />
      <h1>char page</h1>
      <Footer />
    </div>
  );
};

const Hoyolab = (props) => {
  return (
    <div id="hoyolab">
      <Header height={headerHeight} />
      <h1>hoyo page</h1>
      <Footer />
    </div>
  );
};

const TopUp = (props) => {
  return (
    <div id="top-up">
      <Header height={headerHeight} />
      <h1>topup page</h1>
      <Footer />
    </div>
  );
};

const RedeemCode = (props) => {
  return (
    <div id="redeem-code">
      <Header height={headerHeight} />
      <h1>redeemcode page</h1>
      <Footer />
    </div>
  );
};

export default App;
