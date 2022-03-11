import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
      <Header height={headerHeight} />
      <main className="main">
        <div className="home"></div>
        <div className="news">
          <h3>news</h3>
        </div>
        <div className="regions">
          <div className="region-mondstadt">mondstadt</div>
          <div className="region-liyue">liyue</div>
          <div className="region-inazuma">inazuma</div>
          <div className="region-comingsoon">coming soon</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
