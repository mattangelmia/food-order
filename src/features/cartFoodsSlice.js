import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  foods: [
    {
      food: "sushi roll",
      description: "fresh tuna topped with eel sauce and avocado",
      price: "14.99",
      quantity: 1,
    },

    {
      food: "pizza",
      description: "baked to a crisp with mozarrella, basil and tomato sauce",
      price: "9.99",
      quantity: 1,
    },
    {
      food: "special fried rice",
      description: "cooked with onions , shrimp , chicken",
      price: "19.99",
      quantity: 1,
    },
    {
      food: "tacos",
      description:
        "choice of either ,shrimp , chicken, or steak, topped with pico de gallo",
      price: "15.99",
      quantity: 1,
    },
  ],
};

export const cartFoodsSlice = createSlice({
  name: "cartFoods",
  initialState,
});

export default cartFoodsSlice.reducer;
