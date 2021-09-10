import React from "react";

const Item = ({ text }) => {
  return (
    <li style={{ backgroundColor: "white", width: "25rem", height: "4rem" }}>
      <h3 style={{ color: "black", paddingTop: "1rem" }}>{text}</h3>
    </li>
  );
};

export default Item;
