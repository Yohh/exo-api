import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  let [string, setString] = useState();
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((data) => {
        string = data.value;
      });
  });

  return (
    <div className="App">
      <p className="text">{string}</p>
      <button type="button" className="update" onClick={() => setString(string)}>
        update
      </button>
    </div>
  );
}

export default App;
