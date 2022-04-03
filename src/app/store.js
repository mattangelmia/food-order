import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import foodsReducer from "../features/cartFoodsSlice";
import totalReducer from "../features/totalSlice";
import cartFoodsReducer from "../features/realCartFoodsSlice";

export const store = configureStore({
  reducer: {
    display: modalReducer,
    foods: foodsReducer,
    total: totalReducer,
    cartFoods: cartFoodsReducer,
  },
});
