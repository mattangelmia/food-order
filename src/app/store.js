import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import foodsReducer from "../features/cartFoodsSlice";

export const store = configureStore({
  reducer: {
    display: modalReducer,
    foods: foodsReducer,
  },
});
