import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/projects");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
