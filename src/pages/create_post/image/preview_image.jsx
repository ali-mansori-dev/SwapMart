import PropTypes from "prop-types";

const PreviewImage = ({
  width = 24,
  height = 24,
  blob,
  // id,
  uploaded,
  percent = 0,
  // deleteFn,
}) => {


  return (
    <div className="w-max h-max relative">
      {uploaded === false && (
        <div className="flex items-center justify-center bg-white bg-opacity-35 absolute top-0 left-0 bottom-0 right-0 z-50">
          <progress
            className="progress !bg-primary-50 w-[70%] h-3 border border-white !rounded-lg overflow-hidden"
            value={percent}
            max="100"
          ></progress>
        </div>
      )}
      <img
        className={`w-${width} h-${height} border rounded-md object-cover`}
        src={blob}
        alt={blob}
        loading="lazy"
      />
      {uploaded !== false && (
        <div className="absolute w-max h-max p-1 rounded-md bg-gray-300 top-2 left-2 cursor-pointer opacity-40 hover:opacity-95">
          {/* <TrashIcon
            onClick={() => {
              DeleteImageMutation.mutateAsync(id);
              deleteFn();
            }}
            size={16}
          /> */}
        </div>
      )}
    </div>
  );
};
PreviewImage.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  blob: PropTypes.any,
  id: PropTypes.any,
  uploaded: PropTypes.any,
  percent: PropTypes.any,
  deleteFn: PropTypes.any,
};
export default PreviewImage;
