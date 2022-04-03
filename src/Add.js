import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFood } from "./features/realCartFoodsSlice";

export default function Add(props) {
  const cartFoods = useSelector((state) => state.cartFoods);
  console.log(cartFoods);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => props.addFood(props.food)}>ADD</button>
    </div>
  );
}
