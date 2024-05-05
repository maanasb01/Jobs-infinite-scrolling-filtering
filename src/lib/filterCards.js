// Main Filter Function to Implement all filters
export default function filterCards(job, selectFilters, searchFilters) {
  // Filter by Company Name
  const companyNameMatch = job.companyName
    .toLowerCase()
    .includes(searchFilters.companyName.toLowerCase());

  // Filter by Select Filters
  const selectFiltersMatch = Object.keys(selectFilters).every((filterName) => {
    const filter = selectFilters[filterName];
    if (filter.selectedValues?.length === 0 || filter.selectedValues === null) {
      // No selection, so this filter doesn't affect the result
      return true;
    }

    if (filterName === "minExp") {
      const jobMinExp = job.minExp;
      if (!jobMinExp) return false;
      return jobMinExp <= filter.selectedValues.value; // as minExp is a single filter
    } else if (filterName === "location") {
      const jobLocation = job.location;
      //check the remote filter
      const remoteOnsiteVals = selectFilters[
        "remoteOnsite"
      ].selectedValues?.map((valObj) => valObj.value);
      if (
        selectFilters["remoteOnsite"].selectedValues === null ||
        remoteOnsiteVals.length === 0 ||
        (remoteOnsiteVals.length === 1 && remoteOnsiteVals[0] === "onsite")
      ) {
        const filterLocations = filter.selectedValues?.map(
          (valObj) => valObj.value
        );
        return filterLocations.includes(jobLocation);
      } else {
        return false;
      }
    } else if (filterName === "remoteOnsite") {
      const jobLocation = job.location;
      const remoteOnsiteVals = selectFilters[
        "remoteOnsite"
      ].selectedValues?.map((valObj) => valObj.value);
      // The filter is not applied or all options are applied
      if (remoteOnsiteVals.length === 0 || remoteOnsiteVals.length === 2) {
        return true;
      } else {
        if (remoteOnsiteVals[0] === "remote") return jobLocation === "remote";
        return jobLocation !== "remote"; // when only on-site is selected
      }
    } else if (filterName === "role") {
      const selectedRoles = selectFilters["role"].selectedValues.map(
        (valObj) => valObj.value
      ); // Output all the selected roles inside filter in an array
      const jobRole = job.jobRole;
      return selectedRoles.includes(jobRole);
    } else if (filterName === "minBasePay") {
      const selectedMinPay = selectFilters["minBasePay"].selectedValues?.value; // as this is a single filter
      const jobMinPay = job.minJdSalary;
      if (!jobMinPay) return false;
      return jobMinPay >= selectedMinPay;
    }
  });

  // Combine results of all filters
  return companyNameMatch && selectFiltersMatch;
}
