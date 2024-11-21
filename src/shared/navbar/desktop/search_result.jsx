import { Link } from "react-router-dom";
// import PopularSearch from "../search/popular_search";
// import Spinner from "../../../../../shared/components/spiner";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { close_all } from "../../../features/layout/layoutSlice";

const SearchResult = ({ data }) => {
  const dispatch = useDispatch();
  const { is_search_result_open } = useSelector((redux) => redux.layout);
  const onClose = () => dispatch(close_all());
  return (
    is_search_result_open && (
      <>
        <div
          onClick={onClose}
          className="fixed top-[64px] left-0 right-0 bottom-0 bg-black bg-opacity-25 z-0"
        ></div>
        <div className="absolute left-0 top-[110%] max-h-[60vh] overflow-y-auto flex gap-4 right-0 bg-white z-30 rounded-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <div className="w-full flex flex-col gap-0">
            {data?.length ? (
              data?.map((value, index) => (
                <Link
                  className="flex flex-col gap-2 p-4 hover:bg-gray-100 w-full border-b"
                  to={`/${value.slug}`}
                  onClick={onClose}
                  key={index}
                >
                  <span className="text-gray-800 text-sm">{value.name}</span>
                  {/* {value.parent && (
                    <span className="text-gray-400 text-xs">
                      در {value.parent.name}
                    </span>
                  )} */}
                </Link>
              ))
            ) : (
              <div className="flex flex-col gap-2 p-4 hover:bg-gray-100 w-full border-b">
                No Result Found!
              </div>
            )}
          </div>
          {/* {searchMutation?.data ? (
            <>
              {searchMutation?.isSuccess ? (
                
              ) : (
                1111
                // <Spinner />
              )}
            </>
          ) : (
            111
            // <PopularSearch onClose={onClose} />
          )} */}
        </div>
      </>
    )
  );
};
SearchResult.propTypes = {
  data: PropTypes.array,
};
export default SearchResult;
