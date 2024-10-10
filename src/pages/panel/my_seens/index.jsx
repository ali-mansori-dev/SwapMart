import { useQuery } from "react-query";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import MyNotePostCard from "./note_post_card";
import { fetchMySeens } from "../../../queries/post";

const MySeens = () => {
  const { data, isLoading } = useQuery("my_seens", fetchMySeens);

  return (
    <BasicLayoutMobile>
      {isLoading
        ? "Loading..."
        : data?.map((value, index) => (
            <MyNotePostCard key={index} {...value} />
          ))}
    </BasicLayoutMobile>
  );
};

export default MySeens;
