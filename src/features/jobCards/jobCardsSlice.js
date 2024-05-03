import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // List of Job Cards which are to be fetched.
  jobCards:[],
  loading:false,
  error:null,
}

export const jobCardsSlice = createSlice({
  name: 'jobCards',
  initialState,
  reducers: {},
})

export default jobCardsSlice.reducer;