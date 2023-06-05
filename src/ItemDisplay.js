import React from "react";
import "./styles.css";

function ItemDisplay({ title, data }) {
  return (
    <>
      <p className="head" style={{ height: "10px" }}>
        {title}
      </p>
      <ul>
        {data?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ItemDisplay;
