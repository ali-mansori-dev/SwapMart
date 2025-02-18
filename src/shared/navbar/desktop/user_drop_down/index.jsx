import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Button, Divider, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

import ChevrowDown from "../../../../assets/icon/chevron-down.svg";
import person from "../../../../assets/icon/person-outline.svg";
import { openLayout, resetAll } from "../../../../features/layout/layoutSlice";
import { log_out } from "../../../../features/auth/authSlice";
import Supabase from "../../../../lib/helper/ClientSupabase";
import CartDialog from "../cart_dialog";
import { useState } from "react";

const UserDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const { is_user_drop_down_open } = useSelector((state) => state.layout);
  const { is_authed } = useSelector((redux) => redux.auth);

  const handleClick = (event) => {
    dispatch(openLayout("is_user_drop_down_open"));
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    dispatch(resetAll());
  };

  const handleLogout = () => {
    Supabase.auth.signOut({ scope: "local" });
    dispatch(log_out());
    dispatch(resetAll());
  };

  const authDropDownItems = [
    { title: "My Posts", link: `/my-panel/my-post` },
    { title: "My Notes", link: `/my-panel/notes` },
    { title: "My Saved", link: `/my-panel/saved` },
  ];

  return (
    <div>
      <div className="relative flex flex-row gap-3">
        {is_authed ? (
          <Button
            size="small"
            className={`!py-1`}
            variant="text"
            onClick={handleClick}
            endIcon={
              <span className="flex">
                <img className="w-4 h-4" src={ChevrowDown} alt="chevrow-down" />
              </span>
            }
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                fontSize: 18,
                backgroundColor: "gainsboro",
              }}
            >
              <img src={person} className="w-[20px]" />
            </Avatar>
          </Button>
        ) : (
          <Button
            size="small"
            className={`!px-4 !text-sm`}
            variant="outlined"
            onClick={() => dispatch(openLayout("is_auth_modal_open"))}
            startIcon={<img src={person} className="w-[20px]" />}
          >
            Sign in
          </Button>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={is_user_drop_down_open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem sx={{ width: "200px" }}>
            <Link to={`/my-panel/dashboard`}>My account</Link>
          </MenuItem>
          <Divider />
          {authDropDownItems.map((value, index) => {
            return <MenuItem key={index}>{value.title}</MenuItem>;
          })}
          <Divider />
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <CartDialog />
      </div>
    </div>
  );
};
UserDropDown.propTypes = {
  loginFn: PropTypes.func,
  toggle_drop_down: PropTypes.func,
  isDropOpen: PropTypes.bool,
  auth: PropTypes.any,
  log_out: PropTypes.func,
};
export default UserDropDown;
