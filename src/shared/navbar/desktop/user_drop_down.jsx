import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { log_out } from "../../../features/auth/authSlice";
import {
  open_user_dropdown,
  close_all,
} from "../../../features/layout/layoutSlice";

const DropItemComponent = ({
  title,
  link,
  secondary,
  className,
  onClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    return;
  },
}) => {
  return (
    <li
      onClick={onClick}
      className={`flex border-gray-200 text-gray-800 Fanum cursor-pointer hover:bg-gray-50 ${className}`}
    >
      {link && link !== "" ? (
        <Link
          className="Fanum w-full flex flex-col justify-start gap-1 px-3 py-3"
          to={link}
        >
          <div className="text-sm">{title}</div>
          {secondary && (
            <div className="Fanum text-xs text-gray-400">{secondary}</div>
          )}
        </Link>
      ) : (
        <div
          className="Fanum flex flex-col justify-start gap-1 px-3 py-3"
          onClick={onClick}
        >
          <div className="text-sm">{title}</div>
          {secondary && (
            <div className="Fanum text-xs text-gray-400">{secondary}</div>
          )}
        </div>
      )}
    </li>
  );
};

const UserDropDown = () => {
  const { isUserDropDownOpen } = useSelector((state) => state.layout);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toggle = () => {
    if (!isUserDropDownOpen) return dispatch(open_user_dropdown());
    dispatch(close_all());
  };
  // const handleClick = () => {
  //   if (auth?.isAuthed) {
  //     return toggle_drop_down();
  //   }
  //   loginFn();
  // };

  const handleLogout = () => {
    log_out();
  };

  const authDropDownItems = [
    { title: "My Posts", link: `/my-panel/my-post` },
    { title: "My Notes", link: `/my-panel/notes` },
    { title: "My Bookmark", link: `/my-panel/saved` },
    { title: "Recently Viwed", link: `/my-panel/recent` },
  ];

  return (
    <div>
      <div className="relative">
        <Button
          size="small"
          className={`${isUserDropDownOpen && `!bg-gray-100`}`}
          variant="textonly"
          // startIcon={<User size={16} />}
          onClick={toggle}
        >
          my panel
        </Button>
        {/* {auth?.isAuthed && isUserDropDownOpen && (
          
        )} */}
        {isUserDropDownOpen && (
          <ul
            className="absolute bg-white border border-gray-300 rounded-md w-[170px] mt-1 overflow-hidden shadow"
            onBlur={toggle}
          >
            <DropItemComponent
              className="border-b"
              title="My Account"
              link={`/my-panel/my-post`}
              secondary={auth?.userInfo?.mobile}
            />
            {authDropDownItems.map((value, index) => {
              return <DropItemComponent key={index} {...value} />;
            })}
            <DropItemComponent
              className="border-t"
              title="Logout"
              onClick={handleLogout}
            />
          </ul>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ log_out }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown);

UserDropDown.propTypes = {
  loginFn: PropTypes.func,
  toggle_drop_down: PropTypes.func,
  isDropOpen: PropTypes.bool,
  auth: PropTypes.any,
  log_out: PropTypes.func,
};
DropItemComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  secondary: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
