import React, { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import Item from "./Item.js";

const Todo = ({ todo }) => {
  const [modal, setModal] = useState(false);
  const addButton = () => {
    setModal(!modal);
  };
  return (
    <div className="Todo_main">
      <div>
        <h2>All Tasks</h2>
      </div>
      <div className="modal"></div>
      <ul>
        {todo.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
      <span>
        <RiAddCircleFill
          style={{ marginTop: "65%" }}
          className="add_btn"
          onClick={addButton}
        />
      </span>
    </div>
  );
};

export default Todo;
