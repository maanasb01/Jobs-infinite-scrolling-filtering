import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchJobCards from '../../api/fetchJobCards';

const initialState = {
  // List of Job Cards which are to be fetched.
  jobCards:[],
  loading:false,
  error:null,
}

export const fetchJobCardsAsync = createAsyncThunk(
  'jobCards/fetchJobCards',
  async () => {
    try {
      const response = await fetchJobCards(); // API call to fetch job cards
      return response.jdList;
    } catch (error) {
      throw error; 
    }
  }
);

export const jobCardsSlice = createSlice({
  name: 'jobCards',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchJobCardsAsync.pending,(state)=>{
      state.loading = true;
    })
    .addCase(fetchJobCardsAsync.fulfilled,(state,action)=>{
      state.loading = false;
      state.jobCards = action.payload;
    })
    .addCase(fetchJobCardsAsync.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message;
    })
  }
})

export default jobCardsSlice.reducer;