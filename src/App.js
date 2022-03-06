import "./App.css";
import Header from "./components/header/Header";

const headerHeight = 7;

const App = () => {
  return (
    <div className="App">
      <Header height={headerHeight} />
      <main className="main">
        <div>asd</div>
      </main>
      <footer>asdasd</footer>
    </div>
  );
};

export default App;
