import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Supabase from "../../lib/helper/ClientSupabase";

const SideBar = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    Supabase.auth.signOut({ scope: "local" }).then(() => {
      navigate("/");
    });
  };
  return (
    <ul className="border flex flex-col w-1/4 border-gray-200 rounded-md overflow-hidden">
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-slate-100 px-4 py-3" : "hover:bg-slate-50 px-4 py-3"
        }
        to={"/my-panel/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-slate-100 px-4 py-3" : "hover:bg-slate-50 px-4 py-3"
        }
        to={"/my-panel/my-post"}
      >
        My Post
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-slate-100 px-4 py-3" : "hover:bg-slate-50 px-4 py-3"
        }
        to={"/my-panel/notes"}
      >
        My Notes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-slate-100 px-4 py-3" : "hover:bg-slate-50 px-4 py-3"
        }
        to={"/my-panel/saved"}
      >
        My Saved
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-slate-100 px-4 py-3" : "hover:bg-slate-50 px-4 py-3"
        }
        to={"/my-panel/recent"}
      >
        Recently Viewd
      </NavLink>
      <li
        onClick={handleSignout}
        className="hover:bg-slate-50 px-4 py-3 cursor-pointer"
      >
        SignOut
      </li>
    </ul>
  );
};

export default SideBar;
