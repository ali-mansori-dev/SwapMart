import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import shapes from "../../assets/icon/shapes-outline.svg";
import price from "../../assets/icon/pricetag-outline.svg";
import grid from "../../assets/icon/grid-outline.svg";

const ButtonNavigation = () => {
  const { is_authed, user_info } = useSelector((redux) => redux.auth);
  const dispatch = useDispatch();

  const items = [
    { title: "All", icon: grid, link: "/" },
    { title: "Categories", icon: shapes, link: "/aaa" },
    { title: "Sell", icon: price, link: "/new" },
    {
      title: "Dashboard",
      image: (
        <img
          src={user_info?.user_metadata?.avatar_url}
          onError={(e) =>
            (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/person-circle-outline.svg`)
          }
          className="w-[18px] rounded-full border border-gray-300"
          alt="avatar_pictures"
        />
      ),
      link: "/my-panel/dashboard",
    },
  ];

  return (
    <nav className="fixed bg-white border-t border-gray-300 bottom-0 left-0 right-0 px-4">
      <ul className="w-full inline-flex items-center gap-3 justify-between">
        {items?.map((item, index) => (
          <NavLink
            key={index}
            to={item?.link}
            className={({ isActive }) =>
              `w-1/4 flex flex-col items-center gap-2 hover:bg-gray-100 py-2 ${
                isActive && "bg-gray-200"
              }`
            }
          >
            {item?.image ?? (
              <img src={item?.icon} className="w-[17px]" alt={item?.title} />
            )}

            <span className="text-xs text-gray-500 ">{item?.title}</span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default ButtonNavigation;
