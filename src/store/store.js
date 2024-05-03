import { configureStore } from '@reduxjs/toolkit';
import jobCardsReducer from '../features/jobCards/jobCardsSlice'

export const store = configureStore({
  reducer: {
    jobCards: jobCardsReducer,
  },
})