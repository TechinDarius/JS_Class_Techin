import Pizza from "./Pizza";
import pizzaData from "../data/pizza";

function Pizzas() {
    return(
        <>
        {pizzaData.map((pizza)=>
        <Pizza onePizza={pizza} key={pizza.name}/>
        )   
        }
        </>
    )
    
}
export default Pizzas;