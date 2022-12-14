import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.log(name, interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle Form in React With Select tag</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />

        {/* select Tag */}

        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

