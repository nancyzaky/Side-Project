import React, { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
const Modal = ({ addToList }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/to_do", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addToList(data);
      });
    setInput("");
  };
  return (
    <div className="modal_container">
      <article className="modal">
        <h3>Add Items To To Do List</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => {
              console.log(e.target.value);
              setInput(e.target.value);
            }}
          ></input>

          <button type="submit">
            <RiAddCircleFill />
          </button>
        </form>
      </article>
    </div>
  );
};

export default Modal;
