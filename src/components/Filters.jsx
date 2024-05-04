import Select from "react-select";
import selectFiltersConfig from "../config/selectFiltersConfig";
import { Box } from "@mui/material";

export default function Filters() {
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",gap:"0.5rem"}}>
        {selectFiltersConfig.map((filter) => {
          return (
            <Box sx={{minWidth:"10rem"}}>
                <Select
                  isMulti
                  placeholder={filter.Placeholder}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isSearchable={true}
                  name={filter.filterName}
                />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
