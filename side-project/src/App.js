import "./App.css";
import React, { useState, useEffect } from "react";
import HeaderBar from "./components/HeaderBar";
import Todo from "./components/Todo";

function App() {
  const [todo, setToDo] = useState([]);
  const fetchUrl = () => {
    fetch("http://localhost:3000/to_do")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setToDo(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div>
      <HeaderBar />
      <Todo todo={todo} />
    </div>
  );
}

export default App;
