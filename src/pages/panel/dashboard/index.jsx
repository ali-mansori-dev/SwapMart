import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import DashboardMobile from './mobile'
import DashboardDesktop from './desktop'

const Dashboard = ({ isMobile }) => {
  const { user_info } = useSelector((redux) => redux.auth);

  return isMobile ? (
    <DashboardMobile user_info={user_info} />
  ) : (
    <DashboardDesktop user_info={user_info} />
  );
};
Dashboard.propTypes = { isMobile: PropTypes.bool };
export default Dashboard;
