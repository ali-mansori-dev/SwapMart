import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { openLayout } from "../../../features/layout/layoutSlice";
import Supabase from "../../../lib/helper/ClientSupabase";
import SearchResult from "./search_result";

const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const openResultHandle = () => {
    dispatch(openLayout("is_search_result_open"));
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
    <div className="w-[350px] relative">
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
      />
      <SearchResult data={data} />
    </div>
  );
};
export default Search;
