import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeRegion from "./components/home-region/Home-region";
import HomeNews from "./components/home-news/Home-news";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
      <Header height={headerHeight} />
      <main className="main">
        <div className="home"></div>
        <HomeNews />
        <HomeRegion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
