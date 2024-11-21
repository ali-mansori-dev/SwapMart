import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import My_post_card from "./note_post_card";

const MySeenDesktop = ({ data, isLoading }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-row gap-4">
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          data?.map((item, index) => (
            <My_post_card key={index} {...item.sw_posts} />
          ))
        )}
      </div>
    </BasicLayoutDesktop>
  );
};
MySeenDesktop.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MySeenDesktop;
