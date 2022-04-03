import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayModal, hideModal } from "./features/modalSlice";

export default function Cart(props) {
  const dispatch = useDispatch();

  return (
    <div
      id="cart-header"
      style={{
        display: "flex",
        marginRight: "35px",
        border: "1px solid lightgray",
        padding: "5px",
        borderRadius: "5px",
        margin: "10px",
      }}
      className="cart-section"
      onClick={() => dispatch(displayModal())}
    >
      <div style={{ marginRight: "20px" }}>
        <h4>Your Cart</h4>
      </div>
      <div style={{ position: "relative", top: "0vh" }}>
        <h4>Quantity: {props.cartQuantity}</h4>
      </div>
    </div>
  );
}
