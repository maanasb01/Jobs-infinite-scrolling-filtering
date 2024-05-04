import { createSlice } from "@reduxjs/toolkit";
import selectFiltersConfig from "../../config/selectFiltersConfig";

const initialState = {
  filterValues: {
    companyName: "",
  },
};

// Add all the FilterValues from the config file for all the filters. For all Select filters
selectFiltersConfig.forEach((filter) => {
  initialState.filterValues[filter.filterName] = [];
});

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export const { setFilter, updateFilterOptions } = filtersSlice.actions;
export default filtersSlice.reducer;
