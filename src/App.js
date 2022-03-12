import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeRegion from "./components/home-region/Home-region";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
      <Header height={headerHeight} />
      <main className="main">
        <div className="home"></div>
        <div className="news">
          <h3>news</h3>
          <div className="news-main"></div>
        </div>
        <HomeRegion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
