import React, {useState} from "react";
import Change from "./components/Change";


export default function App() {
  const [count, setCount] = useState(0);
  const buttonClick = () => {
    setCount((preCount) => preCount + 1)     // callback function
  }

  return <div>
    {count}
    <Change  buttonClick={buttonClick}/>
  </div>
} 

