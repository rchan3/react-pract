import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeMain from "./components/home-main/Home-main";
import HomeNews from "./components/home-news/Home-news";
import HomeRegion from "./components/home-region/Home-region";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
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

export default App;
