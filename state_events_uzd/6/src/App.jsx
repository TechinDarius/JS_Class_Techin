import { useState } from "react";

import "./App.css";

function App() {
  const [img, setImg] = useState(1);
  const leftHandler = () => {
    if (!(img - 1 < 1)) {
      setImg(img - 1);
    } else {
      setImg(6);
    }
  };
  const rightHandler = () => {
    if (img + 1 > 6) {
      setImg(1);
    } else {
      setImg(img + 1);
    }
  };

  return (
    <div style={{textAlign:'center',display:"flex",flexDirection:'row'}}>
       <button onClick={leftHandler}>left</button>
      <img style={{width:'300px'}} src={`./src/assets/Pic/pizzas/${img}.jpg`} alt="Picture" />
      
       
        <button onClick={rightHandler}>right</button>
    
    </div>
  );
}

export default App;
