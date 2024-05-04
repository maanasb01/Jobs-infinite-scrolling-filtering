import { configureStore } from '@reduxjs/toolkit';
import jobCardsReducer from '../features/jobCards/jobCardsSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    jobCards: jobCardsReducer,
    filters:filtersReducer
  },
})