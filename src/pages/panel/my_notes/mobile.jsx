import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import SingleLayoutMobile from "../../../layouts/mobile/single_layout";
import My_post_card from "./note_post_card";

const MyNotesMobile = ({ data, isLoading }) => {
  return (
    <SingleLayoutMobile title="My Notes">
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          data?.map((item, index) => <My_post_card key={index} post={item?.sw_posts}/>)
        )}
      </div>
    </SingleLayoutMobile>
  );
};
MyNotesMobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MyNotesMobile;
