import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSolutions = createAsyncThunk(
  "solutions/getSolutions",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/solutions");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
