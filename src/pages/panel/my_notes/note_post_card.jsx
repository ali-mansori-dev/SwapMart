// import { ImageOffIcon, Info, NotebookPenIcon, TrashIcon } from "lucide-react";
// import { useMutation } from "@tanstack/react-query";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

// import { DeleteNoteFn } from "../mutation";

function MyNotePostCard({
  // onDelete,
  post,
}) {
  console.log(post);

  // const [open, setOpen] = useState(false);

  // const deletePostMutation = useMutation({
  //   mutationFn: DeleteNoteFn,
  // });
  // const handleDelete = async (event) => {
  //   event.preventDefault();
  //   if (_id) {
  //     // await deletePostMutation.mutateAsync(_id);
  //     onDelete();
  //   }
  // };
  // const handleClose = setOpen.bind(this, false);
  const handleOpen = (event) => {
    event.preventDefault();
    // setOpen(true);
  };
  return (
    <>
      <Link
        to={`/v/${post?.slug}`}
        className="flex flex-row gap-4 p-3 border border-gray-200 rounded-2xl  cursor-pointer relative h-max"
      >
        <div className="relative w-[80px] h-[80px] pb-2/3  rounded-md">
          {post?.images[0] ? (
            <img
              className="absolute w-[80px] h-full inset-0 object-cover object-top rounded-xl"
              src={`${post?.images[0]}`}
              alt={post?.title}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400"></div>
          )}
        </div>{" "}
        <div className="flex flex-col justify-between h-full w-[calc(100%-80px)] ">
          <h1 className="text-gray-700 text-sm h-max font-semibold w-full leading-7 line-clamp-1">
            {post?.title}
          </h1>
          <div className="flex flex-row items-center gap-1 text-gray-500 text-xs pt-8">
            {/* <p className="line-clamp-1">{body}</p> */}
          </div>
          <div className=" absolute bottom-2 left-2" onClick={handleOpen}>
            <IconButton size="medium"></IconButton>
          </div>
        </div>
      </Link>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{ justifyContent: "center", gap: "0.5rem", padding: "1rem" }}
        >
          <div className="w-[74vw] lg:w-[300px] items-center flex flex-col gap-8">
            <div className="w-full flex flex-col items-center gap-4">
              <span className="text-gray-400">
                <Info size={36} />
              </span>

              <p className="text-base">از حذف آگهی مطمئن هستید؟</p>
            </div>
            <div className="flex flex-row gap-4">
              <Button
                onClick={handleClose}
                variant="contained"
                color="error"
                size="small"
              >
                نه، لغو
              </Button>
              <Button onClick={handleDelete} variant="outlined" size="small">
                بله من مطمئن هستم
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  );
}
MyNotePostCard.propTypes = {
  onDelete: PropTypes.any,
  post: PropTypes.any,
};
export default memo(MyNotePostCard);
