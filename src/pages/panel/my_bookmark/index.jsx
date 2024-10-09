import { useQuery } from "react-query";

import { fetchMyBookmark } from "../../../queries/post";
import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import My_post_card from "./my_post_card";

const MyBookmark = () => {
  const { data, isLoading } = useQuery("my_saved", fetchMyBookmark);

  return (
    <BasicLayoutMobile>
      {isLoading
        ? "Loading..."
        : data?.map((value, index) => <My_post_card key={index} {...value}/>)}
    </BasicLayoutMobile>
  );
};

export default MyBookmark;
