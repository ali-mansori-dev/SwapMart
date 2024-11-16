import { useSelector } from "react-redux";
import BasicLayoutMobile from "../../../layouts/desktop/basic_layout";
import SideBar from "../side_bar";

const MyBookmark = () => {
  const { user_info } = useSelector((redux) => redux.auth);
  // const { data, isLoading } = useQuery("my_post", fetchMyBookmark);
  return (
    <BasicLayoutMobile>
      <div className="flex flex-row gap-4">
        <SideBar />
        <div className="border flex flex-col gap-4 w-3/4 border-gray-300 rounded-md p-4">
          <img
            src={user_info?.user_metadata?.avatar_url}
            className="w-14 h-w-14 rounded-full"
            alt="avatar_pictures"
          />
          <div>{user_info?.user_metadata?.full_name}</div>
          <div>{user_info?.phone || user_info?.email}</div>
        </div>
      </div>
    </BasicLayoutMobile>
  );
};

export default MyBookmark;
