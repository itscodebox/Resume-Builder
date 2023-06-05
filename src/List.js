import React from "react";

function List({ type, data }) {
  if (type === "bullet") {
    return (
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

export default List;
