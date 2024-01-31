/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Pizzas from "./components/Pizzas";

function App() {
  console.log();
  return (
    <div className="mainContainer">
      <h1>-------FAST REACT PIZZA CO-------</h1>
      <h2 className="menuText">OUR MENU</h2>
      <div className="pizzasList">
        <Pizzas />
      </div>
      <div>
        {!(new Date().getHours() < 12 
       // && new Date().getHours() > 22
        )
          ? `we're open from 12:00 until 22:00. Come visit us or order online.`
          : `we are close! We will wait for you tomorrow! from 12:00 until 22:00`}
      </div>
      {/* <div className='orderBtn'> */}
      <div
        className={`'orderBtn' ${
          new Date().getHours() < 12 
          //&& new Date().getHours() > 22
            ? "notWorking"
            : null
        }`}
      >
        ORDER NOW!
      </div>
      <div className="yellowBlock"></div>
    </div>
  );
}

export default App;
