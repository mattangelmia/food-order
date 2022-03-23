import React from "react";
import "animate.css";
import { CSSTransition } from "react-transition-group";

export default function CartModal(props) {
  return (
    <div
      style={{
        background: "#000000a6",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        overflow: "scroll",
        display: props.display,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          minHeight: "60vh",
          minWidth: "75vw",
          borderRadius: "10px",
        }}
        className="cart-modal"
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <h3 onClick={props.closeModal}>x</h3>
        </div>
        <h4 style={{ textAlign: "center" }}>Your Cart</h4>

        {props.cartFoods.length === 0 ? (
          <h1>There are no Items in your cart</h1>
        ) : (
          props.cartFoods.map((food, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "2px solid lightgray",
              }}
              key={index}
            >
              <div style={{ width: "10vh" }}>
                <h3>{food.food}</h3>
                <p>{food.price}</p>
              </div>
              <div style={{ display: "flex" }}>
                <button style={{ margin: "10px", maxHeight: "20px" }}>-</button>
                <button style={{ margin: "10px", maxHeight: "20px" }}>+</button>
              </div>
            </div>
          ))
        )}
        <h2>Price: ${props.totalPrice}</h2>
      </div>
    </div>
  );
}
