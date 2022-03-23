import React from "react";
import Cart from "./Cart";

export default function NavHeader(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#515e75ad",
      }}
    >
      <div>
        <h1>React Meals</h1>
      </div>
      <div>
        <Cart cartQuantity={props.cartQuantity} setDisplay={props.setDisplay} />
      </div>
    </div>
  );
}
