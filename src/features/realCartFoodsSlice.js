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
      let total = state.cartFoods.reduce(function (a, b) {
        return a + Number(b.quantity);
      }, 0);
      state.itemAmount = total;
    },
    addNewItem: (state, action) => {
      let addedFood = action.payload;
      let filtered = state.cartFoods.filter((c) => c.food !== addedFood.food);
      state.cartFoods = filtered.concat(addedFood);
    },
    deleteItem: (state, action) => {
      let deletedFood = action.payload;
      let filtered = state.cartFoods.filter((c) => c.food !== deletedFood.food);
      state.cartFoods = filtered.concat(deletedFood);
    },
  },
});

export default cartFoodsSlice.reducer;
export const { addFood, addNewItem, deleteItem } = cartFoodsSlice.actions;
