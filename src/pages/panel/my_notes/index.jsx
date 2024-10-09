import { useQuery } from "react-query";

import { fetchMyNotes } from "../../../queries/post";
import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import MyNotePostCard from "./note_post_card";

const MyNotes = () => {
  const { data, isLoading } = useQuery("my_notes", fetchMyNotes);

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

export default MyNotes;
