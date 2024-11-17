import { useSelector } from "react-redux";
import BasicLayoutMobile from "../../../layouts/desktop/basic_layout";
import SideBar from "../side_bar";
import { find_my_posts } from "./query";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import My_post_card from "./my_post_card";

const MyPost = () => {
  const { user_info } = useSelector((redux) => redux.auth);
  const { data, isLoading } = useQuery(
    "my_post",
    find_my_posts.bind(this, user_info?.id)
  );

  return (
    <BasicLayoutMobile>
      <div className="flex flex-row gap-4">
        <SideBar />
        <div className="border flex flex-col gap-4 w-3/4 border-gray-300 rounded-md p-4">
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            data?.map((item, index) => <My_post_card key={index} {...item} />)
          )}
        </div>
      </div>
    </BasicLayoutMobile>
  );
};

export default MyPost;
