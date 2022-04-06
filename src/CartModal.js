import React from "react";
import "animate.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem } from "./features/realCartFoodsSlice";
import { displayModal, hideModal } from "./features/modalSlice";
import { CSSTransition } from "react-transition-group";

export default function CartModal(props) {
  const display = useSelector((state) => state.display.modalDisplay);
  const cartItems = useSelector((state) => state.cartFoods.cartFoods);
  console.log(cartItems);
  let totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const dispatch = useDispatch();

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
        display: display,
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
          <h3 onClick={() => dispatch(hideModal())}>x</h3>
        </div>
        <h4 style={{ textAlign: "center" }}>Your Cart</h4>

        {cartItems.length === 0 ? (
          <h1>There are no Items in your cart</h1>
        ) : (
          cartItems.map((food, index) => (
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
                <p>Quantity: {food.quantity}</p>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => props.deleteFood(food)}
                  style={{ margin: "10px", maxHeight: "20px" }}
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      addNewItem({
                        ...food,
                        quantity: Number(food.quantity) + 1,
                      })
                    )
                  }
                  style={{ margin: "10px", maxHeight: "20px" }}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}
