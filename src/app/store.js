import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import foodsReducer from "../features/cartFoodsSlice";
import cartFoodsReducer from "../features/realCartFoodsSlice";

export const store = configureStore({
  reducer: {
    display: modalReducer,
    foods: foodsReducer,
    cartFoods: cartFoodsReducer,
  },
});
