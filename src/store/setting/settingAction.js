import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSetting = createAsyncThunk(
  "setting/getSetting",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/app_setting");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
