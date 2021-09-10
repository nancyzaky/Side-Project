import React from "react";
const Item = ({ text }) => {
  return (
    <li className="list_items" style={{}}>
      <h5 style={{ color: "black", paddingTop: "1rem" }}>{text}</h5>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default Item;
