import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSuccessStories = createAsyncThunk(
  "success_stories/getSuccessStories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/success_stories");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
