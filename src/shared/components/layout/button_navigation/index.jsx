import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  open_auth_modal,
  open_category_modal_component,
} from "../../../../features/layout/layoutSlice";
import price_icon from "../../../../assets/icon/pricetag-outline.svg";
import person_icon from "../../../../assets/icon/person-outline.svg";
import home_icon from "../../../../assets/icon/home-outline.svg";
import grid_icon from "../../../../assets/icon/grid-outline.svg";
import login_icon from "../../../../assets/icon/log-in.svg";
import CategoryModal from "../../category/modal";

const ButtonNavigation = () => {
  const { is_authed } = useSelector((redux) => redux.auth);
  const { is_category_modal_component } = useSelector((redux) => redux.layout);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };
  const openLoginModal = () => {
    dispatch(open_auth_modal());
  };
  const openCategoryModal = () => {
    dispatch(open_category_modal_component());
  };
  const onCategoryItemClick = (item) => {
    item?.slug && navigate(`/${item?.slug}`);
  };
  const items = !is_authed
    ? [
        { title: "Home", icon: home_icon, link: "/" },
        {
          title: "Categories",
          icon: grid_icon,
          link: "#",
          onClick: openCategoryModal,
        },
        {
          title: "Login",
          icon: login_icon,
          link: "#",
          onClick: openLoginModal,
        },
      ]
    : [
        { title: "Home", icon: home_icon, link: "/" },
        {
          title: "Categories",
          icon: grid_icon,
          link: "#",
          onClick: openCategoryModal,
        },
        { title: "Sell", icon: price_icon, link: "/new" },
        {
          title: "Profile",
          icon: person_icon,
          link: "/my-panel/dashboard",
        },
      ];

  return (
    <>
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, color: "black" }}
        className="!border-t border-gray-300 !h-[64px]"
        elevation={1}
        style={{ color: "black" }}
        value={"/"}
        onChange={handleChange}
        showLabels
      >
        {items?.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item?.title}
            value={item?.link}
            onClick={item?.onClick}
            className="!py-3"
            icon={
              <img
                src={item?.icon}
                className="w-[17px] stroke-teal-900"
                alt={item?.title}
              />
            }
          />
        ))}
      </BottomNavigation>
      {is_category_modal_component && (
        <CategoryModal onCategorySelect={onCategoryItemClick} />
      )}
    </>
  );
};

export default ButtonNavigation;
