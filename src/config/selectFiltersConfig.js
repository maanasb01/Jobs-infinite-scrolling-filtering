const selectFiltersConfig = [
  { filterName: "minExp", Placeholder: "Min Experience" },
  { filterName: "location", Placeholder: "Location" },
  {
    filterName: "remoteOnsite",
    Placeholder: "Remote/Onsite",
    options: [
      { value: "remote", Placeholder: "Remote" },
      { value: "onsite", Placeholder: "On-Site" },
    ],
  },
  { filterName: "role", Placeholder: "Role" },
  { filterName: "minBasePay", Placeholder: "Min Base Pay" },
];

export default selectFiltersConfig;
