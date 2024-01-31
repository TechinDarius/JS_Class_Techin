import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]=useState('#000')
const colorChangeHandler=(e)=>{
setColor(e.target.value);
// console.log(e.target);
}

  return (
    <div>
      <h1>Pick text color:</h1>
      <input type="color" value={color} onChange={colorChangeHandler}/>
      <p style={{color:color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius, reprehenderit impedit tenetur atque quo rem excepturi? Facere ratione recusandae fugiat error suscipit vitae doloremque ea! Accusamus odio est et.</p>
    </div>
  );
}

export default App


