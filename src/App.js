import "./App.css";
import ReactDOM from "react-dom";
import fakeData from "./fakeData.json";
import { useState } from "react";

// Task:-Search Filter

function App() {
  console.log(fakeData);
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      {fakeData
        .filter((val) => {
          if (searchItem === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchItem.toLowerCase())
          ) {
            return val;
          } 
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              <h3>{val.name}</h3>
            </div>
          );
        })}
    </div>
  );
}



// Rendering an Element into the DOM

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function App() {
//   const element = "Rendering an Element into the DOM"
//   root.render(element);

//   return <div id="root1"></div>;
// }



// // Updating the Rendered Element


// function tick() {
//   const element = (
//     <div>
//       <h1>Updating the Rendered Element</h1>
//       {/* to convert time into string */}
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>      
//     </div>
//   );
//   root.render(element);
// }

// setTimeout(tick, 1000); 

// The setInterval() method, offered on the Window and Worker interfaces, 
// repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.


















export default App;
