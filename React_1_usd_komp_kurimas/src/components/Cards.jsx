import Card from "./Card";
import jsonData from "../data/data.jsx";
//console.log(jsonData);
function Cards() {
  return (
    <div>
      {jsonData.map((data) => (
        <Card myData={data} key={data.id} />
      ))}
    </div>
  );
}
export default Cards;
