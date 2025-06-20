import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanners = createAsyncThunk(
  "banners/getBanners",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/banners");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
