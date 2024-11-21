import React from "react";
import PropTypes from "prop-types";

import SingleLayoutMobile from "../../../layouts/mobile/single_layout";
import SideBar from "../sidebar/mobile";

const DashboardMobile = ({ user_info }) => {
  return (
    <SingleLayoutMobile title="MyPanel">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full border flex flex-col items-start gap-3 border-gray-300 rounded-md p-4 bg-gray-800 text-white">
          <img
            src={user_info?.user_metadata?.avatar_url}
            onError={(e) =>
              (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/person-circle-outline.svg
          `)
            }
            className="w-12 h-w-12 rounded-full"
            alt="avatar_pictures"
          />
          <div className="flex flex-col">
            <span className="text-base w-full">
              {user_info?.user_metadata?.full_name}
            </span>
            <span className="text-xs w-full line-clamp-1">
              {user_info?.phone || user_info?.email}
            </span>
          </div>
        </div>
        <SideBar />
      </div>
    </SingleLayoutMobile>
  );
};
DashboardMobile.propTypes = { user_info: PropTypes.any };
export default DashboardMobile;
