import React from "react";
import { FcCheckmark } from "react-icons/fc";
const Item = ({ text }) => {
  return (
    <li style={{ textAlign: "start", display: "inline", padding: "1rem" }}>
      <div className="todo_item">
        <h5 style={{ color: "black", paddingTop: "1rem" }}>{text}</h5>
        <FcCheckmark />
      </div>
    </li>
  );
};

export default Item;
