import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

function MyNotePostCard({ post }) {
  const handleOpen = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Link
        to={`/v/${post?.slug}`}
        className="flex flex-row gap-4 p-3 border bg-white border-gray-200 rounded-2xl  cursor-pointer relative h-max"
      >
        <div className="relative w-[80px] h-[80px] pb-2/3  rounded-md">
          {post?.images[0] ? (
            <img
              className="absolute w-[80px] h-full inset-0 object-cover object-top rounded-xl"
              // src={`${post?.images[0]}`}
              src={`https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg`}
              alt={post?.title}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400"></div>
          )}
        </div>{" "}
        <div className="flex flex-col justify-between h-full w-[calc(100%-80px)] ">
          <div className="text-gray-700 text-sm h-max font-semibold w-full leading-7 line-clamp-1">
            {post?.title}
          </div>
          <div className="flex flex-row items-center gap-1 text-gray-500 text-xs pt-8">
            {/* <p className="line-clamp-1">{body}</p> */}
          </div>
          <div className=" absolute bottom-2 left-2" onClick={handleOpen}>
            <IconButton size="medium"></IconButton>
          </div>
        </div>
      </Link>
    </>
  );
}
MyNotePostCard.propTypes = {
  onDelete: PropTypes.any,
  post: PropTypes.any,
};
export default memo(MyNotePostCard);
