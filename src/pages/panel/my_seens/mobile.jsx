import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import SingleLayoutMobile from "../../../layouts/mobile/single_layout";
import My_post_card from "./note_post_card";

const MySeenMobile = ({ data, isLoading }) => {
  return (
    <SingleLayoutMobile title="My Seens">
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          data?.map((item, index) => (
            <My_post_card key={index} {...item.sw_posts} />
          ))
        )}
      </div>
    </SingleLayoutMobile>
  );
};
MySeenMobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MySeenMobile;
