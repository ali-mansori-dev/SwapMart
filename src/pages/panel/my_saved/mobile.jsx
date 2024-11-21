import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import SingleLayoutMobile from "../../../layouts/mobile/single_layout";
import My_post_card from "./my_post_card/index";

const MySavedMobile = ({ data, isLoading }) => {
  return (
    <SingleLayoutMobile title="My Saved">
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          data?.map((item, index) => <My_post_card key={index} {...item?.sw_posts} />)
        )}
      </div>
    </SingleLayoutMobile>
  );
};
MySavedMobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MySavedMobile;
