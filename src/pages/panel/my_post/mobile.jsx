import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import SingleLayoutMobile from "../../../layouts/mobile/single_layout";
import My_post_card from "./my_post_card";

const MyPostMobile = ({ data, isLoading }) => {
  return (
    <SingleLayoutMobile title="My Post">
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          data?.map((item, index) => <My_post_card key={index} {...item} />)
        )}
      </div>
    </SingleLayoutMobile>
  );
};
MyPostMobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MyPostMobile;
