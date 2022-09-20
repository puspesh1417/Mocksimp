import { useRef, useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const Ref = useRef(null);
  const [set, newset] = useState();
  const Change = () => {
    Ref.current.value = "10000";
  };
  return (
    <div className="App">
      <Child ref={Ref} />
      <button onClick={Change}>click</button>
    </div>
  );
}
