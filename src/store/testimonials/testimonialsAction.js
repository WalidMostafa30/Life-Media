import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimonials = createAsyncThunk(
  "testimonials/getTestimonials",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/testimonials");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
