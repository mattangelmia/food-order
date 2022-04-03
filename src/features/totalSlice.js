import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
});

export default totalSlice.reducer;
