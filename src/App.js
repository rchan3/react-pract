import "./App.css";
import Header from "./components/header/Header";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
      <Header height={headerHeight} />
      <main className="main">
        <div className="home"></div>
        <div className="news"></div>
        <div className="regions">
          <div className="region-mondstadt">mondstadt</div>
          <div className="region-liyue">liyue</div>
          <div className="region-inazuma">inazuma</div>
          <div className="region-comingsoon">coming soon</div>
        </div>
      </main>
      <footer>asdasd</footer>
    </div>
  );
};

export default App;
