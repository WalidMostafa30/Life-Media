import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const { _ } = homeSlice.actions;

export default homeSlice.reducer;
