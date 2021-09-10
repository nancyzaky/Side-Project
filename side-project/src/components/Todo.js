import React, { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import Item from "./Item.js";
import Modal from "./Modal";

const Todo = ({ todo }) => {
  const [modal, setModal] = useState(false);
  const addButton = () => {
    console.log("clicked");
    setModal(!modal);
    console.log(modal);
  };
  return (
    <div className="Todo_main">
      <div>
        <h2>All Tasks</h2>
      </div>
      {modal && <Modal />}
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
