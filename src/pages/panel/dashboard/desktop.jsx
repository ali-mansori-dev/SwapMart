import React from "react";
import PropTypes from "prop-types";

import SideBar from "../side_bar";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";

const DashboardDesktop = ({ user_info }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-row gap-4">
        <SideBar />
        <div className="border flex flex-col gap-4 w-3/4 border-gray-300 rounded-md p-4">
          <img
            src={user_info?.user_metadata?.avatar_url}
            onError={(e) =>
              (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/person-circle-outline.svg
              `)
            }
            className="w-14 h-w-14 rounded-full"
            alt="avatar_pictures"
          />
          <div>{user_info?.user_metadata?.full_name}</div>
          <div>{user_info?.phone || user_info?.email}</div>
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};
DashboardDesktop.propTypes = { user_info: PropTypes.any };
export default DashboardDesktop;
