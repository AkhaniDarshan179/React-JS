import "./App.css";
import React, { useState } from "react";
function App() {
  let [val, setVal] = useState("000");      //default value 000
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val}  onChange={(e) => setVal(e.target.value)} />         

      <h3>value {val}</h3>
    </div>
  );
}

export default App;
