const selectFiltersConfig = [
  { filterName: "minExp", Placeholder: "Min Experience",filterType:"single" },
  { filterName: "location", Placeholder: "Location",filterType:"multi" },
  {
    filterName: "remoteOnsite",
    Placeholder: "Remote/Onsite",
    filterType:"multi",
    options: [
      { value: "remote", label: "Remote" },
      { value: "onsite", label: "On-Site" },
    ],
  },
  { filterName: "role", Placeholder: "Role",filterType:"multi" },
  { filterName: "minBasePay", Placeholder: "Min Base Pay",filterType:"single" },
];

// Map to map the jobs props to the filters Name
export const jobPropstoFilterNameMap={

    "role":"jobRole",
    "location":"location",
    "minExp":"minExp",
    "minBasePay":"minJdSalary"
}

export default selectFiltersConfig;
