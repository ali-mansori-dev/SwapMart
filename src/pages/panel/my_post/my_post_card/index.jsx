
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button } from "@mui/material";
import { memo } from "react";

import PropTypes from "prop-types";
import { formatteCurrency } from "../../../../utils/formatNumber";
import { fromNow } from "../../../../utils/dateFormat";

function MyPostCard({
  // onDelete,
  // _id,
  title,
  images,
  district,
  slug,
  amount,
  createdAt,
  isDelete = false,
}) {
  const navigate = useNavigate();
  const navigateEditHandle = (e) => {
    e.preventDefault();
    navigate(`/my-panel/my-post/edit/${slug}`);
  };
  // const [deleteModelOpen, toggleDeleteModelOpen] = useToggle(false);
  // const [promoteModelOpen, togglePromoteModelOpen] = useToggle(false);

  const handleEdit = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <>
      <Link
        to={`/v/${slug}`}
        className="relative flex flex-col gap-6 p-4 border border-gray-200 rounded-2xl  cursor-pointer h-max"
      >
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col justify-between w-max h-[130px] max-w-[50%]">
            <h1 className="text-gray-700 text-sm font-semibold w-full leading-7 line-clamp-1">
              {title}
            </h1>
            <div className="flex flex-col gap-1">
              <div className="text-gray-400 text-xs py-1">
                {amount && amount > 0
                  ? `${formatteCurrency(amount)}`
                  : "Best offer"}
              </div>
              <span className="text-gray-400 text-xs Fanum">
                {fromNow(createdAt)} in {district}
              </span>
            </div>
          </div>
          <div className="relative w-[130px] h-[130px] pb-2/3 rounded-md">
            {images[0] ? (
              <img
                className="absolute w-[130px] h-full inset-0 object-cover object-top rounded-xl"
                src={`${images[0]}`}
                alt={title}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400">
                {/* <ImageOffIcon size={32} /> */}
              </div>
            )}
            
          </div>
        </div>
        {isDelete ? (
          <Alert icon={<></>} severity="error">
            آگهی حذف شده است
          </Alert>
        ) : (
          <div className="flex flex-col gap-3" onClick={handleEdit}>
            <div className="w-full flex flex-row lg:flex-row gap-3">
              {/* <RWebShare
                data={{
                  url: `/v/${slug}`,
                  title: `${title}`,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  className="!w-full"
                  startIcon={<Share2Icon className="!stroke-[1px]" size={16} />}
                >
                  اشتراک
                </Button>
              </RWebShare> */}
              <Button
                onClick={navigateEditHandle}
                variant="outlined"
                size="small"
                className="!w-full"
                // startIcon={<PenLineIcon className="!stroke-[1px]" size={16} />}
              >
                edit
              </Button>
              <Button
                // onClick={toggleDeleteModelOpen}
                variant="outlined"
                size="small"
                className="!w-full"
                // startIcon={<TrashIcon className="!stroke-[1px]" size={16} />}
              >
                delete
              </Button>
            </div>
            <div className="w-full flex flex-row lg:flex-row gap-3">
              <Button
                // onClick={togglePromoteModelOpen}
                variant="outlined"
                size="small"
                className="!w-full"
                // startIcon={
                //   special ? (
                //     <StarOffIcon
                //       className="!stroke-[1px] text-yellow-600"
                //       size={18}
                //     />
                //   ) : (
                //     <StarIcon
                //       className="!stroke-[1px] text-yellow-600"
                //       size={18}
                //     />
                //   )
                // }
                type="link"
                href={`/my-panel/my-post/edit/${slug}`}
              >
                special
              </Button>
            </div>
          </div>
        )}
      </Link>
      {/* <DeleteModal
        _id={_id}
        onDelete={onDelete}
        open={deleteModelOpen}
        setOpen={toggleDeleteModelOpen}
      />
      <SpecialModal
        _id={_id}
        onDelete={onDelete}
        open={promoteModelOpen}
        setOpen={togglePromoteModelOpen}
        special={special}
      /> */}
    </>
  );
}
MyPostCard.propTypes = {
  onDelete: PropTypes.func,
  _id: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.string,
  district: PropTypes.string,
  slug: PropTypes.string,
  amount: PropTypes.string,
  createdAt: PropTypes.string,
  isDelete: PropTypes.bool,
};
export default memo(MyPostCard);
