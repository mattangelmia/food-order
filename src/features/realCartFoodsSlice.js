import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartFoods: [],
  costTotal: 0,
  itemAmount: 0,
};

export const cartFoodsSlice = createSlice({
  name: "CartFoods",
  initialState,
  reducers: {
    addFood: (state, action, value) => {
      state.cartFoods.push(action.payload);
    },
  },
});

export default cartFoodsSlice.reducer;
export const { addFood } = cartFoodsSlice.actions;
