import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const citiesByCountrys = {
    France: ["Paris", "Marseille", "Lyon"],
    Germany: ["Berlin", "Hamburg", "Munich"],
    Italy: ["Rome", "Milan", "Naples"],
    Spain: ["Madrid", "Barcelona", "Valencia"],
    Portugal: ["Lisbon", "Porto", "Vila Nova de Gaia"],
    Netherlands: ["Amsterdam", "Rotterdam", "The Hague"],
    Belgium: ["Brussels", "Antwerp", "Ghent"],
    Switzerland: ["Zurich", "Geneva", "Basel"],
    Austria: ["Vienna", "Graz", "Linz"],
    Sweden: ["Stockholm", "Gothenburg", "Malmö"],
  };
  const [country, setCountry] = useState();

  const [city, setCity] = useState();

  const countrys = Object.keys(citiesByCountrys);

  const getCountryHandler = (e) => {
    setCountry(e.target.value);
  };
  const getCityHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <select onClick={getCountryHandler}>
        <option> ---Choose country--- </option>
        {countrys.map((c) => (
          <option key={nanoid()}>{c}</option>
        ))}
      </select>
      <select onClick={getCityHandler}>
        <option> ---Choose city--- </option>
        {/* {citiesByCountrys.filter(country).map((c) => (
          <option key={nanoid()}>{c}</option> */}
        {/* ))} */}
      </select>
    </div>
  );
}

export default App;
