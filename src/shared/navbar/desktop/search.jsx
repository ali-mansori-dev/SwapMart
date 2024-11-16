import SearchResult from "./search_result";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { open_search_result } from "../../../features/layout/layoutSlice";
import Supabase from "../../../lib/helper/ClientSupabase";
import { useEffect, useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const openResultHandle = () => {
    dispatch(open_search_result());
  };
  useEffect(() => {
    (async function () {
      const { data: result_data } = await Supabase.rpc("search_categories", {
        search_term: text,
      });
      setData(result_data);
    })();
  }, [text]);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-[400px] relative">
      <TextField
        variant="outlined"
        fullWidth
        size="small"
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
        onFocus={openResultHandle}
        onChange={onChangeText}
        autoComplete="off"
        InputProps={{
          endAdornment: (
            <div className="flex flex-row  items-center">
              <div className="h-[20px] w-1 border-r border-gray-300"></div>
              <Button
                size="small"
                variant="textonly"
                className="w-max pl-0 pr-4 gap-1"
              >
                city
              </Button>
            </div>
          ),
        }}
      />
      <SearchResult data={data} />
    </div>
  );
};
export default Search;
