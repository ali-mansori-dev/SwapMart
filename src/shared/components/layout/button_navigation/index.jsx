import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  openLayout,
  resetAll,
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

  // Handlers
  const handleChange = (event, newValue) => navigate(newValue);
  const openLoginModal = () => dispatch(openLayout("is_auth_modal_open"));
  const openCategoryModal = () => dispatch(openLayout("is_category_modal_component"));
  const onCategoryItemClick = (item) => {
    if (item?.slug) navigate(`/${item.slug}`);
  };

  // Generate navigation items dynamically
  const getNavigationItems = () =>
    is_authed
      ? [
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
        ]
      : [
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
        ];

  // Navigation items
  const items = getNavigationItems();

  return (
    <>
      {/* Bottom Navigation */}
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #e0e0e0",
          height: 64,
          bgcolor: "white",
        }}
        value="/"
        onChange={handleChange}
        showLabels
      >
        {items.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.title}
            value={item.link}
            onClick={item.onClick || (() => navigate(item.link))}
            sx={{
              py: 1,
              "& img": { width: 17, color: "teal" },
            }}
            icon={<img src={item.icon} alt={item.title} />}
          />
        ))}
      </BottomNavigation>

      {/* Category Modal */}
      {is_category_modal_component && (
        <CategoryModal onCategorySelect={onCategoryItemClick} all_item />
      )}
    </>
  );
};

export default ButtonNavigation;
