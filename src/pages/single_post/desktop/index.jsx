import PropTypes from "prop-types";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import { LoadingScreenFixed } from "../../../shared/loader";
// import PostBreadcrumbs from "../post_breadcrumbs";
import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";
import { Alert, Button } from "@mui/material";
import Images from "../images";
import { useEffect } from "react";
import Supabase from "../../../lib/helper/ClientSupabase";

const Desktop = ({ data, isLoading }) => {
  useEffect(() => {
    (async function () {
      const { error } = await Supabase.auth.resend({
        type: "signup",
        email: "alimansi1382@gmail.com",
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
      console.log(error);
    })();
  }, []);
  return (
    <BasicLayoutDesktop>
      {!isLoading ? (
        <div className="w-full flex-col flex justify-between gap-6 px-28 py-4">
          {/* <PostBreadcrumbs
            bread_crumb={data?.bread_crumb}
            title={data?.data?.title}
          /> */}
          <div className="w-full flex justify-between gap-10">
            <div className="flex flex-col gap-4 w-1/2">
              <h5 className="text-xl text-gray-900 leading-10">
                {data?.title}
              </h5>
              <div className="Fanum text-sm lg:text-md w-2/3 text-left text-gray-600 ">
                {data?.amount && data?.amount > 0
                  ? formatteCurrency(data?.amount)
                  : "Best Offer"}
              </div>
              <span className="text-gray-400 text-xs Fanum mb-3">
                {fromNow(data?.updatedAt)} in {data?.district}
              </span>
              {data?.isDelete ? (
                <Alert icon={<></>} severity="error">
                  آگهی حذف شده است
                </Alert>
              ) : (
                <div className="w-full flex justify-between">
                  <div className="flex flex-row gap-3 ">
                    <Button
                      size="medium"
                      variant="contained"
                      //   disabled={showPhone}
                      //   onClick={setShowPhone.bind(this, true)}
                    >
                      Contact Info
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 "></div>
                </div>
              )}
              <hr className="w-full" />
            </div>
            <div className="flex flex-col gap-6 w-1/2">
              {data?.images[0] && <Images images={data?.images} />}
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreenFixed />
      )}
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Desktop;
