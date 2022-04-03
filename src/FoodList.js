import React from "react";
import Add from "./Add";
import { useSelector, useDispatch } from "react-redux";

export default function FoodList(props) {
  const foodList = useSelector((state) => state.foods.foods);
  console.log(foodList);
  return (
    <div
      style={{ border: "1px solid lightgrey", margin: "70px", width: "60vh" }}
    >
      {foodList.map((food, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid lightgray",
          }}
          key={index}
        >
          <div style={{ width: "100vh" }}>
            <h1>{food.food}</h1>
            <p>{food.description}</p>
            <h4>{food.price}</h4>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", margin: "20px" }}>
              <h3>Amount</h3>
              <input
                type="number"
                min="1"
                max="5s"
                onChange={(e) => props.setAmount(e)}
                style={{
                  height: "15px",
                  width: "30px",
                  position: "relative",
                  top: "2vh",
                }}
              ></input>
            </div>
            <Add addFood={(e) => props.addFood(e)} food={food} />
          </div>
        </div>
      ))}
    </div>
  );
}
