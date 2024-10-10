import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasicLayoutMobile from "../../layouts/mobile/basic_layout";

const Dashboard = () => {
  const { userInfo } = useSelector((redux) => redux.auth);
  return (
    <BasicLayoutMobile>
      <div className="flex flex-col gap-2">
        {userInfo?.mobile || userInfo?.email}
        <Link to={'/my-panel/my-post'}>My Post</Link>
        <Link to={'/my-panel/notes'}>My Notes</Link>
        <Link to={'/my-panel/saved'}>My Saved</Link>
        <Link to={'/my-panel/recent'}>Recently Viewd</Link>
      </div>
    </BasicLayoutMobile>
  );
};

export default Dashboard;
