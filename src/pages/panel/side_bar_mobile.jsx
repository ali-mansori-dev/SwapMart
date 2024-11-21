import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import chevrow from "../../assets/icon/chevron-down.svg";
import Supabase from "../../lib/helper/ClientSupabase";

const SideBarMobile = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    Supabase.auth.signOut({ scope: "local" }).then(() => {
      navigate("/");
    });
  };
  const items = [
    { title: "My Post", link: "/my-panel/my-post" },
    { title: "My Notes", link: "/my-panel/notes" },
    { title: "My Saved", link: "/my-panel/saved" },
    { title: "Recently Viewd", link: "/my-panel/recent" },
  ];

  return (
    <ul className="border flex flex-col w-full lg:w-1/4 border-gray-200 rounded-md overflow-hidden bg-white">
      {items?.map((item, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-primary-0 px-4 py-3"
                : "hover:bg-slate-50 px-4 py-3"
            } flex flex-row justify-between`
          }
          to={item?.link}
        >
          <span className="">{item?.title}</span>
          <img src={chevrow} alt="" className="w-4 -rotate-90" />
        </NavLink>
      ))}
      <li
        onClick={handleSignout}
        className="hover:bg-slate-50 px-4 py-3 cursor-pointer"
      >
        SignOut
      </li>
    </ul>
  );
};

export default SideBarMobile;
