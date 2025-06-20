import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/questions");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
