import React from "react";

export default function Add(props) {
  return (
    <div>
      <button onClick={() => props.addFood(props.food)}>ADD</button>
    </div>
  );
}
