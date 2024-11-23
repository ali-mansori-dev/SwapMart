import { Dialog, DialogTitle, IconButton, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import { resetAll } from "../../../../features/layout/layoutSlice";
import { useEffect, useState } from "react";
import Supabase from "../../../../lib/helper/ClientSupabase";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [data, setData] = useState({});

  const onClose = () => {
    dispatch(resetAll());
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
    <Dialog
      fullScreen={true}
      open={true}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="select-none bg-gray-100"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300 !py-4"
      >
        <TextField
          variant="standard"
          size="medium"
          placeholder="Search"
          onChange={onChangeText}
          focused
          fullWidth
        />
        <IconButton size="small" onClick={onClose}>
          X
        </IconButton>
      </DialogTitle>
      {data?.length ? (
        data?.map((value, index) => (
          <Link
            className="flex flex-col gap-2 p-4 hover:bg-gray-100 w-full border-b"
            to={`/${value.slug}`}
            onClick={onClose}
            key={index}
          >
            <span className="text-gray-800 text-sm">{value.name}</span>

          </Link>
        ))
      ) : (
        <div className="flex flex-col gap-2 p-4 hover:bg-gray-100 w-full border-b">
          No Result Found!
        </div>
      )}
    </Dialog>
  );
};

export default Index;
