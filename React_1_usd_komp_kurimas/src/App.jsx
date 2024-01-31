import "./App.css";
import Header from "./components/Heading.jsx";
import Cards from "./components/Cards.jsx";

function App() {
  return (
    <div className="box">
      <div>
        <Header />
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
