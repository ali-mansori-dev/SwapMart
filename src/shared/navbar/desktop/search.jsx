
// import SearchResult from "./search_result";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";

const Search = ({ onOpen, openCity, searchText }) => {
  return (
    <div className="w-[400px] relative">
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        defaultValue={searchText}
        placeholder="Search in SwapMart"
        sx={{
          "& fieldset": { border: "none" },
          border: "1px solid #D1D5DB",
          bgcolor: "#F3F4F6",
          borderRadius: "8px",
          fontSize: 10,
          borderColor: "#E5E7EB",
          fontStyle: "normal",
        }}
        onFocus={onOpen}
        autoComplete="off"
        InputProps={{
          endAdornment: (
            <div className="flex flex-row  items-center">
              <div className="h-[20px] w-1 border-r border-gray-300"></div>
              <Button
                size="small"
                variant="textonly"
                className="w-max pl-0 pr-4 gap-1"
                // rightIcon={<MapPinIcon size={12} />}
                onClick={openCity}
              >
                city
              </Button>
            </div>
          ),
        }}
      />
      {/* {open && (
        <SearchResult searchMutation={searchMutation} onClose={onClose} />
      )} */}
    </div>
  );
};
Search.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  openCity: PropTypes.func,
  searchText: PropTypes.string,
};
export default Search;
