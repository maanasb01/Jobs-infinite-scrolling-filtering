import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchJobCards from "../../api/fetchJobCards";

const initialState = {
  // List of Job Cards which are to be fetched.
  jobCards: [],
  offset: 0, // Offset to be used in fetching the data
  hasMoreJobs: false,
  loading: false,
  error: null,
};

export const fetchJobCardsAsync = createAsyncThunk(
  "jobCards/fetchJobCards",
  async (offset) => {
    try {
      const response = await fetchJobCards(offset); // API call to fetch job cards
      return response.jdList;
    } catch (error) {
      throw error;
    }
  }
);

export const jobCardsSlice = createSlice({
  name: "jobCards",
  initialState,
  reducers: {
    nextOffset: (state) => {
      state.offset += 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobCardsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobCardsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.jobCards = state.jobCards.concat(action.payload); // Append new job cards
        state.hasMoreJobs = action.payload.length > 0; //If returned array is empty, then there are no more jobs to fetch.
      })
      .addCase(fetchJobCardsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobCardsSlice.reducer;
export const { nextOffset } = jobCardsSlice.actions;
