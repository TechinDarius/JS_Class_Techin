/* eslint-disable react/prop-types */
function Pizza({ onePizza }) {
  const { name, ingredients, photoName, price, soldOut } = onePizza;
  console.log(onePizza);
  return (
    <div className={`pizzaContainer ${soldOut && 'soldout'}`}>
      <>
        <img src={`src/assets/picture/${photoName}`} alt="pizza photo" />
      </>

      <div>
        <div className="pizzaName">{name}</div>
        <div className="ingridients">{ingredients}</div>
        {soldOut ? <div>SOLD OUT</div> : <div>{price} Eur</div>}
      </div>
    </div>
  );
}

export default Pizza;
