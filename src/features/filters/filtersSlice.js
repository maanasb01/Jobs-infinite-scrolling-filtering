import { createSlice } from "@reduxjs/toolkit";
import selectFiltersConfig from "../../config/selectFiltersConfig";

/**
 * State Structure:
 * State:{
 *   searchFilters:{
 *     companyName:"";
 * },
 *   selectFilters:{
 *     filterName:{
 *       options:[]; // Select Options
 *       selectedValues:[]; // Selected Options, it can be a single option too in case of single-filter
 *     }
 * }
 *
 * }
 */

// Options and SelectedValues are arrays of Objects, each object of form {value:"value",label:"label"} as for select component, react-select is used.
const initialState = {
  searchFilters: {
    companyName: "",
  },
  selectFilters: {},
};

// Add all the FilterValues from the config file for all the filters. For all Select filters
selectFiltersConfig.forEach((filter) => {
  let options = filter.options ? filter.options : []; // For the Remote/On-Site Select filter
  initialState.selectFilters[filter.filterName] = {
    options,
    selectedValues: [],
  };
});

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectFilterOptions(state, action) {
      const { filterName, newOptions } = action.payload;
      state.selectFilters[filterName].options = newOptions;
    },
    setSelectFilterValues(state, action) {
      const { filterName, newValues } = action.payload;
      state.selectFilters[filterName].selectedValues = newValues;
    },
    setSearchFilterValue(state, action) {
      state.searchFilters["companyName"] = action.payload;
    },
  },
});

export const {
  setSelectFilterOptions,
  setSelectFilterValues,
  setSearchFilterValue,
} = filtersSlice.actions;
export default filtersSlice.reducer;
