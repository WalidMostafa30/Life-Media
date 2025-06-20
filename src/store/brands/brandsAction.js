import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/brands");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
