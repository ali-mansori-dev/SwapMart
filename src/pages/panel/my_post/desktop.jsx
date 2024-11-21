import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import My_post_card from "./my_post_card";
import SideBar from "../sidebar/desktop";

const MyPostDesktop = ({ data, isLoading }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-row gap-4">
        <SideBar />
        <div className="border flex flex-col gap-4 w-3/4 border-gray-300 rounded-md p-4">
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            data?.map((item, index) => <My_post_card key={index} {...item} />)
          )}
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};
MyPostDesktop.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default MyPostDesktop;
