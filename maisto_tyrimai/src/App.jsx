
import './App.css'
import Product from './components/Product'

const myData=

  {
    category: "Vaisiai",
    products: [
      "Obuolys",
      "Persikas",
      "Bananas",
      "Kivis",
      "Mangas",
      "Ananasas"
    ]
  };
console.log(myData);
function App() {


  return (
    <>
<Product myData={{products}} key={category} />
    </>
  )
}

export default App
