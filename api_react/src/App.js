import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState("");
  const fetchApi = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((data) => {
        setString(data.value);
      });
  };
  useEffect(() => {
    fetchApi()
  }, []);

console.log("render", string)
  return (
    <div className="App">
      <p className="text">{string}</p>
      <button type="button" className="update" onClick={() => fetchApi()}>
        update
      </button>
    </div>
  );
}

export default App;
