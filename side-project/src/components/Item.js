import React from "react";
import { FcCheckmark } from "react-icons/fc";
const Item = ({ text }) => {
  return (
    <li style={{ textAlign: "start", diplay: "inline", padding: "1rem" }}>
      <div className="todo_item">
        <h5 style={{ color: "black", paddingTop: "1rem" }}>{text}</h5>
        <button></button>
      </div>
    </li>
  );
};

export default Item;
