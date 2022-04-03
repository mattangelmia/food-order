import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartFoods: [],
};

export const cartFoodsSlice = createSlice({
  name: "CartFoods",
  initialState,
  reducers: {
    addFood: (state, payload) => {
      state.cartFoods.push(payload);
    },
  },
});

export default cartFoodsSlice.reducer;
export const { addFood } = cartFoodsSlice.actions;
