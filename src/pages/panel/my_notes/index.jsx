import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { find_my_notes } from "./query";
import MyNotesDesktop from "./desktop";
import MyNotesMobile from "./mobile";

const MyNotes = ({ isMobile }) => {
  const { user_info } = useSelector((redux) => redux.auth);
  const { data, isLoading } = useQuery(
    "my_notes",
    find_my_notes.bind(this, user_info?.id)
  );
  const props = {
    data,
    isLoading,
  };
  return isMobile ? (
    <MyNotesMobile {...props} />
  ) : (
    <MyNotesDesktop {...props} />
  );
};
MyNotes.propTypes = { isMobile: PropTypes.bool };
export default MyNotes;
