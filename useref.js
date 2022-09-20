import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
   const name=useRef();
  const[set,newset]=useState();
  const Handle=(e)=>{
    name.current.value;
    console.log( name.current)
  }
  return (
    <div className="App">
      <input type="text" ref={name} />
      <button onClick={Handle}> click</button>
    </div>
  );
}
