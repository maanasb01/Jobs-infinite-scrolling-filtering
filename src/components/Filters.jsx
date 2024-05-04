import Select from "react-select";
import selectFiltersConfig, {
  jobPropstoFilterNameMap,
} from "../config/selectFiltersConfig";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setSearchFilterValue,
  setSelectFilterOptions,
  setSelectFilterValues,
} from "../features/filters/filtersSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const selectFilters = useSelector((state) => state.filters.selectFilters);
  const searchFilters = useSelector((state) => state.filters.searchFilters);
  const jobCards = useSelector((state) => state.jobCards.jobCards);

  useEffect(() => {
    if (jobCards.length === 0) return;

    // Iterate through all filters
    for (let filter in selectFilters) {
      if (filter === "remoteOnsite") {
        continue;
      }

      let newFilterOptions = [];
      let uniqueOptionsMap = {};

      for (let job of jobCards) {
        // Job Property corresponding to filter name
        const jobProperty = jobPropstoFilterNameMap[filter];
        // For location property, not including "remote" value because there is another filter for it.
        if (
          (filter === "location" && job[jobProperty] === "remote") ||
          job[jobProperty] === null
        ) {
          continue;
        } else {
          const value = job[jobProperty];
          if (!uniqueOptionsMap[value]) {
            uniqueOptionsMap[value] = true;
            newFilterOptions.push({
              value,
              label: filter === "minBasePay" ? `$${value}k` : value,
            });
          }
        }
      }

      // Sort the newFilterOptions based on the value property
      newFilterOptions.sort((a, b) => {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
      });
      //Updating the filter Options as the new job cards load
      dispatch(
        setSelectFilterOptions({
          filterName: filter,
          newOptions: newFilterOptions,
        })
      );
    }
  }, [jobCards]);

  useEffect(() => {
    // If only remote option is selected in Remote/Onsite filter, then remove all the options of location filter.
    if (isOnlyRemoteSelected()) {
      dispatch(
        setSelectFilterValues({ filterName: "location", newValues: [] })
      );
    }
  }, [selectFilters["remoteOnsite"]]);

  function isOnlyRemoteSelected() {
    const selectedValues = selectFilters["remoteOnsite"]?.selectedValues;
    return (
      selectedValues?.length === 1 && selectedValues[0]?.value === "remote"
    );
  }

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {selectFiltersConfig.map((filter) => {
          let isDisabled = false;
          // If only remote option is selected in Remote/Onsite filter, then disable the location filter.
          if (filter.filterName === "location") {
            isDisabled = isOnlyRemoteSelected();
          }

          return (
            <Box sx={{ minWidth: "10rem" }} key={filter.filterName}>
              <Select
                isMulti={filter.filterType === "multi"}
                isDisabled={isDisabled}
                placeholder={filter.Placeholder}
                className="basic-multi-select"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                name={filter.filterName}
                options={selectFilters[filter.filterName].options}
                value={selectFilters[filter.filterName].selectedValues}
                onChange={(selectedOptions) => {
                  dispatch(
                    setSelectFilterValues({
                      filterName: filter.filterName,
                      newValues: selectedOptions,
                    })
                  );
                }}
              />
            </Box>
          );
        })}
        {/* For Company Search */}
        <Input
          variant="outlined"
          size="sm"
          placeholder="Search Company Name"
          sx={{
            "--Input-focusedThickness": "0px",
          }}
          value={searchFilters.companyName}
          onChange={(newVal) =>
            dispatch(setSearchFilterValue(newVal.target.value))
          }
        />
      </Box>
    </>
  );
}
