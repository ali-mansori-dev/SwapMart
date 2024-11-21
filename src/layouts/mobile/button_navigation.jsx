import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { open_auth_modal } from "../../features/layout/layoutSlice";
import price_icon from "../../assets/icon/pricetag-outline.svg";
import person_icon from "../../assets/icon/person-outline.svg";
import home_icon from "../../assets/icon/home-outline.svg";
import grid_icon from "../../assets/icon/grid-outline.svg";
// import cart from "../../assets/icon/cart-outline.svg";
import login_icon from "../../assets/icon/log-in.svg";

const ButtonNavigation = () => {
  const { is_authed } = useSelector((redux) => redux.auth);
  const [value, setValue] = useState("/");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  const openLoginModal = () => {
    dispatch(open_auth_modal());
  };

  const items = !is_authed
    ? [
        { title: "Home", icon: home_icon, link: "/" },
        { title: "Categories", icon: grid_icon, link: "/aaa" },
        {
          title: "Login",
          icon: login_icon,
          link: "#",
          onClick: openLoginModal,
        },
      ]
    : [
        { title: "Home", icon: home_icon, link: "/" },
        { title: "Categories", icon: grid_icon, link: "/aaa" },
        { title: "Sell", icon: price_icon, link: "/new" },
        // { title: "Cart", icon: cart, link: "/cart" },
        {
          title: "Profile",
          icon: person_icon,
          link: "/my-panel/dashboard",
        },
      ];

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, color: "black" }}
      className="!border-t border-gray-300 "
      elevation={1}
      style={{ color: "black" }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      {items?.map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={item?.title}
          value={item?.link}
          onClick={item?.onClick}
          className="!px-0 !w-1/54"
          icon={
            <img
              src={item?.icon}
              className="w-[16px] stroke-teal-900"
              alt={item?.title}
            />
          }
        />
      ))}
    </BottomNavigation>
  );
};

export default ButtonNavigation;
